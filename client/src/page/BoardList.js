import React, { useEffect, useRef } from "react";

import {
  Article,
  Tr,
  Btn,
  SearchDiv,
  PagenationDiv,
  ActivateLink,
  BoardLink,
  Icon,
} from "../styledComponent/board_list_cs";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { boardAction } from "../redux/middleware";

const BoardList = () => {

  const dispatch = useDispatch();

  const nav = useNavigate();

  const searchSelect = useRef();
  const searchInput = useRef();

  let { page, perPage, searchKey = null, searchWord = null } = useParams();
  const pageParams = { page, perPage, searchKey, searchWord };

  const url = useSelector((state) => state.boardReducer.url);
  const pageInfo = useSelector((state) => state.boardReducer.info);
  const totalPageNum = useSelector(state => state.boardReducer.totalPageNum);

  const list = useSelector((state) => state.boardReducer.list);

  // let key
  let isSameValue = true;
  for (const key in pageInfo) {
    if (pageParams[key] != pageInfo[key]) {
      isSameValue = false;
      break;
    }
  }

  if(pageInfo.searchWord){
    searchSelect.current.value = pageInfo.searchKey;
    searchInput.current.value = pageInfo.searchWord;
  }
  
  if(!isSameValue){
    dispatch(boardAction.searchingList({ url, ...pageParams }));
  }

  searchKey = searchKey !== null && searchWord !== null ? "/"+searchKey : "";
  searchWord = searchWord !== null ? "/"+searchWord : "";

  let count = 0;
  let offset;

  const pageNation = () => {
    let list = [];
    for (let i = 1; i <= totalPageNum; i++) {
      if(pageInfo.page === i){
        list = [...list, <ActivateLink to={`/${url}/list/${i}/${pageInfo.perPage}${searchKey}${searchWord}`}>{i}</ActivateLink>];
      }else{
        list = [...list, <BoardLink to={`/${url}/list/${i}/${pageInfo.perPage}${searchKey}${searchWord}`}>{i}</BoardLink>];
      }
    }
    return list;
  }

  const searching = () => {
    const searchKey = searchSelect.current.value;
    const searchWord = searchInput.current.value;

    nav(`/${url}/list/1/10/${searchKey}/${searchWord}`);
  }
  return (
    <Article>
      <div>
        <table>
          <Tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
            <th>조회</th>
          </Tr>

          {list.map((item) => {
            offset = 0;
            if (pageParams.page > 1) {
              offset = pageParams.perPage * (pageParams.page - 1);
            }
            offset += count;
            count++;

            return (
              <Tr>
                <td>{item.no}</td>
                <td>
                  <BoardLink to={`/${url}/read/${offset}${searchKey}${searchWord}`} state={item.no}>
                    {item.title}
                  </BoardLink>
                </td>
                <td>{item.User.nickname}</td>
                <td>{item.createdAt}</td>
                <td>{item.view}</td>
              </Tr>
            );
          })}
        </table>

        <SearchDiv>
          <select ref={searchSelect}>
            <option value="title" >제목</option>
            <option value="content" >내용</option>
            <option value="nickname" >작성자</option>
          </select>
          <input ref={searchInput} />
          <Btn onClick={searching}>검색</Btn>
        </SearchDiv>

        <PagenationDiv>
          <BoardLink to={`/${url}/list/1/${pageInfo.perPage}${searchKey}${searchWord}`}>
            {" "}
            <Icon
              src={process.env.PUBLIC_URL + "/img/icon/icon-left.png"}
            />{" "}
          </BoardLink>

          {pageNation()}

          <BoardLink to={`/${url}/list/${totalPageNum}/${pageInfo.perPage}${searchKey}${searchWord}`}>
            {" "}
            <Icon
              src={process.env.PUBLIC_URL + "/img/icon/icon-right.png"}
            />{" "}
          </BoardLink>
        </PagenationDiv>
      </div>
    </Article>
  );
};

export default BoardList;
