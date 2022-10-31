import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { Article, TitleDiv, EctDiv, ContentDiv, ReplyDiv, ReplyWriterDiv, ReplyViewDiv, Btn, PageNav  } from '../styledComponent/board_view_cs'
import { Icon,} from "../styledComponent/board_list_cs";
import { useDispatch, useSelector } from 'react-redux';
import { searchingList } from '../redux/boardReducer';

const BoardList = () => {

  const dispatch = useDispatch();
  const nav = useNavigate();
  
  const url = useSelector((state) => state.board.url);

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
  
  const list = useSelector((state) => state.board.list);
  const pageQuery = useSelector((state) => state.board.query);

  const post = list.find(item => {return item.offset == offset} );

  if(!post || searchKey !== pageQuery.searchKey || searchWord !== pageQuery.searchWord){
    const perPage = 10;
    const page = Math.floor( offset / perPage ) + 1;
    console.log("offset",offset,"page",page,"perPage",perPage);
    dispatch(searchingList({ url, page, perPage, searchKey, searchWord }));
  }

  const postNum = useSelector(state => state.board.postNum);

  if(offset > postNum -1) {
    undefinedPage();
  }

  searchKey = searchKey !== null && searchWord !== null ? "/"+searchKey : "";
  searchWord = searchWord !== null ? "/"+searchWord : "";
  
  console.log("postNum", postNum);

  const nickname = useSelector(state => state.user.nickname);

  const reply = url === "notice_board" ? "NoticeReplies" : url === "free_board" ? "FreeReplies" : null;

  return (
    <Article>
        <div>

            <TitleDiv>
              <h5>{post?.title}</h5>
            </TitleDiv>

            
            <ContentDiv>
              <p>{post?.content}</p>
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
                    <Btn>수정</Btn>
                    <Btn>삭제</Btn>
                  </>
                  :
                  <></>
                }
                  
              </div>
            </EctDiv>


            <ReplyDiv>
              <ReplyWriterDiv>
                <div>
                  <textarea>댓글 작성</textarea>
                </div>
                <div>
                  <Btn>작성</Btn>
                </div>
              </ReplyWriterDiv>
            </ReplyDiv>

            <div>
              {
                post[reply].map(reply => {
                  return (
                    <ReplyViewDiv>
                      <div>
                          <span>{reply?.User?.nickname}</span>
                          <span>{reply?.createdAt}</span>
                      </div>
                      
                      <div>
                          <p>
                              {reply?.content}
                          </p>
                      </div>
                      <div>
                      {nickname == reply?.User?.nickname ? 
                        <>
                          <Btn>수정</Btn>
                          <Btn>삭제</Btn>
                        </>
                        :
                        <></>
                      }
                      </div>
                    </ReplyViewDiv>
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
          
          <Link to={`/${url}/list/1/10${searchKey}${searchWord}`}>목록</Link>

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

export default BoardList