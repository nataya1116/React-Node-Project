import { BOARD_URL, CREATE, UPDATE, READ, DELETE, LIST } from '../common';

let init = {
    url : null,
    postNum : null,
    totalPageNum : null,
    query : {
        page : null,
        perPage : null,
        searchKey : null,
        searchWord : null,
    },
    list : []
}

function reducer(state = init, action) {
    const {type, payload} = action;
    switch (type) {
        case BOARD_URL:
            console.log("BOARD_URL",payload.boardUrl);
            return {
                ...state,
                url : payload.boardUrl
            }
        case CREATE:
            console.log("로그인");
            return { 
                ...state, 
                id : payload.id, 
                nickname : payload.nickname,
                authorityNo : payload.authorityNo, 
                stateNo : payload.stateNo,
                isLogin : true
            };
        case UPDATE:
            console.log("로그아웃");
            return { 
                ...state, 
                id : payload.id, 
                nickname : payload.nickname,
                authorityNo : payload.authorityNo, 
                stateNo : payload.stateNo,
                isLogin : true
            };
        case READ:
            console.log("포인트");
            return { ...state, 
                        url : payload.url, 
                        list : payload.list, 
                        query: payload.query 
                    };
        case DELETE:
            console.log("포인트");
            return { ...state, 
                        point : payload.point
                    };
        case LIST:
            console.log("LIST");
            return { 
                ...state, 
                url : payload.url, 
                list : [...payload.list], 
                postNum : payload.postNum,
                totalPageNum : payload.totalPageNum,
                query: {...payload.query}
            };
        default:
            return state;
    }
}

export default reducer;