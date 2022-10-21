const Sequelize = require("sequelize");

const { config } = require("../config");

const User = require("./user");
const Authority = require("./authority");
const StateUser = require("./state_user");

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

User.init(sequelize);
Authority.init(sequelize);
StateUser.init(sequelize);

User.associate(db);
Authority.associate(db);
StateUser.associate(db);

module.exports = db;