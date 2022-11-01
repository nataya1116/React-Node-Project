const { InactiveUser, User, sequelize } = require("../model");
const { CONDITION } = require("../config/config");

module.exports.findStopFewDays = async (id) => {
    const user = await User.findOne({
                                        attributes : ["no"],
                                        where: { id }
                                    });
    if (!user) return null;
    
    const result = await InactiveUser.findOne({
                                                attributes : ["stopFewDays"],
                                                where : { userNo : user.no }
                                            })

    if(!result) return null;

    return result.dataValues.stopFewDays
}

module.exports.create = async (id, stopFewDays) => {
    try {
        const user = await User.findOne({
            attributes : ["no"],
            where: { id }
        });
        if (!user) return false;
                               
  
        await InactiveUser.create({
                                    userNo : user.no,
                                    stopFewDays,
                                });

        await User.update({
                            conditionId : CONDITION.INACTIVITY
                        },
                        {
                            where : { id }
                        });  
                        
        return await User.count({
            where : { id, conditionId : CONDITION.INACTIVITY }
        })
     
    } catch (err) {
        console.log(err);
        return false;
    }

    

}