const { UserService, InactiveUserService ,TokenService } = require("../service");
const { CONDITION, AUTHORITY } = require("../config/config");

module.exports.validity = async (req, res, next) => {
  const accessToken = await req.session?.access_token;
  const refreshToken = await req.session?.refresh_token;
  // 모든 if의 조건이 아닐경우 엑세스토큰 재생성
  if (!accessToken || !refreshToken) {
    return res.redirect("/user/login");
  }
  const decodeAcc = TokenService.verifyAccessToken(accessToken);

  if(decodeAcc.stateNo == CONDITION.INACTIVITY){  
    return await inactive(decodeAcc.id);
  } else if(decodeAcc.stateNo == CONDITION.WAITING){
    return waiting();
  }

  if (decodeAcc) {
    return next();
  }

  const decodeRe = TokenService.verifyRefreshToken(refreshToken);

  if (!decodeRe) {
    return res.redirect("/user/login");
  }

  if(decodeRe.stateNo == CONDITION.INACTIVITY){
    return await inactive(decodeRe.id);
  } else if(decodeRe.stateNo == CONDITION.WAITING){
    return waiting();
  }

  const id = decodeRe.id;
  const result = await UserService.login(id);
  const user = result.dataValues;

  if (refreshToken != user.refreshToken) {
    return res.redirect("/user/login");
  }

  const nickname = user.nickname;
  const authorityNo = user.authorityNo;
  const stateNo = user.stateNo;

  const accessTokenRe = TokenService.createAccessToken(
                                                        id,
                                                        nickname,
                                                        authorityNo,
                                                        stateNo
                                                      );

  req.session.access_token = accessTokenRe;

  return next();
};

module.exports.pass = async (req, res, next) => {
  const accessToken = await req.session?.access_token;
  const refreshToken = await req.session?.refresh_token;

  if (!accessToken || !refreshToken) {
    return next();
  }
  const decodeAcc = TokenService.verifyAccessToken(accessToken);

  if (decodeAcc) {
    return next();
  }

  const decodeRe = TokenService.verifyRefreshToken(refreshToken);

  if (!decodeRe) {
    return next();
  }

  const id = decodeRe.id;
  const result = await UserService.login(id);
  const user = result.dataValues;

  if (refreshToken != user.refreshToken) {
    return next();
  }

  const nickname = user.nickname;
  const authorityNo = user.authorityNo;
  const stateNo = user.stateNo;

  const accessTokenRe = TokenService.createAccessToken(
                                                        id,
                                                        nickname,
                                                        authorityNo,
                                                        stateNo
                                                      );

  req.session.access_token = accessTokenRe;

  return next();
};

module.exports.validityAdmin = async (req, res, next) => {
  const accessToken = await req.session?.access_token;
  const refreshToken = await req.session?.refresh_token;

  if (!accessToken || !refreshToken) {
    return res.redirect("/user/login");
  }
  const decodeAcc = TokenService.verifyAccessToken(accessToken);

  if (decodeAcc?.authorityNo == AUTHORITY.ADMIN) {
    return next();
  }

  if(decodeAcc){
    return notAdmin();
  }

  const decodeRe = TokenService.verifyRefreshToken(refreshToken);

  if (!decodeRe) {
    return res.redirect("/user/login");
  }

  if (decodeRe.authorityNo != AUTHORITY.ADMIN){
    return notAdmin();
  }

  const id = decodeRe.id;
  const result = await UserService.login(id);
  const user = result.dataValues;

  if (refreshToken != user.refreshToken) {
    return res.redirect("/user/login");
  }

  const nickname = user.nickname;
  const authorityNo = user.authorityNo;
  const stateNo = user.stateNo;

  const accessTokenRe = TokenService.createAccessToken(
                                                        id,
                                                        nickname,
                                                        authorityNo,
                                                        stateNo
                                                      );

  req.session.access_token = accessTokenRe;

  return next();
};

// 아래는 미들웨어 내부에서만 사용할 함수들
async function inactive(id) {
  const date = await InactiveUserService.findStopFewDays(id);
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write("<script>window.location='/user/login'</script>");
  res.write(`<script>alert('${date}까지 활동 불가합니다.')</script>`);
  res.end();
}

function waiting() {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write("<script>window.location='/user/login'</script>");
  res.write(`<script>alert('가입 승인 전까지는 활동이 불가합니다.')</script>`);
  res.end();
}

function notAdmin(){
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write("<script>window.location='/user/login'</script>");
  res.write("<script>alert('관리자만 이용 가능합니다.')</script>");
  res.end();
}