import { baseAPI } from "./core";

export const overlapNickname = async (nickname) => {
    return await baseAPI.get(`/user/overlap_nickname/${nickname}`);
}

export const overlapId = async (id) => {
    return await baseAPI.get(`/user/overlap_id/${id}`);
};

export const overlapEmail = async (email) => {
    return await baseAPI.get(`/user/overlap_email/${email}`);
}

export const join = async ({id, nickname, email, pw}) => {
    return await baseAPI.post("/user/join", { id, nickname, email, pw});
};

export const login = async (id, pw) => {
    return await baseAPI.post("/user/login", { id, pw });
}

export const getPoint = async (id) => {
    return await baseAPI.post("user/point", {id});
}