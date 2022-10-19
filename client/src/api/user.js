import API from "./core";

export const overlapUserNickname = async (userNickname) => {
    return await API.get(`/user/overlap_nickname/${userNickname}`);
}

export const overlapUserEmail = async (userEmail) => {
    return await API.get(`/user/overlap_email/${userEmail}`);
}

export const joinUser = async (userInfo) => {
    return await API.put("/user/insert", userInfo);
};

export const overlapUserId = async (userId) => {
    return await API.get(`/user/overlap_id/${userId}`);
};