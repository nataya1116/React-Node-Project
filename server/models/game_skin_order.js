const Sequelize = require("sequelize");
const moment = require("moment");

class GameSkinOrder extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        no: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        productNo: {
          type : Sequelize.INTEGER,
          allowNull : false
        },
        stateNo: {
          type : Sequelize.INTEGER,
          allowNull : false
          // 기본값 넣어줄 것(구매 코드)
        },
        orderUserNo: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        receiveUserNo: {
          type: Sequelize.INTEGER
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
          get() {
            return moment(this.getDataValue("createdAt")).format(
              "YYYY/MM/DD HH:mm:ss"
            );
          },
        },
      },
      {
        sequelize,
        underscored: true,
        modelName: "GameSkinOrder",
        tableName: "game_skin_orders",
        timestamps: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    // N : 1
    db.GameSkinOrder.belongsTo(db.User, { foreignKey: "orderUserNo", targetKey: "no" });
    db.GameSkinOrder.belongsTo(db.User, { foreignKey: "receiveUserNo", targetKey: "no" });
    
    db.GameSkinOrder.belongsTo(db.GameSkinProduct, { foreignKey: "productNo", targetKey: "no" });
    db.GameSkinOrder.belongsTo(db.StateOrder, { foreignKey: "stateNo", targetKey: "no" });
  }
}

module.exports = GameSkinOrder;
