const Sequelize = require("sequelize");
const moment = require("moment");

class GameSkinWish extends Sequelize.Model {
    static init(sequelize){
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
            },
            {
                sequelize,
                underscored : true,
                modelName : "GameSkinWish",
                tableName : "game_skin_wish",
                timestamps : true,
                paranoid : true,
                charset: "utf8",
                collate: "utf8_general_ci",
            }
        )
    }

    static associate(db) {
        // N : 1
        db.GameSkinWish.belongsTo(db.User, { foreignKey: "userNo", targetKey: "no" });
        db.GameSkinWish.belongsTo(db.GameSkinProducts, { foreignKey: "productNo", targetKey: "no" });
    }
}

module.exports = GameSkinWish;