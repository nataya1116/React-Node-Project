const UserService = require("../service/user_service");
const { SUCCESSE, FAIL, OVERLAP, POSSIBLE,  } = require("../config/respons");

module.exports.joinUser = async (req, res) => {
    const { userId, userPw, userNickname, userEmail } = req.body;

    const result = await UserService.joinUser({userId, userPw, userNickname, userEmail});

    console.log(result);

    if(result){
        res.send({SUCCESSE});
    }else{
        res.send({FAIL});
    }
}

module.exports.overlapUserId = async (req, res) => {
    const { userId } = req.params;
    const result = await UserService.overlapUserId(userId);

    if(result){
        res.send({OVERLAP});
    }else{
        res.send({POSSIBLE});
    }
}