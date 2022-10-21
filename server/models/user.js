const Sequelize = require("sequelize");
const moment = require("moment");

const WAITING = 1;
const USER = 2;

class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        no: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        id: {
          // 데이터 타입 설정
          type: Sequelize.STRING(20),
          // 널 값 허용 여부
          allowNull: false,
          // 고유값 여부
          unique: true,
        },
        pw: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        nickname: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        email: {
          type: Sequelize.STRING(50),
          allowNull: false
        },
        socketId: {
          type: Sequelize.STRING,
        },
        refreshToken: {
          type: Sequelize.STRING
        },
        authorityNo: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: USER
        },
        stateNo: {
          type: Sequelize.INTEGER,
          allowNull: false,
          defaultValue: WAITING
        },
        lastLogin : {
          type: Sequelize.DATE,
          get() {
            return moment(this.getDataValue("lastLogin")).format("YYYY/MM/DD HH:mm:ss");
          }
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          get() {
            return moment(this.getDataValue("createdAt")).format("YYYY/MM/DD HH:mm:ss");
          }
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
          get() {
            return moment(this.getDataValue("updatedAt")).format("YYYY/MM/DD HH:mm:ss");
          },
        },
        deletedAt: {
          type: Sequelize.DATE,
          get() {
            return moment(this.getDataValue("deletedAt")).format("YYYY/MM/DD HH:mm:ss");
          },
        },
      },
      {
        sequelize,
        // 스네이크(ex user_date) 표기법으로 변경
        underscored: true,
        // 모델 이름 설정
        modelName: "User",
        // 테이블 이름 설정
        tableName: "users",
        // 생성 및 수정 컬럼 생성(update_at을 로그인 시간으로 해도 될 듯)
        timestamps: true,
        // 삭제 컬럼 생성
        paranoid: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    // N : 1
    db.User.belongsTo(db.Authority, { foreignKey: "authorityNo", targetKey: "no" });
    db.User.belongsTo(db.StateUser, { foreignKey: "stateNo", targetKey: "no" });
  }
}

module.exports = User;
