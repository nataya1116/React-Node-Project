import React from 'react'
import { Tr, Input, Btn, CheckTd } from '../styledComponent/join_cs';

const MypageModify = () => {
  return (
        <>
            <table>
                <Tr>
                    <td>아이디</td>
                    <td>아이디</td>
                    <td></td>
                </Tr>
                <Tr><CheckTd></CheckTd></Tr>

                <Tr>
                    <td>닉네임</td>
                    <td><Input/></td>
                    <td><Btn>중복확인</Btn></td>
                </Tr>
                <Tr><CheckTd colSpan="3"></CheckTd></Tr>

                <Tr>
                    <td>이메일</td>
                    <td><Input/></td>
                    <td><Btn>메일인증</Btn></td>
                </Tr>
                <Tr><CheckTd colSpan="3"></CheckTd></Tr>

                <Tr>
                    <td>비밀번호</td>
                    <td><Input type="password"/></td>
                    <td></td>
                </Tr>
                <Tr><CheckTd colSpan="3"></CheckTd></Tr>

                <Tr>
                    <td>비밀번호 확인</td>
                    <td><Input type="password"/></td>
                    <td colSpan="3"></td>
                </Tr>
                <Tr><CheckTd colSpan="3"></CheckTd></Tr>

            </table>

            <Btn>수정</Btn>
        </>
  )
}

export default MypageModify