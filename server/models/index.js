const Sequelize = require("sequelize");

const { config } = require("../config");

const User = require("./user");
const Authority = require("./authority");
const StateUser = require("./state_user");
const InactiveUser = require("./inactive_user");

const PointType  = require("./point_type");
const PointHistory = require("./point_history");
const PointTotal = require("./point_total");

const NoticeBoard = require("./notice_board");
const NoticeReply = require("./notice_reply");
const FreeBoard = require("./free_board");
const FreeReply = require("./free_reply");

const GameSkinProduct = require("./game_skin_products");
const GameSkinUser = require("./game_skin_user");
const GameSkinWish = require("./game_skin_wish");
const GameSkinOrder = require("./game_skin_order");
const StateOrder = require("./state_order");

const sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
);

const db = {};
db.sequelize = sequelize;

db.User = User;
db.Authority = Authority;
db.StateUser = StateUser;
db.InactiveUser = InactiveUser;

db.PointType = PointType;
db.PointHistory = PointHistory;
db.PointTotal = PointTotal;

db.NoticeBoard = NoticeBoard;
db.NoticeReply = NoticeReply;
db.FreeBoard = FreeBoard;
db.FreeReply = FreeReply;

db.GameSkinProduct = GameSkinProduct;
db.GameSkinUser = GameSkinUser;
db.GameSkinWish = GameSkinWish;
db.GameSkinOrder = GameSkinOrder;
db.StateOrder = StateOrder;

User.init(sequelize);
Authority.init(sequelize);
StateUser.init(sequelize);
InactiveUser.init(sequelize);

PointType.init(sequelize);
PointHistory.init(sequelize);
PointTotal.init(sequelize);

NoticeBoard.init(sequelize);
NoticeReply.init(sequelize);
FreeBoard.init(sequelize);
FreeReply.init(sequelize);

GameSkinProduct.init(sequelize);
GameSkinUser.init(sequelize);
GameSkinWish.init(sequelize);
GameSkinOrder.init(sequelize);
StateOrder.init(sequelize);


User.associate(db);
Authority.associate(db);
StateUser.associate(db);
InactiveUser.associate(db);

PointType.associate(db);
PointHistory.associate(db);
PointTotal.associate(db);

NoticeBoard.associate(db);
NoticeReply.associate(db);
FreeBoard.associate(db);
FreeReply.associate(db);

GameSkinProduct.associate(db);
GameSkinUser.associate(db);
GameSkinWish.associate(db);
GameSkinOrder.associate(db);
StateOrder.associate(db);

module.exports = db;