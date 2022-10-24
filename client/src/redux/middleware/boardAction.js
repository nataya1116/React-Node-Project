import { BoardAPI, SUCCESS, FAIL } from "../../api";
import { SessionService } from "../../service";
import { CREATE, UPDATE, READ, DELETE, LIST } from "../common";

function searchingList({ url = "notice_board", page = "1", perPage = "10", searchKey = null, searchWord = null }) {

  return async (dispatch, getState) => {

    searchKey = searchKey === null || searchWord === null ? "" : "/" + searchKey;
    searchWord = searchWord === null ? "" : "/" + searchWord;

    const result = await BoardAPI.searchingList(
                                                url,
                                                page,
                                                perPage,
                                                searchKey,
                                                searchWord
                                                );
    console.log(result);
    if (result?.ret === SUCCESS) {
      dispatch({ type: LIST, payload: { url, list : result?.list, postNum : result?.postNum, totalPageNum : result?.totalPageNum, info: result?.info } });
    }
  };
}

export { searchingList };
