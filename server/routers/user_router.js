const { express, cors } = require("../modules");

const router = express.Router();

// router.use(cors({origin:"http://localhost:3000", credentials: true}));

const UserController = require("../controllers/user_controller");

router.post("/join", UserController.joinUser);

router.post("/login", UserController.loginUser);

router.get("/overlap_id/:userId", UserController.overlapUserId);

router.get("/overlap_nickname/:userNickname", UserController.overlapUserNickname);

router.get("/overlap_email/:userEmail", UserController.overlapUserEmail);

module.exports = router;