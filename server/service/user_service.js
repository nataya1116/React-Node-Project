const { User, sequelize } = require("../models");
const Op = require("sequelize").Op;

module.exports.join = async ({userId, userPw, userNickname, userEmail}) => {
    try {
        return await User.create({userId, userPw, userNickname, userEmail});
    } catch (err) {
        console.error(err);
        return false;
    }
}

module.exports.login = async (userId) => {
    try {
        return await User.findOne({
            attributes : ["id", "pw", "nickname", "authorityNo", "conditionNo"],
            where : { userId}
        })
    } catch (err) {
        console.error(err);
        return false;
    }
}



module.exports.getPoint = async (userId) => {
    try {
        return await User.findOne({
            attributes : ["point"],
            where : { userId }
        })
    } catch (err){
        console.error(err);
        return false; 
    }
}


module.exports.updateRefreshToken = async (userId, userRefreshToken) => {
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

module.exports.overlapId = async (userId) => {
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

module.exports.overlapNickname = async (userNickname) => {
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


module.exports.overlapEmail = async (userEmail) => {
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
