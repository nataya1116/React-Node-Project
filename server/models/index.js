const Sequelize = require("sequelize");

const { config } = require("../config");

const User = require("./user");
const Authority = require("./authority");
const ConditionUser = require("./condition_user");

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
db.ConditionUser = ConditionUser;

User.init(sequelize);
Authority.init(sequelize);
ConditionUser.init(sequelize);

User.associate(db);
Authority.associate(db);
ConditionUser.associate(db);

module.exports = db;