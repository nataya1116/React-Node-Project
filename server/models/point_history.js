const Sequelize = require("sequelize");
const moment = require("moment");

class PointHistory extends Sequelize.Model {
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
                    allowNull : false
                },
                typeNo : {
                    type : Sequelize.INTEGER,
                    allowNull : false
                },
                point: {
                    type : Sequelize.INTEGER,
                    allowNull : false
                }
                ,
                createdAt : {
                    type: Sequelize.DATE,
                    allowNull : false,             
                  get() {
                        return moment(this.getDataValue('createdAt')).format('YYYY/MM/DD HH:mm:ss');
                    }
                }

            },
            {
                sequelize,
                underscored : true,
                modelName : "PointHistory",
                tableName : "point_history",
                timestamps : true,
                paranoid : false,
                charset: "utf8",
                collate: "utf8_general_ci"
            }
        )
    }
    static associate(db){
        // N : 1
        db.PointHistory.belongsTo(db.User, { foreignKey: "userNo", targetKey: "no" });
        db.PointHistory.belongsTo(db.PointType, { foreignKey: "typeNo", targetKey: "no" });
    }
}

module.exports = PointHistory;