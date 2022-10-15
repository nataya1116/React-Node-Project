import React from 'react'
import { Section, SectionHeader, SectionTitle, Article } from '../styledComponent/common_cs';
import { Div, Tr, Input } from '../styledComponent/join_cs';
import { Btn, LoginLink, FindDiv, FindLink } from '../styledComponent/login_cs';

const Login = () => {
  return (
    <Section>
        <SectionHeader>
            <SectionTitle> Login </SectionTitle>
        </SectionHeader>
        <Article>
            <Div>

                <table>
                    <Tr>
                        <td>아이디</td>
                        <td><Input/></td>
                    </Tr>
                    <Tr>
                        <td>비밀번호</td>
                        <td><Input type="password"/></td>
                    </Tr>
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