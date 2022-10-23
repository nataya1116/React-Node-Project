import React from 'react';
import { Tr, LargeBtn } from '../styledComponent/join_cs';
import { FindDiv, FindLink } from '../styledComponent/login_cs';
import { UserAction } from '../redux/middleware';

const Mypage = () => {
  return (
    <>
        <table>
          <Tr>
              <td>아이디</td>
              <td>아이디</td>
          </Tr>

          <Tr>
              <td>닉네임</td>
              <td>닉네임</td>
          </Tr>
          <Tr>
              <td>이메일</td>
              <td>nata1116@naver.com</td>
          </Tr>
        </table>

        <LargeBtn onClick={()=>{window.location.href="/mypage/modify"}}>회원 정보 수정</LargeBtn>
        <LargeBtn>카드 스킨 수정</LargeBtn>
        <LargeBtn onClick={UserAction.logout}>로그아웃</LargeBtn>
        
        <br/>
        <FindDiv>
          <FindLink to="/gift_box/received">받은 선물</FindLink> / 
          <FindLink to="/gift_box/sent">보낸 선물</FindLink>
        </FindDiv>

        {/* <LargeBtn onClick={()=>{window.location.href="/mypage/gift_box"}}>선물함</LargeBtn> */}
    </>
  )
}

export default Mypage