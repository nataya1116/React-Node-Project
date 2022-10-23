const Sequelize = require("sequelize");
const moment = require("moment");

class PointTotal extends Sequelize.Model {
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
                    unique : true
                },
                point : {
                    type : Sequelize.INTEGER,
                    allowNull : false
                }
            },
            {
                sequelize,
                underscored : true,
                // 모델 이름 설정
                modelName : "PointTotal",
                // 테이블 이름 설정
                tableName : "point_total",
                timestamps : false, 
                paranoid : true,
                charset: "utf8",
                collate: "utf8_general_ci"
            }
        )
    }

    static associate(db){
        // 1 : 1
        db.PointTotal.belongsTo(db.User, {foreignKey: "userNo", targetKey: "no"});
    }
}

module.exports = PointTotal;