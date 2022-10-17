const UserService = require("../service/user_service");
const { SUCCESSE, FAIL } = require("../config/respons");

module.exports.join = async (req, res) => {
    const { userId, userPw, userNickname, userEmail } = req.body;

    const result = await UserService.join({userId, userPw, userNickname, userEmail});

    console.log(result);

    if(result){
        res.send({SUCCESSE});
    }else{
        res.send({FAIL});
    }
}