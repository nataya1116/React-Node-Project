import { UserAPI } from "../api";


export const overlapUserNickname = async(value)=> {
    const data = await UserAPI.overlapUserNickname(value);
    console.log(data);
    if(data?.ret === "POSSIBLE"){
        alert("사용가능한 닉네임입니다.");
        return true;
    }else{
        alert("이미 사용중인 닉네임입니다.");
        return false;
    }     
}

export const overlapUserEmail = async(value)=> {
    const data = await UserAPI.overlapUserEmail(value);
    console.log(data);
    if(data?.ret === "POSSIBLE"){
        alert("사용가능한 이메일입니다.");
        return true;
    }else{
        alert("이미 사용중인 이메일입니다.");
        return false;
    }
}


export const overlapUserId = async(value)=> {
    const data = await UserAPI.overlapUserId(value);
    console.log(data);
    if(data?.ret === "POSSIBLE"){
        alert("사용가능한 아이디입니다.");
        return true;
    }else{
        alert("이미 사용중인 아이디입니다.");
        return false;
    }
}