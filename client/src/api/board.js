import API from "./core";

export const searchingList = async ({url, offset, perPage, searchKey = "", searchWord = ""}) => {
    return await API.get(`/${url}/list/${offset}/${perPage}${searchKey}${searchWord}`);
}

export const writePost = async ({url, title, content, accessToken, refreshToken}) => {
    return await API.post(`/${url}/create`, {title, content}, {headers:{accessToken, refreshToken}});
}

export const updatePost = async ({url, id, no, title, content}) => {
    return await API.post(`/${url}/update`, {id, no, title, content});
}


// export const readPost = async ({url, offset, searchKey, searchWord}) => {
//     return await API.get(`/${url}/read/${offset}${searchKey}${searchWord}`);
// }


// export const getPoint = async (id) => {
//     return await API.post("user/point", {id});
// }