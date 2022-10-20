import { UserAPI } from "../api";


export const overlapUserNickname = async(value)=> {
    const data = await UserAPI.overlapUserNickname(value);

    if(data?.ret === "POSSIBLE"){
        alert("사용가능한 닉네임입니다.");
        return true;
    } else if(data?.ret === "OVERLAP"){
        alert("이미 사용중인 닉네임입니다.");
        return false;
    } else {
        alert("다시 시도해 주세요.");
        return false;
    }    
}

export const overlapUserEmail = async(value)=> {
    const data = await UserAPI.overlapUserEmail(value);

    if(data?.ret === "POSSIBLE"){
        alert("사용가능한 이메일입니다.");
        return true;
    } else if(data?.ret === "OVERLAP"){
        alert("이미 사용중인 이메일입니다.");
        return false;
    } else {
        alert("다시 시도해 주세요.");
        return false;
    }
}


export const overlapUserId = async(value)=> {
    const data = await UserAPI.overlapUserId(value);

    if(data?.ret === "POSSIBLE"){
        alert("사용가능한 아이디입니다.");
        return true;
    } else if(data?.ret === "OVERLAP"){
        alert("이미 사용중인 아이디입니다.");
        return false;
    } else {
        alert("다시 시도해 주세요.");
        return false;
    }
}

export const joinUser = async(value)=>{
    const data = await UserAPI.joinUser(value);

    if(data?.ret === "SUCCESSE"){
        alert("회원가입이 성공하였습니다. 로그인해주세요.");
        return true;
    }else if(data?.ret === "FAIL"){
        alert("회원가입이 실패하였습니다. 다시 시도해주세요.");
        return false;
    }else{
        alert("통신의 문제가 있습니다. 다시 시도해주세요.");
        return false;
    }
}

export const loginUser = async(userId, userPw)=>{
    const data = await UserAPI.loginUser(userId, userPw);

    if(data?.ret === "SUCCESSE"){
        alert("로그인에 성공하였습니다.");
        return true;
    }else if(data?.ret === "FAIL"){
        alert("아이디 또는 비밀번호가 맞지 않습니다.");
        return false;
    }else{
        alert("통신의 문제가 있습니다. 다시 시도해주세요.");
        return false;
    }
}