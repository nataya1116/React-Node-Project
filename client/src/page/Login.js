import React from 'react'
import { Section, SectionHeader, SectionTitle, Article } from '../styledComponent/common_cs';
import { Div, Td, Input } from '../styledComponent/join_cs';
import { Btn, LoginLink, FindDiv, FindLink } from '../styledComponent/login_cs';

const Login = () => {
  return (
    <Section>
        <SectionHeader>
            <SectionTitle> Memory </SectionTitle>
            <SectionTitle> Game </SectionTitle>
        </SectionHeader>
        <Article>
            <Div>

                <table>
                    <tr>
                        <Td>아이디</Td>
                        <Td><Input/></Td>
                    </tr>
                    <tr>
                        <Td>비밀번호</Td>
                        <Td><Input type="password"/></Td>
                    </tr>
                </table>

                <Btn>로그인</Btn>

                <LoginLink to="/join">회원가입</LoginLink>

                <FindDiv>
                    <FindLink to="/find_id">아이디 찾기</FindLink> / 
                    <FindLink to="/find_pw">비밀번호 찾기</FindLink>
                </FindDiv>

            </Div>
        </Article>
    </Section>
  )
}

export default Login