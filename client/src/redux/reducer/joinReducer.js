let init = { 
    userId : null, 
    userPw : null, 
    userNickname : null, 
    userEmail : null 
};

const JOIN = "JOIN";

function reducer(state = init, action) {
    const {type, payload} = action;
    switch (type) {
        case JOIN:
            console.log("회원가입");
            return { ...state, userId : payload.userId, userPw : payload.userPw, userNickname : payload.userNickname, userEmail : payload.userEmail};
        // case LOG_OUT:
        //     console.log("로그아웃");
        //     return { ...state, id : null, pw : null, isLogin : false};
        default:
            return state;
    }
}

export default reducer;