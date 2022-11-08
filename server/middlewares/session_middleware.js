const { UserService, InactiveUserService ,TokenService } = require("../service");
const { CONDITION, AUTHORITY } = require("../config/state");
const { LOGIN_REQ, INACTIVE, WAITING, USER } = require("../config/respons");

module.exports.validity = async (req, res, next) => {
  const accessToken = req.headers.access_token;
  const refreshToken = req.headers.refresh_token;

  console.log(req.headers);
  console.log({accessToken, refreshToken});
  // 모든 if의 조건이 아닐경우 엑세스토큰 재생성
  if (!accessToken || !refreshToken) {
    console.log("if (!accessToken || !refreshToken)");
    return res.send({ret : LOGIN_REQ});
  }
  const decodeAcc = TokenService.verifyAccessToken(accessToken);

  if(decodeAcc.stateNo == CONDITION.INACTIVITY){  
    return await inactive(decodeAcc.id);
  } else if(decodeAcc.stateNo == CONDITION.WAITING){
    return res.send({ret : WAITING});
  }

  if (decodeAcc) {
    return next();
  }

  const decodeRe = TokenService.verifyRefreshToken(refreshToken);

  if (!decodeRe) {
    console.log("if (!decodeRe)");
    return res.send({ret : LOGIN_REQ});
  }

  if(decodeRe.stateNo == CONDITION.INACTIVITY){
    return await inactive(decodeRe.id);
  } else if(decodeRe.stateNo == CONDITION.WAITING){
    return res.send({ret : WAITING});
  }

  const id = decodeRe.id;

  const result = await UserService.login(id);
  const user = result.dataValues;
  
  if (refreshToken != user.refreshToken) {
    console.log(" if (refreshToken != user.refreshToken)");
    return res.send({ret : LOGIN_REQ});
  }

  const nickname = user.nickname;
  const authorityNo = user.authorityNo;
  const stateNo = user.stateNo;

  const accessTokenRe = TokenService.createAccessToken({
                                                        id,
                                                        nickname,
                                                        authorityNo,
                                                        stateNo
                                                      });

  req.headers.access_token = accessTokenRe;

  return next();
};

module.exports.validityAdmin = async (req, res, next) => {
  const { accessToken, refreshToken } = req.headers;

  if (!accessToken || !refreshToken) {
    return res.send({ret : LOGIN_REQ});
  }
  const decodeAcc = TokenService.verifyAccessToken(accessToken);

  if (decodeAcc?.authorityNo == AUTHORITY.ADMIN) {
    return next();
  }

  if(decodeAcc){
    return res.send({ret : USER});
  }

  const decodeRe = TokenService.verifyRefreshToken(refreshToken);

  if (!decodeRe) {
    return res.send({ret : LOGIN_REQ});
  }

  if (decodeRe.authorityNo != AUTHORITY.ADMIN){
    return res.send({ret : USER});
  }

  const id = decodeRe.id;
  const result = await UserService.login(id);
  const user = result.dataValues;

  if (refreshToken != user.refreshToken) {
    return res.send({ret : LOGIN_REQ});
  }

  const nickname = user.nickname;
  const authorityNo = user.authorityNo;
  const stateNo = user.stateNo;

  const accessTokenRe = TokenService.createAccessToken({
                                                        id,
                                                        nickname,
                                                        authorityNo,
                                                        stateNo
                                                      });

  req.headers.access_token = accessTokenRe;

  return next();
};

// 아래는 미들웨어 내부에서만 사용할 함수들
async function inactive(id) {
  const date = await InactiveUserService.findStopFewDays(id);
  return res.send({ret:INACTIVE, date });
}