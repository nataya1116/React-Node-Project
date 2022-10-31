const Sequelize = require("sequelize");
const moment = require("moment");

class InactiveUser extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            no: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              allowNull: false,
              autoIncrement: true
            },
            userNo : {
                type : Sequelize.INTEGER,
                allowNull : false
            },
            stopFewDays : {
                type : Sequelize.DATE,
                allowNull: false,
                get() {
                    return moment(this.getDataValue("stopFewDays")).format("YYYY-MM-DD HH:mm:ss");
                }
            },
            createdAt: {
              type: Sequelize.DATE,
              allowNull: false,
              get() {
                return moment(this.getDataValue("createdAt")).format("YYYY-MM-DD HH:mm:ss");
              },
            },
            updatedAt: {
              type: Sequelize.DATE,
              allowNull: false,
              get() {
                return moment(this.getDataValue("updatedAt")).format("YYYY-MM-DD HH:mm:ss");
              },
            }
        },
        {
            sequelize,
            underscored : true,
            modelName : "InactiveUser",
            tableName : "inactive_user",
            timestamps : true,
            paranoid : false,
            charset : "utf8",
            collate : "utf8_general_ci"
        });
    }

    static associate(db) {
        // 1 : 1
        db.InactiveUser.belongsTo(db.User, { foreignKey: "userNo", targetKey: "no" });
    }
}

module.exports = InactiveUser;