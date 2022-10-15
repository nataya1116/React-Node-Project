import React from 'react'
import { Section, SectionHeader, SectionTitle, Article } from '../styledComponent/common_cs';
import { Div, Tr, Input, Btn, CheckTd } from '../styledComponent/join_cs';

const Join = () => {
  return (
    <Section>
        <SectionHeader>
            <SectionTitle> Join </SectionTitle>
        </SectionHeader>
        <Article>
            <Div>

                <table>
                    <Tr>
                        <td>아이디</td>
                        <td><Input/></td>
                        <td><Btn>중복확인</Btn></td>
                    </Tr>
                    <Tr><CheckTd colSpan="3"></CheckTd></Tr>

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

                <Btn>회원가입</Btn>
            </Div>
        </Article>
    </Section>
  )
}

export default Join