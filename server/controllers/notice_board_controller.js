const { NoticeBoardService, 
        NoticeReplyService, 
        TokenService } = require("../service");

const { AUTHORITY, BOARDS } = require("../config/state");
const { SUCCESS, FAIL,  } = require("../config/respons");

module.exports.create = async (req, res) => {
  console.log(req.body);
  const { id, title, content } = req.body;
  console.log("c create() ", id, title, content);
  await NoticeBoardService.create({ id, title, content });

  res.send({ret : SUCCESS});
};

// 게시판 목록 페이지 네이션을 동작하게 하는 부분(검색어가 없을 때)
module.exports.searchingList = async (req, res) => {

  // const accessToken = req.session?.access_token;
  // const User = TokenService.verifyAccessToken(accessToken);
  const User = null;

  const searchKey = req.params?.searchKey || null;
  const searchWord = req.params?.searchWord || null;


  const page = Number(req.params.page || "1");
  const perPage = Number(req.params.perPage || "10");
  
  let offset = 0;

  
  if (page > 1) {
    offset = perPage * (page - 1);
  }

  console.log(page, perPage, searchKey, searchWord);
  const result = await NoticeBoardService.searchingList(offset, perPage, searchKey, searchWord);

  const list = result?.rows;
  const postNum = result?.count;
  const totalPageNum = Math.ceil(postNum / perPage);

  console.log(searchKey, searchWord, totalPageNum);

  res.send({ ret : SUCCESS , User, list , postNum, totalPageNum, info : { page, perPage, searchKey, searchWord } });
};

module.exports.read = async (req, res) => {

    // const accessToken = req.session?.access_token;
    // const User = TokenService.verifyAccessToken(accessToken);
    const User = null;

    const searchKey = req.params?.searchKey || null;
    const searchWord = req.params?.searchWord || null;

    const offset = Number(req.params.offset);
    const result = await NoticeBoardService.readOffset(offset, searchKey, searchWord);
    
    const post = result?.rows[0];
    post.dataValues.view++;
    const no = post.dataValues.no;

    const postNum   = result?.count;
                      await NoticeBoardService.updateReadCount(no);

    // offset 값으로 찾아서 보여주는 것이 아니라 id(pk)로 찾는 방식이라면 리플을 따로 불러올 필요 없이 NoticeBoardService.viewOffset() 함수에서 인클루드로 리플 모델을 불러와도 된다. 굳이 offset 방식으로 값을 처리한 이유는 id값으로 처리 할 경우 게시글이 삭제 되었을때 오류가 발생하기 때문이다.
    const replyList = await NoticeReplyService.list(no);

    // res.render("notice_board_view", { User, offset, post, postNum, replyList, offset, searchKey, searchWord });
    res.send({ ret : SUCCESS , User, post, postNum, replyList, info : { searchKey, searchWord } });
}

// module.exports.update = async (req, res) => {
//   const no = Number(req.body.no);
//   const offset = Number(req.body.offset);
//   const { title, content } = req.body;

//   const result = await NoticeBoardService.update({ no, title, content });
//   res.redirect("/notice_board/read/" + offset);
// };

// module.exports.updateView = async (req, res) => {
  
//   const accessToken = req.session?.access_token;
//   const User = TokenService.verifyAccessToken(accessToken);

//   const no = Number(req.params.no);
//   const offset = Number(req.params.offset);
//   // console.log(id, offset);
//   const post = await NoticeBoardService.readId(no);
//   // const post = result[0];
//   // console.log(result);
//   res.render("notice_board_update", { User, offset, post });
// };

// module.exports.delete = async (req, res) => {
//   const no = Number(req.params.no);
//   await NoticeBoardService.delete(no);

//   res.redirect("/notice_board/list/1/10");
// };
