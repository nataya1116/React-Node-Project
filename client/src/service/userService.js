import { UserAPI, SUCCESSE, FAIL, OVERLAP, POSSIBLE } from "../api";
import { SessionService } from ".";


export const overlapNickname = async(nickname)=> {
    const data = await UserAPI.overlapNickname(nickname);

    if(data?.ret === POSSIBLE){
        alert("사용가능한 닉네임입니다.");
        return true;
    } else if(data?.ret === OVERLAP){
        alert("이미 사용중인 닉네임입니다.");
        return false;
    } else {
        alert("다시 시도해 주세요.");
        return false;
    }    
}

export const overlapEmail = async(email)=> {
    const data = await UserAPI.overlapEmail(email);

    if(data?.ret === POSSIBLE){
        alert("사용가능한 이메일입니다.");
        return true;
    } else if(data?.ret === OVERLAP){
        alert("이미 사용중인 이메일입니다.");
        return false;
    } else {
        alert("다시 시도해 주세요.");
        return false;
    }
}


export const overlapId = async(id)=> {
    const data = await UserAPI.overlapId(id);

    if(data?.ret === POSSIBLE){
        alert("사용가능한 아이디입니다.");
        return true;
    } else if(data?.ret === OVERLAP){
        alert("이미 사용중인 아이디입니다.");
        return false;
    } else {
        alert("다시 시도해 주세요.");
        return false;
    }
}

export const join = async({id, nickname, email, pw })=>{
    const data = await UserAPI.join({id, nickname, email, pw });

    if(data?.ret === SUCCESSE){
        alert("회원가입이 성공하였습니다. 로그인해주세요.");
        return true;
    }else if(data?.ret === FAIL){
        alert("회원가입이 실패하였습니다. 다시 시도해주세요.");
        return false;
    }else{
        alert("통신의 문제가 있습니다. 다시 시도해주세요.");
        return false;
    }
}

export const login = async(id, pw)=>{
    const data = await UserAPI.login(id, pw);

    if(data?.ret === SUCCESSE){
        alert("로그인에 성공하였습니다.");

        // accessToken, refreshToken
        // sessionStorage.setItem("accessToken", data?.token.accessToken);
        // sessionStorage.setItem("refreshToken", data?.token.refreshToken);

        // console.log("accessToken", sessionStorage.getItem("accessToken"));
        // console.log("refreshToken", sessionStorage.getItem("refreshToken"));

        // SessionService.setInfo()

        const { id, nickname, authorityId, conditionId, accessToken, refreshToken } = data?.info;

        SessionService.setToken({accessToken, refreshToken});




        return true;
    }else if(data?.ret === FAIL){
        alert("아이디 또는 비밀번호가 맞지 않습니다.");
        return false;
    }else{
        alert("통신의 문제가 있습니다. 다시 시도해주세요.");
        return false;
    }
}