import axios from "axios";

function login(id, pw){
    return async(dispatch, getState) => {
        const url = "http://localhost:8000/login";
        const user = await axios({
            url,
            method:"post",
            data: {
                id,
                pw
            }
        });
        console.log(user);
        alert(user.data);
        if(user.data === "로그인 성공") {

            dispatch({type : "LOG_IN", payload:{id, pw}})
        }else{
            alert("로그인 실패")
        }
    }
}

function logout() {
    return (dispatch, getState) => {
        if(getState().loginReducer.isLogin){
            dispatch({type: "LOG_OUT"})
        }
    }
}


export const loginAction = { login, logout };