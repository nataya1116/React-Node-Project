import React, { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

import { Article, TitleDiv, EctDiv, ContentDiv, ReplyDiv, ReplyWriterDiv, ReplyViewDiv, Btn, PageNav  } from '../styledComponent/board_view_cs'
import { Icon,} from "../styledComponent/board_list_cs";
import { useDispatch, useSelector } from 'react-redux';
import { searchingList, deletePost, writeReply } from '../redux/boardReducer';
import Reply from '../component/board/Reply';

const BoardView = ({boardUrl}) => {

  const dispatch = useDispatch();
  const nav = useNavigate();
  
  let url = useSelector((state) => state.board.url);

  const replyContent = useRef();

  const undefinedPage = (url)=>{
    alert("존재하지 않는 페이지입니다.");
    nav(`/${url}/list/1/10`);
  }

  let { offset, searchKey = null, searchWord = null } = useParams();

  offset = Number(offset);
  console.log({offset});

  const isLogin = useSelector((state) => state.user.isLogin);
  let list = useSelector((state) => state.board.list);

  useEffect(()=>{
    if(!url){
      url = boardUrl;
    }

    if(offset < 0) {
      undefinedPage(url);
    }

    if(isNaN(offset)){
      undefinedPage(url);
    }

  },[])

  if(!list){
    const tempPage = Math.floor( offset / 10 ) + 1;
    dispatch(searchingList({ url, page : tempPage, perPage : 10, searchKey, searchWord }));
  }

  const pageQuery = useSelector((state) => state.board.query);
  const perPage = pageQuery.perPage;
  const page = pageQuery.page;

  const offsetStr = offset+"";
  const index = Number(offsetStr.substring(offsetStr?.length-1));

  const postNum = useSelector(state => state.board.postNum);

  useEffect(()=>{
    if(offset > postNum -1) {
      undefinedPage(url);
    }
  },[])

  
  const replyUrl = useSelector((state) => state.board.replyUrl);
  searchKey = searchKey !== null && searchWord !== null ? "/"+searchKey : "";
  searchWord = searchWord !== null ? "/"+searchWord : "";

  const nickname = useSelector(state => state.user.nickname);

  const replyName = url === "notice_board" ? "NoticeReplies" : url === "free_board" ? "FreeReplies" : null;

  return (
    <Article>
        <div>

            <TitleDiv>
              <h5>{list[index]?.title}</h5>
            </TitleDiv>

            
            <ContentDiv>
              <p>
                {list[index]?.content}
              </p>
            </ContentDiv>

            <EctDiv>
              <div>
                  <span>{list[index]?.User?.nickname}</span>
                  <span>{list[index]?.view}</span>                  
                  <span>{list[index]?.createdAt}</span>
              </div>
              <div>
                {nickname == list[index]?.User?.nickname ? 
                  <>
                    <Btn onClick={()=>{ nav(`/${url}/update/${offset}`)} }>수정</Btn>
                    <Btn onClick={()=>{ dispatch(deletePost(url, list[index].no, nav)) }}>삭제</Btn>
                  </>
                  :
                  <></>
                }
                  
              </div>
            </EctDiv>

            {
              isLogin ?  
              <ReplyDiv>
              <ReplyWriterDiv>
                <div>
                  <textarea ref={replyContent} placeholder="댓글 작성"></textarea>
                </div>
                <div>
                  <Btn onClick={()=>{
                      dispatch(
                        writeReply({
                          replyUrl, 
                          replyName, 
                          nickname, 
                          boardNo : list[index].no, 
                          boardIndex : index, 
                          content : replyContent.current.value
                        }));
                        replyContent.current.value = "";
                    }}>작성</Btn>
                </div>
              </ReplyWriterDiv>
            </ReplyDiv>
            :
            <></>
            }


            <div>
              {
                list[index][replyName]?.map(reply => {
                  return (
                    <Reply nickname={nickname} reply={reply} replyUrl={replyUrl} replyName={replyName} boardNo={list[index]?.no} boardIndex={index} replyNo={reply?.no}/>
                  )
                })
              }
              

            </div>
        </div>
        <PageNav>
          {
            offset > 0 ? 
            <Link to={`/${url}/read/${offset-1}${searchKey}${searchWord}`}>
              <Icon src={process.env.PUBLIC_URL + "/img/icon/icon-left.png"}/>
              이전글
            </Link> :
            <></>
          }
          
          <Link to={`/${url}/list/${page}/${perPage}${searchKey}${searchWord}`}>목록</Link>

          {
            offset < postNum -1 ?
            <Link to={`/${url}/read/${offset+1}${searchKey}${searchWord}`}>다음글
              <Icon src={process.env.PUBLIC_URL + "/img/icon/icon-right.png"}/>
            </Link> :
            <></>
          }
        </PageNav>
    </Article>
  )
}

export default BoardView