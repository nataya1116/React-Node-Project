const { NoticeReplyService, TokenService } = require("../service");
const { SUCCESS, FAIL,  } = require("../config/respons");

module.exports.create = async (req, res) => {
    console.log("c notice reply create");
    const accessToken = req.headers?.access_token;
    const user = TokenService.verifyAccessToken(accessToken);
    const id = user?.id;

    const { boardNo, content, replyNo } = req.body;
    console.log("create()", id, boardNo, content);
    const result = await NoticeReplyService.create({ id, boardNo, content, replyNo });
    const reply = result?.dataValues;
    if(result){
        res.send({ret : SUCCESS, reply });
    }else{
        res.send({ret : FAIL});
    }
}

module.exports.update = async (req, res) => {
    console.log("c notice reply update");
    const accessToken = req.headers?.access_token;
    const user = TokenService.verifyAccessToken(accessToken);
    const id = user?.id;

    const { no, content } = req.body;
    console.log({id, no, content});
    const result = await NoticeReplyService.update(id, no, content);

    if(result){
        res.send({ret : SUCCESS});
      }else{
        res.send({ret : FAIL});
      }
}

// module.exports.updateView = async (req, res) => {
//     const { id, offset } = req.body;
    
//     res.render("notice_board_update");
// }

module.exports.delete = async (req, res) => {
    const id = Number(req.params.id);
    const offset = Number(req.params.offset);

    await NoticeReplyService.delete(id);

    res.redirect("/notice_board/read/"+offset);
}