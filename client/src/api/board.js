import API from "./core";

export const searchingList = async ({url, offset, perPage, searchKey, searchWord}) => {
    return await API.get(`/${url}/list/${offset}/${perPage}${searchKey}${searchWord}`);
}

export const writePost = async ({url, id, title, content}) => {
    return await API.post(`/${url}/create`, {id, title, content});
}

// export const readPost = async ({url, offset, searchKey, searchWord}) => {
//     return await API.get(`/${url}/read/${offset}${searchKey}${searchWord}`);
// }


// export const getPoint = async (id) => {
//     return await API.post("user/point", {id});
// }