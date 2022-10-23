const { express, dot, cors } = require("./modules");

dot.config();

const { sequelize } = require("./models");

const app = express();

const PORT = 8000;

//  요청 허용 라우터보다 아래에 설정해주면 cors가 작동하지 않는다.
app.use(cors({origin:"http://localhost:3000", credentials: true}));

app.use(express.json());

const { 
  UserRouter, 
  NoticeBoardRouter,
  NoticeReplyRouter
} = require("./routers");

app.use("/user", UserRouter);
app.use("/notice_board", NoticeBoardRouter);
app.use("/notice_reply", NoticeReplyRouter);

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
