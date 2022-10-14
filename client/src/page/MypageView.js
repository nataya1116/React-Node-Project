import React from 'react';
import { Td, LargeBtn } from '../styledComponent/join_cs';

const Mypage = () => {
  return (
    <>
        <table>
            <tr>
                <Td>아이디</Td>
                <Td>아이디</Td>
            </tr>

            <tr>
                <Td>닉네임</Td>
                <Td>닉네임</Td>
            </tr>

        </table>

        <LargeBtn onClick={()=>{window.location.href="/mypage/modify"}}>회원 정보 수정</LargeBtn>
        <LargeBtn>카드 스킨 수정</LargeBtn>
    </>
  )
}

export default Mypage