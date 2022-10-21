import { LOG_IN, LOG_OUT, POINT } from '../common';

let init = {
    id : null,
    nickname : null,
    authorityNo : null, 
    conditionNo : null,
    point : null,
    isLogin : false,
}

function reducer(state = init, action) {
    const {type, payload} = action;
    switch (type) {
        case LOG_IN:
            console.log("로그인");
            return { ...state, 
                        id : payload.id, 
                        nickname : payload.nickname,
                        authorityNo : payload.authorityNo, 
                        conditionNo : payload.conditionNo,
                        isLogin : true
                    };
        case LOG_OUT:
            console.log("로그아웃");
            return { ...state, 
                        id : null,
                        nickname : null,
                        authorityNo : null, 
                        conditionNo : null,
                        point : null,
                        isLogin : false
                    };
        case POINT:
            console.log("포인트");
            return { ...state, 
                        point : payload.point
                    };
        default:
            return state;
    }
}

export default reducer;