import { BoardAPI, SUCCESS, FAIL } from "../api";
import { BOARD_URL, CREATE, UPDATE, READ, DELETE, LIST, CREATE_REPLY, UPDATE_REPLY, DELETE_REPLY, } from './common';
// import {produce} from "immer"

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
    
    if (result?.ret === SUCCESS) {
      dispatch({ type: LIST, payload: { list, postNum : result?.postNum, totalPageNum : result?.totalPageNum, query: { page, perPage, searchKey, searchWord } } });
    }
  };
}

function writePost({url, nickname, title, content, pageQuery, nav}){
  return async  (dispatch, getState) => {

    const result = await BoardAPI.writePost({url, title, content});
    
    if(result?.ret === FAIL){
      alert("게시글 등록에 실패하였습니다.");
      nav(`/${url}/list/1/10`);
      return;
    }
    if(pageQuery?.page == 1){
      const { no, title, content } = result?.post;
      let createdAt = result?.post.createdAt;
      createdAt = dataStr(createdAt);
      dispatch({type : CREATE, payload: { no, nickname, title, content, createdAt} });
    }

    nav(`/${url}/list/1/10`);
  }
}

function dataStr(date) {
  const dateStr = date.split("T")[0];
  const timeStr = date.split("T")[1].split(".")[0];
  return dateStr+" "+timeStr;
}

function updatePost({url, index, no, offset, title, content, nav}){
  return async  (dispatch, getState) => {
    const result = await BoardAPI.updatePost({url, no, title, content});

    nav(`/${url}/read/${offset}`);
    
    if(result?.ret !== SUCCESS){
      alert("게시글 수정에 실패하였습니다.");
      
      return;
    }

    dispatch({type : UPDATE, payload: { index, no, title, content } });
  }
}

function deletePost(url, no, nav){
  return async (dispatch, getState) => {
    const result = await BoardAPI.deletePost(url, no);
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
      dispatch({ type: LIST, payload: { list, postNum : result?.postNum, totalPageNum : result?.totalPageNum, query: { page : 1, perPage : 10, searchKey : "", searchWord : "" } } });
    }
    
    nav(`/${url}/list/1/10`);
  }
}


function writeReply({replyUrl, replyName, nickname, boardNo, boardIndex, content, replyNo = null}){
  return async  (dispatch, getState) => {
    const result = await BoardAPI.writeReply({replyUrl, boardNo, content, replyNo});

    if(result?.ret === FAIL){
      alert("댓글 등록에 실패하였습니다.");
      return;
    }
      const { no } = result?.reply;
      let createdAt = result?.reply.createdAt;
      createdAt = dataStr(createdAt);
      dispatch({type : CREATE_REPLY, payload: { boardIndex, no, nickname, content, createdAt, replyName} });
  }
}


function updateReply({replyUrl, replyName, boardNo, boardIndex, replyNo, content}){
  return async  (dispatch, getState) => {
    const result = await BoardAPI.updateReply({replyUrl, no : replyNo, content});

    if(result?.ret !== SUCCESS){
      alert("댓글 수정에 실패하였습니다.");
      
      return;
    }

    dispatch({type : UPDATE_REPLY, payload: { replyName, boardIndex, boardNo, replyNo, content } });
  }
}

function deleteReply({replyUrl, replyName, boardNo, boardIndex, replyNo}){
  return async  (dispatch, getState) => {
    console.log({replyUrl, replyName, boardNo, boardIndex, replyNo});
    const result = await BoardAPI.deleteReply(replyUrl, replyNo);

    if(result?.ret !== SUCCESS){
      alert("댓글 삭제에 실패하였습니다.");
      return;
    }

    dispatch({type : DELETE_REPLY, payload: { replyName, boardIndex, boardNo, replyNo } });
  }
}

export { searchingList, writePost, updatePost, deletePost, writeReply, updateReply, deleteReply };

let init = {
    url : null,
    replyUrl : null,
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
            return {
                ...state,
                url : payload.boardUrl,
                replyUrl : payload.replyUrl
            }
        case CREATE:
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
        case UPDATE:{
            const postNo = state.list[payload.index].no;
            if(state.list.length && postNo === payload.no){
              state.list[payload.index] = {...state.list[payload.index], title : payload.title, content : payload.content};
            }

            return { 
                ...state
            };
          }
        case READ:
            return { ...state, 
                        url : payload.url,
                        list : payload.list, 
                        query: payload.query 
                    };
        case DELETE:
            return { ...state, 
                        point : payload.point
                    };
        case LIST:
            return { 
                ...state,
                list : [...payload.list], 
                postNum : payload.postNum,
                totalPageNum : payload.totalPageNum,
                query: {...payload.query}
            };
        case CREATE_REPLY:
            state.list[payload.boardIndex][payload.replyName] 
            = [...state.list[payload.boardIndex][payload.replyName], 
                { no : payload.no, 
                  content : payload.content,
                  replyNo : payload.replyNo,
                  createdAt : payload.createdAt,
                  User : {nickname : payload.nickname}
                } 
              ]
            return {
              ...state,
              list : [...state.list]
            }
        case UPDATE_REPLY:{
          const postNo = state.list[payload.boardIndex].no;
          if(state.list.length && postNo === payload.boardNo){
            const replyList = state.list[payload.boardIndex][payload.replyName].map((reply)=>{
              if(reply.no === payload.replyNo){
                reply.content = payload.content;
              }
              return reply;
            })
            state.list[payload.boardIndex][payload.replyName] = replyList;
          }
          return { 
            ...state,
            list : [...state.list]
          };
        } 
        case DELETE_REPLY:
            const postNo = state.list[payload.boardIndex].no;
            console.log(state.list[payload.boardIndex][payload.replyName]);
            if(state.list.length && postNo === payload.boardNo){
              const replyList 
              = state.list[payload.boardIndex][payload.replyName].filter((reply)=>
                reply.no !== payload.replyNo
              )
              state.list[payload.boardIndex][payload.replyName] = replyList;
              console.log({replyList});
            }
            
            console.log(state.list[payload.boardIndex][payload.replyName]);
            return {
              ...state,
              list : [...state.list]
            }
        default:
            return state;
    }
}

export default board;