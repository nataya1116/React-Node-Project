const { express, path, dot, session, cors } = require("./modules");

dot.config();

const { sequelize } = require("./models");

const app = express();

const PORT = 8000;

const { UserRouter, } = require("./routers");

app.use("/user", UserRouter);

app.use(express.json());

//  요청 허용
app.use(cors({origin:"http://localhost:3000", credentials: true}));

app.get("/12", (req, res)=> {
  res.send("안녕");
});

app.listen(PORT, () => {
    console.log(PORT, "번 포트 대기 중");
});

sequelize
  .sync({ focus: false })
  .then(() => {
    console.log("DB 연결 성공...");
  })
  .catch((err) => {
    console.error(err);
  });
