const UserService = require("../service/user_service");
const { SUCCESSE, FAIL, OVERLAP, POSSIBLE,  } = require("../config/respons");

module.exports.joinUser = async (req, res) => {
    const { userId, userPw, userNickname, userEmail } = req.body;

    const result = await UserService.joinUser({userId, userPw, userNickname, userEmail});

    console.log(result);


    if(result){
        res.send({ret : SUCCESSE});
    }else{
        res.send({ret : FAIL});
    }
}

module.exports.overlapUserId = async (req, res) => {
    // res.send({ret : POSSIBLE});
    
    const { userId } = req.params;
    const result = await UserService.overlapUserId(userId);
    console.log(result);

    resHeader(res);

    if(result){
        res.send({ret : POSSIBLE});
    }else{
        res.send({ret : OVERLAP});
    }
}

module.exports.overlapUserNickname = async (req, res) => {
    // res.send({ret : POSSIBLE});
    const { userNickname } = req.params;
    const result = await UserService.overlapUserNickname(userNickname);
    console.log(result);

    resHeader(res);

    if(result){
        res.send({ret : POSSIBLE});
    }else{
        res.send({ret : OVERLAP});
    }
}

module.exports.overlapUserEmail = async (req, res) => {
    const { userEmail } = req.params;
    const result = await UserService.overlapUserEmail(userEmail);
    console.log(result);

    resHeader(res);

    
    if(result){
        res.send({ret : POSSIBLE});
    }else{
        res.send({ret : OVERLAP});
    }
}

function resHeader(res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    res.header('Content-Type', 'text/html; charset=utf-8' );
}
