const Sequelize = require("sequelize");
const moment = require("moment");

class GameSkinProduct extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        no: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING(50),
          allowNull: false,
        },
        point: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        imgUrl: {
          type: Sequelize.STRING,
          allowNull: false,
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
        modelName: "GameSkinProduct",
        tableName: "game_skin_products",
        timestamps: true,
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }

  static associate(db) {
    db.GameSkinProduct.hasMany(db.GameSkinUser, { foreignKey: "productNo", sourceKey: "no" });
    db.GameSkinProduct.hasMany(db.GameSkinWish, { foreignKey: "productNo", sourceKey: "no" });
  }
}

module.exports = GameSkinProduct;
