
const { jwt , dot } = require("../modules");

dot.config();

// 인자로 추가할 값 포인트, 권한
module.exports.createAccessToken = ({userId, nickname, authorityId, conditionId}) => {
    
    return jwt.sign(
                    {
                        userId, 
                        nickname,
                        authorityId,
                        conditionId
                    },
                    process.env.ACCESS_TOKEN_KEY,
                    {
                        expiresIn : "10m"
                    }
                );
}

module.exports.createRefreshToken = ({userId, nickname, authorityId, conditionId}) => {
    
    return jwt.sign(
                    {
                        userId, 
                        nickname,
                        authorityId,
                        conditionId
                    },
                    process.env.REFRESH_TOKEN_KEY,
                    {
                        expiresIn : "1d"
                    }
                );
}

module.exports.verifyAccessToken = (accessToken) => {
    try {
        return jwt.verify(accessToken, process.env.ACCESS_TOKEN_KEY);
    } catch (err) {
        return false;
    }
}

module.exports.verifyRefreshToken = (refreshToken) => {
    try {
        return jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY);
    } catch (err) {
        return false;
    }
}

