import { UserAPI, SUCCESS, FAIL } from "../api";
import { LOG_IN, LOG_OUT, POINT } from './common';

function loginAction(id, pw, nav){
    return async(dispatch, getState) => {

            const result = await UserAPI.login(id, pw);

            if(result?.ret === SUCCESS){
                
                const { nickname, authorityNo, stateNo, accessToken, refreshToken } = result?.data;

                dispatch({type : LOG_IN, payload:{ id, nickname, authorityNo, stateNo, accessToken, refreshToken }});

                alert("로그인에 성공하였습니다.");

                nav("/");

            }else if(result?.ret === FAIL){
                alert("아이디 또는 비밀번호가 맞지 않습니다.");
            }else{
                alert("통신의 문제가 있습니다. 다시 시도해주세요.");
            }

        }
    }

function logoutAction() {
    return (dispatch, getState) => {
        if(getState().user.isLogin){
            dispatch({type: LOG_OUT})
        }
    }
}


export { loginAction, logoutAction };

let init = {
    id : null,
    nickname : null,
    authorityNo : null, 
    stateNo : null,
    point : null,
    accessToken : null, 
    refreshToken : null,
    isLogin : false,
}

function user(state = init, action) {
    const {type, payload} = action;
    switch (type) {
        case LOG_IN:
            console.log("로그인");
            return { ...state, 
                        id : payload.id, 
                        nickname : payload.nickname,
                        authorityNo : payload.authorityNo, 
                        stateNo : payload.stateNo,
                        accessToken : payload.accessToken, 
                        refreshToken : payload.refreshToken,
                        isLogin : true
                    };
        case LOG_OUT:
            console.log("로그아웃");
            return { ...state, 
                        id : null,
                        nickname : null,
                        authorityNo : null, 
                        stateNo : null,
                        point : null,
                        accessToken : null, 
                        refreshToken : null,
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

export default user;