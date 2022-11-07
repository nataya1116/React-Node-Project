import { BoardAPI, SUCCESS, FAIL } from "../api";
import { BOARD_URL, CREATE, UPDATE, READ, DELETE, LIST,  } from './common';
import {produce} from "immer"

function searchingList({ url = "notice_board", page = "1", perPage = "10", searchKey = null, searchWord = null }) {

  return async (dispatch, getState) => {
    const querySearchKey = searchKey === null || searchWord === null ? "" : "/" + searchKey;
    const querySearchWord = searchWord === null ? "" : "/" + searchWord;

    let offset = 0;
  
    if (page > 1) {
      offset = perPage * (page - 1);
    }

    let count = offset;

    const result = await BoardAPI.searchingList({ 
                                                url,
                                                offset,
                                                perPage,
                                                searchKey : querySearchKey,
                                                searchWord : querySearchWord
                                              });

    const list = result?.list;

    list?.map(item => {
      item.offset = count;
      count++;
    });

    console.log(list);
    
    if (result?.ret === SUCCESS) {
      dispatch({ type: LIST, payload: { url, list, postNum : result?.postNum, totalPageNum : result?.totalPageNum, query: { page, perPage, searchKey, searchWord } } });
    }
  };
}

function writePost({url, nickname, title, content, pageQuery, nav}){
  return async  (dispatch, getState) => {
    // console.log({id, nickname, title, content});
    const result = await BoardAPI.writePost({url, title, content});

    console.log("boardReducer",result);
    
    if(result?.ret === FAIL){
      alert("게시글 등록에 실패하였습니다.");
      nav(`/${url}/list/1/10`);
      return;
    }
    if(pageQuery?.page == 1){
      
      console.log(result?.post);
      const { no, title, content } = result?.post;
      let createdAt = result?.post.createdAt;
      createdAt = dataStr(createdAt);
      console.log({ no, title, content, createdAt});
      dispatch({type : CREATE, payload: { no, nickname, title, content, createdAt} });
    }

    nav(`/${url}/list/1/10`);
  }
}

function updatePost({url, index, no, offset, title, content, nav}){
  return async  (dispatch, getState) => {
    console.log({url, index, no, offset, title, content, nav});
    const result = await BoardAPI.updatePost({url, no, title, content});

    nav(`/${url}/read/${offset}`);
    
    if(result?.ret !== SUCCESS){
      alert("게시글 수정에 실패하였습니다.");
      
      return;
    }

    dispatch({type : UPDATE, payload: { index, title, content } });
  }
}

function deletePost(url, no, nav){
  console.log("deletePost");
  return async (dispatch, getState) => {
    const result = await BoardAPI.deletePost(url, no);
    console.log("deletePost");
    
    if(result?.ret !== SUCCESS){
      alert("게시글 삭제에 실패하였습니다.");
    }

    let offset = 0;

    let count = offset;

    const resultList = await BoardAPI.searchingList({ 
                                                url,
                                                offset,
                                                perPage : 10
                                              });

    const list = resultList?.list;

    list?.map(item => {
      item.offset = count;
      count++;
    });

    if (resultList?.ret === SUCCESS) {
      dispatch({ type: LIST, payload: { url, list, postNum : result?.postNum, totalPageNum : result?.totalPageNum, query: { page : 1, perPage : 10, searchKey : "", searchWord : "" } } });
    }
    
    nav(`/${url}/list/1/10`);
  }
}

function dataStr(date) {
  const dateStr = date.split("T")[0];
  const timeStr = date.split("T")[1].split(".")[0];
  return dateStr+" "+timeStr;
}

export { searchingList, writePost, updatePost, deletePost };

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
            state.list.map(item=>{
              item.offset++;
            });
            return { 
                ...state, 
                list : [{
                          no : payload.no,
                          User : { nickname : payload.nickname },
                          createdAt : payload.createdAt,
                          title : payload.title,
                          content : payload.content,
                          offset : 0,
                          view : 0, 
                        },
                        ...state.list, 
                        ]
            };
        case UPDATE:
            console.log("board update");
            if(state.list.length){
              state.list[payload.index] = {...state.list[payload.index], title : payload.title, content : payload.content};
            }

            return { 
                ...state
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