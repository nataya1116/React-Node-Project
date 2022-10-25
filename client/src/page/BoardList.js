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
  // console.log(pageParams);
  const url = useSelector((state) => state.boardReducer.url);
  // console.log(url);
  const pageQuery = useSelector((state) => state.boardReducer.query);
  // console.log(pageQuery);
  const totalPageNum = useSelector(state => state.boardReducer.totalPageNum);

  const list = useSelector((state) => state.boardReducer.list);
  // console.log(list);
  // let key
  let isSameValue = true;
  for (const key in pageQuery) {
    if (pageParams[key] != pageQuery[key]) {
      isSameValue = false;
      break;
    }
  }

  if(pageQuery?.searchWord){
    searchSelect.current.value = pageQuery.searchKey;
    searchInput.current.value = pageQuery.searchWord;
  }
  
  if(!isSameValue || !list){
    console.log("boardAction.searchingList()");
    dispatch(boardAction.searchingList({ url, ...pageParams }));
  }

  searchKey = searchKey !== null && searchWord !== null ? "/"+searchKey : "";
  searchWord = searchWord !== null ? "/"+searchWord : "";

  const pageNation = () => {
    let list = [];
    for (let i = 1; i <= totalPageNum; i++) {
      if(page == i){
        list = [...list, <ActivateLink to={`/${url}/list/${i}/${perPage}${searchKey}${searchWord}`}>{i}</ActivateLink>];
      }else{
        list = [...list, <BoardLink to={`/${url}/list/${i}/${perPage}${searchKey}${searchWord}`}>{i}</BoardLink>];
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
            return (
              <Tr>
                <td>{item.no}</td>
                <td>
                  <BoardLink to={`/${url}/read/${item.offset}${searchKey}${searchWord}`} >
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
          <BoardLink to={`/${url}/list/1/${perPage}${searchKey}${searchWord}`}>
            {" "}
            <Icon
              src={process.env.PUBLIC_URL + "/img/icon/icon-left.png"}
            />{" "}
          </BoardLink>

          {pageNation()}

          <BoardLink to={`/${url}/list/${totalPageNum}/${perPage}${searchKey}${searchWord}`}>
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
