import { UserAPI, SUCCESSE, FAIL } from "../../api";
import { SessionService } from "../../service";
import { LOG_IN, LOG_OUT, POINT } from '../common';

function login(id, pw, nav){
    return async(dispatch, getState) => {
            console.log("userAction.login");
            const data = await UserAPI.login(id, pw);

            if(data?.ret === SUCCESSE){
                
                const { nickname, authorityId, conditionId, accessToken, refreshToken } = data?.info;

                SessionService.setToken({accessToken, refreshToken});

                dispatch({type : LOG_IN, payload:{ id, nickname, authorityId, conditionId }});

                alert("로그인에 성공하였습니다.");

                nav("/");

            }else if(data?.ret === FAIL){
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


export const UserAction = { login, logout };