const { express } = require("../modules");

const router = express.Router();

const NoticeBoardController = require("../controllers/notice_board_controller");

const SessionMiddleware = require("../middlewares/session_middleware");

router.post("/create", SessionMiddleware.validity, NoticeBoardController.create);
// router.post("/create", NoticeBoardController.create);

router.post("/update", SessionMiddleware.validity, NoticeBoardController.update);
// router.post("/update", NoticeBoardController.update);


// // 순서대로 경로를 지정해주고 순서에 맞는 키로 저장이 된다.
// // 익스프레스 라우터에 get으로 첫번째 파라미터는 경로, 두번째 파라미터는 미들웨어..
// router.get("/list/:offset/:limit/", SessionMiddleware.pass, NoticeBoardController.searchingList);
router.get("/list/:offset/:limit/", NoticeBoardController.searchingList);

// router.get("/list/:offset/:limit/:searchKey/:searchWord", SessionMiddleware.pass, NoticeBoardController.searchingList);
router.get("/list/:offset/:limit/:searchKey/:searchWord", NoticeBoardController.searchingList);

// // router.get("/read/:offset", SessionMiddleware.pass, NoticeBoardController.view);
// router.get("/read/:offset", NoticeBoardController.read);

// // router.get("/read/:offset/:searchKey/:searchWord", SessionMiddleware.pass, NoticeBoardController.view);
// router.get("/read/:offset/:searchKey/:searchWord", NoticeBoardController.read);

// // router.get("/update/:id/:offset", SessionMiddleware.validity, NoticeBoardController.updateView);
// router.get("/update/:id/:offset", NoticeBoardController.updateView);

router.get("/delete/:no", SessionMiddleware.validity, NoticeBoardController.delete);
// router.get("/delete/:id/", NoticeBoardController.delete);


module.exports = router;
