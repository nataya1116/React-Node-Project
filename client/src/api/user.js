import API from "./core";

export const overlapUserNickname = async (userNickname) => {
    return await API.get(`/user/overlap_nickname/${userNickname}`);
}

export const overlapUserId = async (userId) => {
    return await API.get(`/user/overlap_id/${userId}`);
};

export const overlapUserEmail = async (userEmail) => {
    return await API.get(`/user/overlap_email/${userEmail}`);
}

export const joinUser = async ({userId, userNickname, userEmail, userPw}) => {
    return await API.post("/user/join", { userId, userNickname, userEmail, userPw});
};

export const loginUser = async (userId, userPw) => {
    return await API.post("/user/login", { userId, userPw });
}
