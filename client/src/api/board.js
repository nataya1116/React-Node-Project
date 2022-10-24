import API from "./core";

export const searchingList = async (boardUrl, page, perPage, searchKey, searchWord) => {
    return await API.get(`/${boardUrl}/list/${page}/${perPage}${searchKey}${searchWord}`);
}


// export const getPoint = async (id) => {
//     return await API.post("user/point", {id});
// }