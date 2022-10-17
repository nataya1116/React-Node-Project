const { express } = require("../modules");

const router = express.Router();

const UserController = require("../controllers/user_controller");

router.post("/join", UserController.join);


module.exports = router;