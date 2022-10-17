const { User, sequelize } = require("../models");
const Op = require("sequelize").Op;

module.exports.login = async (userId, userPw) => {
    try {
        return await User.findOne({
            include : ["userId", "userNickname", "userAuthorityId", "userConditionId", "userRefreshToken"],
            where : { userId, userPw }
        })
    } catch (err) {
        console.error(err);
    }
}

// module.exports.overlapUserId = 

module.exports.join = async ({userId, userPw, userNickname, userEmail}) => {
    try {
        return await User.create({userId, userPw, userNickname, userEmail});
    } catch (err) {
        console.error(err);
    }
}