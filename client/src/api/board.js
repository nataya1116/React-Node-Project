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


export const writeReply = async ({url, boardNo, content}) => {
    return await authAPI.post(`/${url}/create`, {boardNo, content});
}

export const updateReply = async ({url, no, content}) => {
    return await authAPI.post(`/${url}/update`, {no, content});
}

export const deleteReply = async (url, no) => {
    return await authAPI.get(`/${url}/delete/${no}`);
}