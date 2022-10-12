import React from 'react'
import { Section, SectionHeader, SectionTitle, Article } from '../styledComponent/common_cs';
import { Div, Td, Input, Btn, CheckTd } from '../styledComponent/join_cs';

const Join = () => {
  return (
    <Section>
        <SectionHeader>
            <SectionTitle> Join </SectionTitle>
        </SectionHeader>
        <Article>
            <Div>

                <table>
                    <tr>
                        <Td>아이디</Td>
                        <Td><Input/></Td>
                        <Td><Btn>중복확인</Btn></Td>
                    </tr>
                    <tr></tr>

                    <tr>
                        <Td>닉네임</Td>
                        <Td><Input/></Td>
                        <Td><Btn>중복확인</Btn></Td>
                    </tr>
                    <tr><CheckTd colSpan="3"></CheckTd></tr>

                    <tr>
                        <Td>비밀번호</Td>
                        <Td><Input type="password"/></Td>
                        <Td></Td>
                    </tr>
                    <tr><CheckTd colSpan="3"></CheckTd></tr>

                    <tr>
                        <Td>비밀번호 확인</Td>
                        <Td><Input type="password"/></Td>
                        <Td colSpan="3"></Td>
                    </tr>
                    <tr><CheckTd colSpan="3"></CheckTd></tr>

                </table>

                <Btn>회원가입</Btn>
            </Div>
        </Article>
    </Section>
  )
}

export default Join