require("dotenv").config;

const config = {
  dev: {
    username: "admin",
    password: process.env.DATABASE_PASSWORD_DEV,
    database: "memory_db",
    host: "127.0.0.1",
    dialect: "mysql",
    timezone: "Asia/Seoul",
  },
//   mailer: {
//     user: process.env.EMAIL,
//     pw: process.env.EMAIL_PW,
//   },
};

module.exports = config;