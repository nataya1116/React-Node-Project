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
    console.log(`/${url}/delete/${no}`);
    return await baseAPI.get(`/${url}/delete/${no}`);
}


// export const readPost = async ({url, offset, searchKey, searchWord}) => {
//     return await baseAPI.get(`/${url}/read/${offset}${searchKey}${searchWord}`);
// }


// export const getPoint = async (id) => {
//     return await baseAPI.post("user/point", {id});
// }