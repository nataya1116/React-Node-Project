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
    console.log(result);

    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");

    if(result){
        res.send({POSSIBLE});
    }else{
        res.send({OVERLAP});
    }
}