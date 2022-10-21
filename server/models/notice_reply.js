const Sequelize = require("sequelize");
const moment = require("moment");

class NoticeReply extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                no: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true
                },
                content : {
                    type : Sequelize.TEXT,
                    allowNull : false
                },
                userNo : {
                    type : Sequelize.INTEGER,
                    allowNull : false
                },
                boardNo : {
                    type : Sequelize.INTEGER,
                    allowNull : false
                },
                replyNo : {
                    type : Sequelize.INTEGER,
                    allowNull : true
                },
                createdAt : {
                    type: Sequelize.DATE,
                    allowNull : false,             
                  get() {
                        return moment(this.getDataValue('createdAt')).format('YYYY/MM/DD HH:mm:ss');
                    }
                },
                updatedAt : {
                    type: Sequelize.DATE,
                    allowNull : false,
                    get() {
                        return moment(this.getDataValue('updatedAt')).format('YYYY/MM/DD HH:mm:ss');
                    }
                },
                deletedAt : {
                    type: Sequelize.DATE,
                    get() {
                        return moment(this.getDataValue('deletedAt')).format('YYYY/MM/DD HH:mm:ss');
                    }
                }
            },
            {
                sequelize,
                // 스네이크(ex user_date) 표기법으로 변경
                underscored : true,
                // 모델 이름 설정
                modelName : "NoticeReply",
                // 테이블 이름 설정
                tableName : "notice_reply",
                // 생성 및 수정 컬럼 생성
                timestamps : true, 
                // 삭제 컬럼 생성
                paranoid : true,
                charset: "utf8",
                collate: "utf8_general_ci"
            }
        )
    }

    static associate(db) {
        // N : 1
        db.NoticeReply.belongsTo(db.User, { foreignKey: "userNo", targetKey: "no" });
        db.NoticeReply.belongsTo(db.NoticeBoard, { foreignKey: "boardNo", targetKey: "no" });
        db.NoticeReply.belongsTo(db.NoticeReply, { foreignKey: "replyNo", targetKey: "no"});

        // 1 : N
        db.NoticeReply.hasMany(db.NoticeReply, { foreignKey: "replyNo", sourceKey: "no"});
      }
}

module.exports = NoticeReply;