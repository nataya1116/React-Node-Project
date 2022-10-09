import axios from "axios";

function login(id, pw, setWarp){
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
            setWarp();
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

function signUp(id, pw, setWarp){
    return async(dispatch, getState) => {
        const url = "http://localhost:8000/signUp";
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
        if(user.data === "가입 완료"){
            setWarp();
        }
    }
}

export const loginAction = { login, logout, signUp };