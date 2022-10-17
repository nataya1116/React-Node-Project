import axios from "axios";


function join({ userId, userPw, userNickname, userEmail }){
    return async(dispatch, getState) => {
        const url = "http://localhost:8000/join";
        const user = await axios({
            url,
            method:"post",
            data: { userId, userPw, userNickname, userEmail }
        });
        console.log(user);
        alert(user.data);
        if(user.data === "가입 완료"){
            alert("가입 완료")
        }
    }
}

export const joinAction = { join };