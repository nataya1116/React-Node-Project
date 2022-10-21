const Sequelize = require("sequelize");

class StateOrder extends Sequelize.Model {
    static init(sequelize){
        return super.init(
            {
                no: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
                },
                name : {
                    type : Sequelize.STRING(30),
                    allowNull : false
                }
            },
            {
                sequelize,
                underscored : true,
                modelName : "StateOrder",
                tableName : "state_order",
                charset: "utf8",
                collate: "utf8_general_ci"
            }
        )
    }

    static associate(db) {
        // 1 : N
        db.StateOrder.hasMany(db.GameSkinOrder, { foreignKey: "stateNo", sourceKey: "no" });
    }
}

module.exports = StateOrder;