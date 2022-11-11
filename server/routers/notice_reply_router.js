const { express } = require("../modules");

const router = express.Router();

const NoticeReplyController = require("../controllers/notice_reply_controller");

const SessionMiddleware = require("../middlewares/session_middleware");

router.post("/create", SessionMiddleware.validity, NoticeReplyController.create);

router.post("/update", SessionMiddleware.validity, NoticeReplyController.update);
// router.post("/update", NoticeReplyController.update);

router.post("/delete", SessionMiddleware.validity, NoticeReplyController.delete)
// router.get("/delete/:no", NoticeReplyController.delete)



module.exports = router;
