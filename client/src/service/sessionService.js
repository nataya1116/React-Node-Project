const ACCESS_TOKEN_KEY = "ACCESS_TOKEN_KEY ";
const REFRESH_TOKEN_KEY = "REFRESH_TOKEN_KEY";

function setAccessToken(accessToken){
    sessionStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
}

function setRefreshToken(refreshToken){
    sessionStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
}

function getAccessToken(){
    return sessionStorage.getItem(ACCESS_TOKEN_KEY);
}

function getRefreshToken(){
    return sessionStorage.getItem(REFRESH_TOKEN_KEY);
}

function removeTokenAll() {
    sessionStorage.clear();
}

export { setAccessToken, setRefreshToken, getAccessToken, getRefreshToken, removeTokenAll };