import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { ReplyViewDiv, Btn } from '../../styledComponent/board_view_cs'
import { updateReply } from '../../redux/boardReducer';

const Reply = ({reply, nickname, replyUrl, replyName, boardNo, boardIndex, replyNo}) => {
  const dispatch = useDispatch();
  const [isModify, setModify] = useState(false);
  const isUser = nickname === reply?.User?.nickname;
  const content = useRef();
  return (
    <ReplyViewDiv>
    <div>
        <span>{reply?.User?.nickname}</span>
        <span>{reply?.createdAt}</span>
    </div>
    
    <div>
        {
            isModify ?
            <textarea ref={content}>
                {reply?.content}
            </textarea> :
            <p>
               {reply?.content} 
            </p>
        }
    </div>
    <div>
    { !isUser ? 
      <></> :
      isModify ?
      <>
        <Btn onClick={()=>{
                dispatch(updateReply({replyUrl, replyName, boardNo, boardIndex, replyNo, content : content.current.value}));
                setModify(false);
            }}>저장</Btn>
      </>
      :
      <>
        <Btn onClick={()=>{setModify(true)}}>수정</Btn>
        <Btn>삭제</Btn>
      </>
    }
    </div>
  </ReplyViewDiv>
  )
}

export default Reply;


{/* <ReplyViewDiv>
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
{nickname === reply?.User?.nickname ? 
  <>
    <Btn onClick={()=>{setModify(true)}}>수정</Btn>
    <Btn>삭제</Btn>
  </>
  :
  <></>
}
</div>
</ReplyViewDiv> */}