const { User, PointHistory, PointTotal, PointType, sequelize } = require("../models");
const Op = require("sequelize").Op;
const { POINT, POINT_TYPE, CONDITION } = require("../config/state");

module.exports.join = async ({id, pw, nickname, email}) => {
    try {
        // console.log(id, pw, nickname, email);
        return await sequelize.transaction(async (t) => {
            const result = await User.create(
              { id, pw, nickname, email },
              {
                transaction: t,
              }
            );
      
            const user = result.dataValues;
      
            await PointHistory.create(
              {
                userNo: user.no,
                typeNo: POINT_TYPE.JOIN,
                point: POINT.JOIN
              },
              {
                transaction: t,
              }
            );

            await PointTotal.create(
              {
                userNo: user.no,
                point: POINT.JOIN,
              },
              {
                transaction: t,
              }
            );

            return user;
      
          });
      

    } catch (err) {
        console.error(err);
        return false;
    }
}

module.exports.login = async (id) => {
    try {
        return await User.findOne({
            attributes : ["id", "pw", "nickname", "authorityNo", "stateNo"],
            where : { id}
        })
    } catch (err) {
        console.error(err);
        return false;
    }
}



module.exports.getPoint = async (id) => {
    try {
        return await User.findOne({
            attributes : ["point"],
            where : { id }
        })
    } catch (err){
        console.error(err);
        return false; 
    }
}


module.exports.updateRefreshToken = async (id, refreshToken) => {
    try {
        return await User.update(
            {
                refreshToken, 
                lastLogin : new Date()}, 
            {
                where : { id }
            }
        )
    } catch (err) {
        console.error(err);
        return false;
    }
}

module.exports.overlapId = async (id) => {
    try{
        const user = await User.findOne({
            attributes : ["id"],
            where : { id }
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

module.exports.overlapNickname = async (nickname) => {
    try{
        const user = await User.findOne({
            attributes : ["nickname"],
            where : { nickname }
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


module.exports.overlapEmail = async (email) => {
    try{
        const user = await User.findOne({
            attributes : ["email"],
            where : { email }
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
