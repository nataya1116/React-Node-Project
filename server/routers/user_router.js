const { express, cors } = require("../modules");

const router = express.Router();

// router.use(cors({origin:"http://localhost:3000", credentials: true}));

const UserController = require("../controllers/user_controller");

router.post("/join", UserController.join);

router.post("/login", UserController.login);

router.post("/logout", UserController.logout);

router.get("/overlap_id/:id", UserController.overlapId);

router.get("/overlap_nickname/:nickname", UserController.overlapNickname);

router.get("/overlap_email/:email", UserController.overlapEmail);

router.post("/point", UserController.getPoint);

module.exports = router;