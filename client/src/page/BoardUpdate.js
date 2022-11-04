import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';

import { Article, TitleDiv, ContentDiv, Btn  } from '../styledComponent/board_write_cs';
import { postUpdate, postWrite } from "../redux/boardReducer";
import { BoardAPI } from '../api';


const BoardUpdate = () => {
  const { offset = null } = useParams(); 
  const id= useSelector(state=>state.user.id);

  useEffect(()=>{
    if(!id){
      alert("로그인을 해주세요.");
      
      console.log("/login");
      nav("/login");
      console.log("hihi")
    }

    if(!offset || isNaN(offset)){
      alert("없는 게시물 입니다.");
      nav(`/${url}/list/1/10`);
    }
  },[]);

  const url = useSelector((state) => state.board.url);
  let list = useSelector((state) => state.board.list);
  const offsetStr = offset+"";
  const index = Number(offsetStr.substring(offsetStr?.length-1, 1));
  let post = list[index];
  console.log({post});
  
  const pageQuery = useSelector((state) => state.board.query);
  const dispatch = useDispatch();
  const nav = useNavigate();

  const postInputs = {
    title : useRef(),
    content : useRef()
  }

  

  useEffect(()=>{
    if(!post){
      // , searchKey : "", searchWord : ""
      list = BoardAPI.searchingList({url, offset, perPage : 1});
      post = list[0];
      console.log(post);
    }

    postInputs.title.current.value = post?.title;
    postInputs.content.current.value = post?.content;
  },[])


  const createPost = () => {
    if(!id){
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
                          no : index,
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

export default BoardUpdate