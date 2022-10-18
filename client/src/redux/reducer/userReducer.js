let init = {
    login : {
        id : null,
        pw : null,
        isLogin : false
    }
    
}

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

function reducer(state = init, action) {
    const {type, payload} = action;
    switch (type) {
        case LOG_IN:
            console.log("로그인");
            return { ...state, id : payload.id, pw : payload.pw, isLogin : true};
        case LOG_OUT:
            console.log("로그아웃");
            return { ...state, id : null, pw : null, isLogin : false};
        default:
            return state;
    }
}

export default reducer;