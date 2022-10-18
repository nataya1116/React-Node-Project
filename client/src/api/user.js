import request from "./core";

// 
export const getUserInfo = (userId) => {
    return request({url:`user/info/${userId}`});
}

export const overlapUserId = (userId) => {
    return request({url:`/user/overlap_id/${userId}`});
}

//post요청
export const joinUser = (userInfo) =>{
    return request(
                    {
                        method:'POST',
                        url:'/user/join',
                        data : userInfo
                    }
                )
}