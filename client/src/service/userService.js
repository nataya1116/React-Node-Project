import { UserAPI, SUCCESS, FAIL, OVERLAP, POSSIBLE } from "../api";
import { SessionService } from ".";


export const overlapNickname = async(nickname)=> {
    const result = await UserAPI.overlapNickname(nickname);

    if(result?.ret === POSSIBLE){
        alert("사용가능한 닉네임입니다.");
        return true;
    } else if(result?.ret === OVERLAP){
        alert("이미 사용중인 닉네임입니다.");
        return false;
    } else {
        alert("다시 시도해 주세요.");
        return false;
    }    
}

export const overlapEmail = async(email)=> {
    const result = await UserAPI.overlapEmail(email);

    if(result?.ret === POSSIBLE){
        alert("사용가능한 이메일입니다.");
        return true;
    } else if(result?.ret === OVERLAP){
        alert("이미 사용중인 이메일입니다.");
        return false;
    } else {
        alert("다시 시도해 주세요.");
        return false;
    }
}


export const overlapId = async(id)=> {
    const result = await UserAPI.overlapId(id);

    if(result?.ret === POSSIBLE){
        alert("사용가능한 아이디입니다.");
        return true;
    } else if(result?.ret === OVERLAP){
        alert("이미 사용중인 아이디입니다.");
        return false;
    } else {
        alert("다시 시도해 주세요.");
        return false;
    }
}

export const join = async({id, nickname, email, pw })=>{
    const result = await UserAPI.join({id, nickname, email, pw });

    if(result?.ret === SUCCESS){
        alert("회원가입이 성공하였습니다. 로그인해주세요.");
        return true;
    }else if(result?.ret === FAIL){
        alert("회원가입이 실패하였습니다. 다시 시도해주세요.");
        return false;
    }else{
        alert("통신의 문제가 있습니다. 다시 시도해주세요.");
        return false;
    }
}

