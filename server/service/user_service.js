const { User, sequelize } = require("../models");
const Op = require("sequelize").Op;

module.exports.joinUser = async ({userId, userPw, userNickname, userEmail}) => {
    try {
        return await User.create({userId, userPw, userNickname, userEmail});
    } catch (err) {
        console.error(err);
        return false;
    }
}

module.exports.loginUser = async (userId, userPw) => {
    try {
        return await User.findOne({
            attributes : ["userId", "userNickname", "authorityId", "conditionId"],
            where : { userId, userPw }
        })
    } catch (err) {
        console.error(err);
        return false;
    }
}

module.exports.updateUserRefreshToken = async (userId, userRefreshToken) => {
    try {
        return await User.update(
            {
                userRefreshToken, 
                userLastLogin : new Date()}, 
            {
                where : { userId }
            }
        )
    } catch (err) {
        console.error(err);
        return false;
    }
}

module.exports.overlapUserId = async (userId) => {
    try{
        const user = await User.findOne({
            attributes : ["user_id"],
            where : { userId }
        })
        if(user) {
            return false;
        }else{
            return true;
        }
    }catch (err){
        console.error(err);
        return false;
    }
}

module.exports.overlapUserNickname = async (userNickname) => {
    try{
        const user = await User.findOne({
            attributes : ["user_nickname"],
            where : { userNickname }
        })
        console.log(user);
        if(user) {
            return false;
        }else{
            return true;
        }
    }catch (err){
        console.error(err);
        return false;
    }
}


module.exports.overlapUserEmail = async (userEmail) => {
    try{
        const user = await User.findOne({
            attributes : ["user_email"],
            where : { userEmail }
        })
        if(user) {
            return false;
        }else{
            return true;
        }
    }catch (err){
        console.error(err);
        return false;
    }
}
