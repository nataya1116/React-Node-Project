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

import { searchingList } from "../redux/boardReducer";
import { ACTIVE, ADMIN } from "../redux/common";

const BoardList = () => {

  const dispatch = useDispatch();

  const nav = useNavigate();

  const searchSelect = useRef();
  const searchInput = useRef();

  const isLogin = useSelector((state) => state.user.isLogin);
  const stateNo = useSelector((state) => state.user.stateNo);
  const authorityNo = useSelector((state) => state.user.authorityNo);

  let { page, perPage, searchKey = null, searchWord = null } = useParams();
  const pageParams = { page, perPage, searchKey, searchWord };
  // console.log(pageParams);
  const url = useSelector((state) => state.board.url);
  // console.log(url);
  const pageQuery = useSelector((state) => state.board.query);
  // console.log(pageQuery);
  const totalPageNum = useSelector(state => state.board.totalPageNum);

  const list = useSelector((state) => state.board.list);
  console.log(list);
  // let key
  let isSameValue = true;
  for (const key in pageQuery) {
    if (pageParams[key] != pageQuery[key]) {
      isSameValue = false;
      break;
    }
  }

  useEffect(()=>{
    if(pageQuery?.searchWord){
      searchSelect.current.value = pageQuery?.searchKey;
      searchInput.current.value = pageQuery?.searchWord;
    }
  },[])
  
  if(!isSameValue || !list){
    dispatch(searchingList({ url, ...pageParams }));
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

  let count = 0;
  const searching = () => {
    const searchKey = searchSelect.current.value;
    const searchWord = searchInput.current.value;

    nav(`/${url}/list/1/10/${searchKey}/${searchWord}`);
  }

  function printWriteBtn(){
    if(!isLogin) return <div></div>;

    if(stateNo !== ACTIVE) return <div></div>;

    if(url === "notice_board" && authorityNo !== ADMIN) return <div></div>;

    return <Btn onClick={()=>{nav(`/${url}/write`)}}>?????????</Btn>
  }
  const reply = url === "notice_board" ? "NoticeReplies" : url === "free_board" ? "FreeReplies" : null;
  return (
    <Article>
      <div>
        <table>
          <Tr>
            <th>??????</th>
            <th>??????</th>
            <th>?????????</th>
            <th>?????????</th>
            <th>??????</th>
          </Tr>

          {list.map((item, index) => {
            count++;
            if(count <= perPage)
            return (
              <Tr>
                <td>{item.no}</td>
                <td>
                  <BoardLink to={`/${url}/read/${item.offset}${searchKey}${searchWord}`} index={index}>
                    {item.title}
                    {
                      item[reply]?.length > 0 ? <>[{item[reply]?.length}]</> : <></>
                    }
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
          {printWriteBtn()}
          <div>
          <select ref={searchSelect}>
            <option value="title" >??????</option>
            <option value="content" >??????</option>
            <option value="nickname" >?????????</option>
          </select>
          <input ref={searchInput} />
          <Btn onClick={searching}>??????</Btn>
          </div>
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
