import { BoardAPI, SUCCESS } from "../../api";
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

// function readPost({ url = "notice_board", offset, searchKey = null, searchWord = null }) {

//   return async (dispatch, getState) => {


//     const querySearchKey = searchKey === null || searchWord === null ? "" : "/" + searchKey;
//     const querySearchWord = searchWord === null ? "" : "/" + searchWord;

//     const result = await BoardAPI.readPost({ 
//                                               url,
//                                               offset,
//                                               searchKey : querySearchKey,
//                                               searchWord : querySearchWord
//                                             });

//     const list = result?.list;

//     list.map(item => {
//       item.offset = offset;
//     });

//     // console.log(list);
    
//     if (result?.ret === SUCCESS) {
//       dispatch({ type: LIST, payload: { url, list, postNum : result?.postNum, totalPageNum : result?.totalPageNum, query: { searchKey, searchWord } } });
//     }
//   };
// }

export { searchingList,  };
