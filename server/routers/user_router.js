const { express } = require("../modules");

const router = express.Router();

const UserController = require("../controllers/user_controller");

router.post("/join", UserController.joinUser);

router.get("/overlap_id/:userId", UserController.overlapUserId);

router.get("/overlap_nickname/:userNickname", UserController.overlapUserNickname);

router.get("/overlap_email/:userEmail", UserController.overlapUserEmail);

module.exports = router;