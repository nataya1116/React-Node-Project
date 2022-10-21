const TOKEN = "TOKEN";

export const setToken = ({accessToken, refreshToken}) => {
    const jsonStrToken = JSON.stringify({accessToken, refreshToken});
    sessionStorage.setItem(TOKEN, jsonStrToken);
}

export const getToken = () => {
    const jsonStrToken = sessionStorage.getItem(TOKEN);
    return JSON.parse(jsonStrToken);
}