const { UserService, EncryptionService, TokenService } = require("../service");
const { SUCCESS, FAIL, OVERLAP, POSSIBLE,  } = require("../config/respons");

module.exports.join = async (req, res) => {

    const { id, pw, nickname, email } = req.body;
    console.log(req.body);
    const encryptedUserPw = EncryptionService.pwEncryption(pw);

    const result = await UserService.join({
        id, 
        pw : encryptedUserPw, 
        nickname, 
        email
    });

    if(result?.id){
        res.send({ret : SUCCESS});
    }else{
        res.send({ret : FAIL});
    }
}

module.exports.login = async (req, res) => {

    const  { id, pw } = req.body;
    console.log(req.body);
    const result = await UserService.login(id);

    const user = result?.dataValues;

    if(!user?.id) return res.send({ret : FAIL});

    // console.log(EncryptionService.pwEncryption("1111"));

    const isLogin = EncryptionService.isPwCheck(pw, user?.pw);
    
    if(!isLogin) return res.send({ret : FAIL});

    const nickname = user?.nickname;
    const authorityNo = user?.authorityNo;
    const stateNo = user?.stateNo;

    const accessToken = TokenService.createAccessToken({
        id,
        nickname,
        authorityNo,
        stateNo
    });

    const refreshToken = TokenService.createRefreshToken({
        id,
        nickname,
        authorityNo,
        stateNo
    });

    UserService.updateRefreshToken(id, refreshToken);
    // {id, nickname, authorityNo, stateNo}
    return res.send({ret : SUCCESS, data : { nickname, authorityNo, stateNo, accessToken, refreshToken } });
}

module.exports.logout = (req, res) => {
    const { id } = req.body;
    UserService.updateRefreshToken(id, null);
}

module.exports.getPoint = async (req, res) => {
    const { id } = req.body;
    const result = await UserService.getPoint(id);

    const user = result?.dataValues;

    if(!user?.id) return res.send({ret : FAIL});

    return res.send({ret : SUCCESS, data : { nickname, authorityNo, stateNo, accessToken, refreshToken } });

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