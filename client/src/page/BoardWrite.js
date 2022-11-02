import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { Article, TitleDiv, ContentDiv, Btn  } from '../styledComponent/board_write_cs';
import { postUpdate } from "../redux/boardReducer";


const BoardWrite = () => {
  const nickname = useSelector(state=>state.user.nickname);
  const url = useSelector((state) => state.board.url);
  const pageQuery = useSelector((state) => state.board.query);

  const dispatch = useDispatch();
  const nav = useNavigate();

  useEffect(()=>{
    if(!nickname){
      alert("로그인을 해주세요.");
      
      console.log("/login");
      nav("/login");
      console.log("hihi")
    }
  },[])

  const postInputs = {
    title : useRef(),
    content : useRef()
  }

  const createPost = () => {
    if(!nickname){
      alert("로그인을 해주세요.");
      nav("/login");
      return;
    }
    if(!postInputs.title){
      postInputs.title?.current.focus();
      return;
    }
    if(!postInputs.content){
      postInputs.content?.current.focus();
      return;
    }

    dispatch(postUpdate({
                          url, 
                          nickname,
                          title : postInputs.title.current.value, 
                          content : postInputs.content.current.value, 
                          pageQuery, 
                          nav
                        }))
  }

  return (
    <Article>
        <div>

            <TitleDiv>
              <input ref={postInputs.title}></input>
            </TitleDiv>

            
            <ContentDiv>
              <div>
                <textarea ref={postInputs.content}></textarea>
              </div>
            </ContentDiv>
            
            <Btn onClick={createPost}>저장</Btn>
        </div>
    </Article>
  )
}

export default BoardWrite