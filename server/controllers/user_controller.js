const { UserService, EncryptionService, TokenService } = require("../service");
const { SUCCESSE, FAIL, OVERLAP, POSSIBLE,  } = require("../config/respons");

module.exports.join = async (req, res) => {

    const { id, pw, nickname, email } = req.body;
    console.log(req.body);
    const encryptedUserPw = EncryptionService.pwEncryption(pw);

    const result = await UserService.join({
        id : id, 
        userPw : encryptedUserPw, 
        nickname : nickname, 
        email : email
    });

    if(result){
        res.send({ret : SUCCESSE});
    }else{
        res.send({ret : FAIL});
    }
}

module.exports.login = async (req, res) => {

    const  { id, pw } = req.body;

    const result = await UserService.login(id);

    const user = result?.dataValues;

    if(!user?.userId) return res.send({ret : FAIL});

    const isLogin = EncryptionService.isPwCheck(pw, user?.userPw);
    
    if(!isLogin) return res.send({ret : FAIL});

    const nickname = user?.userNickname;
    const authorityId = user?.authorityId;
    const conditionId = user?.conditionId;

    const accessToken = TokenService.createAccessToken({
        id,
        nickname,
        authorityId,
        conditionId
    });

    const refreshToken = TokenService.createRefreshToken({
        id,
        nickname,
        authorityId,
        conditionId
    });

    UserService.updateUserRefreshToken(id, refreshToken);
    // {id, nickname, authorityId, conditionId}
    return res.send({ret : SUCCESSE, info : { nickname, authorityId, conditionId, accessToken, refreshToken } });
}

module.exports.overlapId = async (req, res) => {
 
    const { id } = req.params;
    const result = await UserService.overlapId(id);

    resHeader(res)
    if(result){
        res.send({ret : POSSIBLE});
    }else{
        res.send({ret : OVERLAP});
    }
}

module.exports.overlapNickname = async (req, res) => {

    const { nickname } = req.params;
    const result = await UserService.overlapNickname(nickname);

    resHeader(res)
    if(result){
        res.send({ret : POSSIBLE});
    }else{
        res.send({ret : OVERLAP});
    }
}

module.exports.overlapEmail = async (req, res) => {
    const { email } = req.params;
    const result = await UserService.overlapEmail(email);

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