const { express } = require("../modules");

const router = express.Router();

const UserController = require("../controllers/user_controller");

router.post("/join", UserController.joinUser);

router.get("/overlap_id/:userId", UserController.overlapUserId);


module.exports = router;