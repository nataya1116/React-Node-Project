

// const ID = "ID";
// const NICKNAME = "NICKNAME";
// const AUTHORITY_ID = "AUTHORITY_ID";
// const CONDITION_ID = "CONDITION_ID";

// const ACCESS_TOKEN = "ACCESS_TOKEN";
// const REFRESH_TOKEN = "REFRESH_TOKEN";

const INFO = "INFO";

// authorityId
export const setInfo = ({id, nickname, authorityId, conditionId}) => {
    const jsonInfo = JSON.stringify({id, nickname, authorityId, conditionId});
    sessionStorage.setItem(INFO, jsonInfo);
    console.log(sessionStorage.setItem(INFO));
}


// export const setAccessToken = (accessToken) => {
//     sessionStorage.setItem(ACCESS_TOKEN, accessToken);
// }

// export const setRefreshToken = (refreshToken) => {
//     sessionStorage.setItem(REFRESH_TOKEN, refreshToken);
// }

// export const getAccessToken = () => {
//     return sessionStorage.getItem(ACCESS_TOKEN);
// }

// export const getRefreshToken = () => {
//     return sessionStorage.getItem(REFRESH_TOKEN);
// }