import { baseAPI, authAPI } from "./core";


export const searchingList = async ({url, offset, perPage, searchKey = "", searchWord = ""}) => {
    return await baseAPI.get(`/${url}/list/${offset}/${perPage}${searchKey}${searchWord}`);
}

export const writePost = async ({url, title, content}) => {
    return await authAPI.post(`/${url}/create`, {title, content});
}

export const updatePost = async ({url, no, title, content}) => {
    return await authAPI.post(`/${url}/update`, {no, title, content});
}

export const deletePost = async (url, no) => {
    return await authAPI.get(`/${url}/delete/${no}`);
}


export const writeReply = async ({replyUrl, boardNo, content, replyNo}) => {
    return await authAPI.post(`/${replyUrl}/create`, {boardNo, content, replyNo});
}

export const updateReply = async ({replyUrl, no, content}) => {
    return await authAPI.post(`/${replyUrl}/update`, {no, content});
}

export const deleteReply = async (replyUrl, no) => {
    return await authAPI.post(`/${replyUrl}/delete`, {no});
}