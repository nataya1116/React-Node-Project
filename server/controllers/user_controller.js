const { UserService, EncryptionService } = require("../service");
const { SUCCESSE, FAIL, OVERLAP, POSSIBLE,  } = require("../config/respons");

module.exports.joinUser = async (req, res) => {

    const { userId, userPw, userNickname, userEmail } = req.body;
    console.log(req.body);
    const encryptedUserPw = EncryptionService.pwEncryption(userPw);

    const result = await UserService.joinUser({
        userId, 
        userPw : encryptedUserPw, 
        userNickname, 
        userEmail
    });

    if(result){
        res.send({ret : SUCCESSE});
    }else{
        res.send({ret : FAIL});
    }
}

module.exports.loginUser = async (req, res) => {
    const  { userId, userPw } = req.body;
    console.log(req.body);
    const result = await UserService.loginUser(userId, userPw);
    // console.log(result);
    const user = result?.dataValues;
    console.log(user);

    if(!user?.userId) return res.send({ret : FAIL});
    
    console.log(EncryptionService.pwEncryption("1111"));

    const accessToken = TokenService.createAccessToken({
        userId : user.userId,
        authorityId : user.authorityId,
        conditionId : user.conditionId
    });

    const refreshToken = TokenService.createRefreshToken({
        userId : user.userId,
        authorityId : user.authorityId,
        conditionId : user.conditionId
    });
    
    return res.send({ret : SUCCESSE, info : user, token : { accessToken, refreshToken }});
}

module.exports.overlapUserId = async (req, res) => {
 
    const { userId } = req.params;
    const result = await UserService.overlapUserId(userId);

    resHeader(res)
    if(result){
        res.send({ret : POSSIBLE});
    }else{
        res.send({ret : OVERLAP});
    }
}

module.exports.overlapUserNickname = async (req, res) => {

    const { userNickname } = req.params;
    const result = await UserService.overlapUserNickname(userNickname);

    resHeader(res)
    if(result){
        res.send({ret : POSSIBLE});
    }else{
        res.send({ret : OVERLAP});
    }
}

module.exports.overlapUserEmail = async (req, res) => {
    const { userEmail } = req.params;
    const result = await UserService.overlapUserEmail(userEmail);

    resHeader(res)
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