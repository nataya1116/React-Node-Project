import { BoardAPI, SUCCESS, FAIL } from "../../api";
import { BOARD_URL, CREATE, UPDATE, READ, DELETE, LIST } from '../common';

function searchingList({ url = "notice_board", page = "1", perPage = "10", searchKey = null, searchWord = null }) {

  return async (dispatch, getState) => {


    const querySearchKey = searchKey === null || searchWord === null ? "" : "/" + searchKey;
    const querySearchWord = searchWord === null ? "" : "/" + searchWord;

    let offset = 0;
  
    if (page > 1) {
      offset = perPage * (page - 1);
    }

    let count = offset;

    console.log(url,
      offset,
      perPage,
      searchKey,
      searchWord);

    const result = await BoardAPI.searchingList({ 
                                                url,
                                                offset,
                                                perPage,
                                                searchKey : querySearchKey,
                                                searchWord : querySearchWord
                                              });

    const list = result?.list;

    list.map(item => {
      item.offset = count;
      count++;
    });

    console.log(list);
    
    if (result?.ret === SUCCESS) {
      dispatch({ type: LIST, payload: { url, list, postNum : result?.postNum, totalPageNum : result?.totalPageNum, query: { page, perPage, searchKey, searchWord } } });
    }
  };
}

function postWrite({url, id, nickname, title, content, pageQuery, nav}){
  return async  (dispatch, getState) => {
    console.log({id, nickname, title, content});
    const result = await BoardAPI.writePost({url, id, title, content});
    
    if(result?.ret !== SUCCESS){
      alert("게시글 등록에 실패하였습니다.");
      nav(`/${url}/list/1/10`);
      return;
    }
    console.log(result?.post);
    if(pageQuery?.page == 1){
      dispatch({type : CREATE, payload: {...result.post, {nickname}} });
    }

    nav(`/${url}/list/1/10`);
  }
}

export { searchingList, postWrite, };

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

function board(state = init, action) {
    const {type, payload} = action;
    switch (type) {
        case BOARD_URL:
            console.log("BOARD_URL",payload.boardUrl);
            return {
                ...state,
                url : payload.boardUrl
            }
        case CREATE:
            console.log("board create");
            return { 
                ...state, 
                list : [{
                          User : { nickname : payload.nickname },
                          createdAt : payload.createdAt,
                          title : payload.title,
                          content : payload.content 
                        },
                        ...state.list, 
                        ]
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

export default board;