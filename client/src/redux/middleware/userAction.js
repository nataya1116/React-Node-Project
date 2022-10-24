import { UserAPI, SUCCESS, FAIL } from "../../api";
import { SessionService } from "../../service";
import { LOG_IN, LOG_OUT, POINT } from '../common';

function login(id, pw, nav){
    return async(dispatch, getState) => {

            const result = await UserAPI.login(id, pw);

            if(result?.ret === SUCCESS){
                
                const { nickname, authorityNo, stateNo, accessToken, refreshToken } = result?.data;

                SessionService.setToken({accessToken, refreshToken});

                dispatch({type : LOG_IN, payload:{ id, nickname, authorityNo, stateNo }});

                alert("로그인에 성공하였습니다.");

                nav("/");

            }else if(result?.ret === FAIL){
                alert("아이디 또는 비밀번호가 맞지 않습니다.");
            }else{
                alert("통신의 문제가 있습니다. 다시 시도해주세요.");
            }

        }
    }

function logout() {
    return (dispatch, getState) => {
        if(getState().userReducer.isLogin){
            dispatch({type: LOG_OUT})
        }
    }
}


export const userAction = { login, logout };