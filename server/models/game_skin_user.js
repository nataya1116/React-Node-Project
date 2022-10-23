const Sequelize = require("sequelize");
const moment = require("moment");

class GameSkinUser extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                no: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
                },
                userNo : {
                    type : Sequelize.INTEGER,
                    allowNull : false,
                },
                productNo : {
                    type : Sequelize.INTEGER,
                    allowNull : false,
                },
                isUse : {
                    type : Sequelize.BOOLEAN,
                    allowNull : false,
                    defaultValue : false,
                }
            },
            {
                sequelize,
                underscored : true,
                modelName : "GameSkinUser",
                tableName : "game_skin_user",
                timestamps : false, 
                paranoid : true,
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        )
    }

    static associate(db) {
        // N : 1
        db.GameSkinUser.belongsTo(db.User, { foreignKey: "userNo", targetKey: "no" });
        db.GameSkinUser.belongsTo(db.GameSkinProduct, { foreignKey: "productNo", targetKey: "no" });
    }
}

module.exports = GameSkinUser;