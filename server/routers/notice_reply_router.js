const { express } = require("../modules/common");

const router = express.Router();

const NoticeReplyController = require("../controllers/notice_reply_controller");

const SessionMiddleware = require("../middlewares/session_middleware");

router.post("/create", SessionMiddleware.validity, NoticeReplyController.create);

router.post("/create_nested", SessionMiddleware.validity,NoticeReplyController.createNested);

router.post("/update", SessionMiddleware.validity, NoticeReplyController.update);

router.get("/delete/:id/:offset", SessionMiddleware.validity, NoticeReplyController.delete)



module.exports = router;
