const Sequelize = require("sequelize");

class StateUser extends Sequelize.Model {
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
                modelName : "StateUser",
                tableName : "state_user",
                charset: "utf8",
                collate: "utf8_general_ci"
            }
        )
    }

    static associate(db) {
        // 1 : N
        db.StateUser.hasMany(db.User, { foreignKey: "stateNo", sourceKey: "no" });
    }
}

module.exports = StateUser;