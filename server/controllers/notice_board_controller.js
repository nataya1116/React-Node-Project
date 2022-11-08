const { NoticeBoardService, 
        NoticeReplyService, 
        TokenService } = require("../service");

const { AUTHORITY, BOARDS } = require("../config/state");
const { SUCCESS, FAIL,  } = require("../config/respons");

module.exports.create = async (req, res) => {
  console.log("create");
  const accessToken = req.headers?.access_token;

  const user = TokenService.verifyAccessToken(accessToken);
  const id = user?.id;

  const { title, content } = req.body;

  const result = await NoticeBoardService.create({ id, title, content });
  console.log(result);
  const post = result?.dataValues;
  
  if(result){
    res.send({ret : SUCCESS,  post });
  }else{
    res.send({ret : FAIL});
  }
};


module.exports.update = async (req, res) => {

  const accessToken = req.headers?.access_token;

  const user = TokenService.verifyAccessToken(accessToken);
  const id = user?.id;

  const no = Number(req.body.no);
  const { title, content } = req.body;

  const result = await NoticeBoardService.update({id, no, title, content });

  if(result){
    res.send({ret : SUCCESS});
  }else{
    res.send({ret : FAIL});
  }
};


module.exports.delete = async (req, res) => {
  console.log("delete func");
  const accessToken = req.headers?.access_token;

  const user = TokenService.verifyAccessToken(accessToken);
  const id = user?.id;

  const no = Number(req.params.no);
  const result = await NoticeBoardService.delete(id, no);
  console.log({result});
  if(result){
    res.send({ret : SUCCESS});
  }else{
    res.send({ret : FAIL});
  }
};

// 게시판 목록 페이지 네이션을 동작하게 하는 부분(검색어가 없을 때)
module.exports.searchingList = async (req, res) => {

  const offset = Number(req.params?.offset);
  const limit = Number(req.params?.limit || "10");

  const searchKey = req.params?.searchKey || null;
  const searchWord = req.params?.searchWord || null;

  const result = await NoticeBoardService.searchingList(offset, limit, searchKey, searchWord);

  if(!result) res.send({ret : FAIL});

  const list = result?.rows;

  const postNum = result?.count;
  const totalPageNum = Math.ceil(postNum / limit);

  res.send({ ret : SUCCESS, list , postNum, totalPageNum });
};

