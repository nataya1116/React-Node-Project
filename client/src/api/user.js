import API from "./core";

export const overlapUserId = async (userId) => {
    try {
        const { data } = await API.get(`user/overlap_id/${userId}`);
        return data;
    } catch (err) {
        console.error(err);
        return "fail";
    }
}

// 
// export const getUserInfo = async (userId) => {
//     return await request({url:`user/info/${userId}`});
// }

// export const overlapUserId = async (userId) => {
//     return await request({url:`/user/overlap_id/${userId}`});
// }

// //post요청
// export const joinUser = (userInfo) =>{
//     return request(
//                     {
//                         method:'POST',
//                         url:'/user/join',
//                         data : userInfo
//                     }
//                 )
// }