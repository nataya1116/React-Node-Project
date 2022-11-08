const { NoticeReplyService } = require("../service");
const { SUCCESS, FAIL,  } = require("../config/respons");

module.exports.create = async (req, res) => {
    console.log("c notice reply create");
    const accessToken = req.headers?.access_token;
    const user = TokenService.verifyAccessToken(accessToken);
    const id = user?.id;
    const { boardNo, content } = req.body;
    console.log("create()", id, boardNo, content);
    const result = await NoticeReplyService.create({ id, boardNo, content });

    if(result){
        res.send({ret : SUCCESS});
    }else{
        res.send({ret : FAIL});
    }
}

module.exports.createNested = async (req, res) => {
    const { offset, userId, boardNo, replyId, content } = req.body;
    // console.log("createNested()",offset, userId, boardNo, replyId, content);
    await NoticeReplyService.createNested({ userId, boardNo, replyId, content });

    res.redirect("/notice_board/read/"+offset);
}

module.exports.update = async (req, res) => {
    const { offset, id, content } = req.body;
    await NoticeReplyService.update(id, content);

    res.redirect("/notice_board/read/"+offset);
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