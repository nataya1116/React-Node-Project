import API from "./core";

export const overlapNickname = async (nickname) => {
    return await API.get(`/user/overlap_nickname/${nickname}`);
}

export const overlapId = async (id) => {
    return await API.get(`/user/overlap_id/${id}`);
};

export const overlapEmail = async (email) => {
    return await API.get(`/user/overlap_email/${email}`);
}

export const join = async ({id, nickname, email, pw}) => {
    return await API.post("/user/join", { id, nickname, email, pw});
};

export const login = async (id, pw) => {
    return await API.post("/user/login", { id, pw });
}