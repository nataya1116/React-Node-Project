import React, { useEffect, useRef } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { Article, TitleDiv, EctDiv, ContentDiv, ReplyDiv, ReplyWriterDiv, ReplyViewDiv, Btn, PageNav  } from '../styledComponent/board_view_cs'
import { Icon,} from "../styledComponent/board_list_cs";
import { useDispatch, useSelector } from 'react-redux';
import { searchingList, deletePost, writeReply } from '../redux/boardReducer';
import Reply from '../component/board/Reply';

const BoardView = () => {

  const dispatch = useDispatch();
  const nav = useNavigate();
  
  const url = useSelector((state) => state.board.url);
  const replyUrl = useSelector((state) => state.board.replyUrl);

  const replyContent = useRef();

  const undefinedPage = ()=>{
    alert("존재하지 않는 페이지입니다.");
    nav(`/${url}/list/1/10`);
  }

  let { offset, searchKey = null, searchWord = null } = useParams();

  if(isNaN(offset)){
    undefinedPage();
  }

  offset = Number(offset);

  if(offset < 0) {
    undefinedPage();
  }
  
  const isLogin = useSelector((state) => state.user.isLogin);
  const list = useSelector((state) => state.board.list);
  const pageQuery = useSelector((state) => state.board.query);

  const offsetStr = offset+"";
  const index = Number(offsetStr.substring(offsetStr?.length-1));
  const post = list[index];

  let perPage = pageQuery.perPage;
  let page = pageQuery.page;

  useEffect(()=>{
    if(!post || searchKey !== pageQuery.searchKey || searchWord !== pageQuery.searchWord){
      perPage = 10;
      page = Math.floor( offset / perPage ) + 1;
      console.log("offset",offset,"page",page,"perPage",perPage);
      dispatch(searchingList({ url, page, perPage, searchKey, searchWord }));
    }

    
  },[])

  const postNum = useSelector(state => state.board.postNum);

  if(offset > postNum -1) {
    undefinedPage();
  }

  searchKey = searchKey !== null && searchWord !== null ? "/"+searchKey : "";
  searchWord = searchWord !== null ? "/"+searchWord : "";
  
  console.log({replyUrl});
  console.log({url});

  const nickname = useSelector(state => state.user.nickname);

  const replyName = url === "notice_board" ? "NoticeReplies" : url === "free_board" ? "FreeReplies" : null;

  return (
    <Article>
        <div>

            <TitleDiv>
              <h5>{post?.title}</h5>
            </TitleDiv>

            
            <ContentDiv>
              <p>
                {post?.content}
              </p>
            </ContentDiv>

            <EctDiv>
              <div>
                  <span>{post?.User?.nickname}</span>
                  <span>{post?.view}</span>                  
                  <span>{post?.createdAt}</span>
              </div>
              <div>
                {nickname == post?.User?.nickname ? 
                  <>
                    <Btn onClick={()=>{ nav(`/${url}/update/${offset}`)} }>수정</Btn>
                    <Btn onClick={()=>{ dispatch(deletePost(url, post.no, nav)) }}>삭제</Btn>
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
                          boardNo : post.no, 
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
                post[replyName]?.map(reply => {
                  return (
                    <Reply nickname={nickname} reply={reply} replyUrl={replyUrl} replyName={replyName} boardNo={post.no} boardIndex={index} replyNo={reply.no}/>
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