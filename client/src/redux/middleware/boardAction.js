import { BoardAPI, SUCCESS, FAIL } from "../../api";
import { CREATE, UPDATE, READ, DELETE, LIST } from "../common";

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

    const result = await BoardAPI.writePost({url, id, title, content});
    
    if(result?.ret !== SUCCESS){
      alert("게시글 등록에 실패하였습니다.");
      nav(`/${url}/list/1/10`);
      return;
    }

    if(pageQuery?.page === 1){
      dispatch({type : CREATE, payload: { id, nickname, title, content, createdAt : createDateStr()}});
    }

    nav(`/${url}/list/1/10`);

  }
}

function createDateStr(){
  const date = new Date();
  const dateStr = date.toISOString().split[" "][0];
  const timeStr = date.toTimeString().split[" "][0];
  return dateStr+" "+timeStr;
}

export { searchingList, postWrite, };
