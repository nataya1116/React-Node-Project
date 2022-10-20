import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserService } from '../service';
import { Section, SectionHeader, SectionTitle, Article } from '../styledComponent/common_cs';
import { Div, Tr, Input } from '../styledComponent/join_cs';
import { Btn, LoginLink, FindDiv, FindLink } from '../styledComponent/login_cs';

const Login = () => {

    const nav = useNavigate();

    const userInputs = {
      id: useRef(),
      pw: useRef()
    }

    const loginUser = async () => {
        const id = userInputs.id.current.value;
        const pw = userInputs.pw.current.value;
        const result = await UserService.loginUser(id, pw);
        if(result) nav("/");
    }

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
                        <td><Input 
                                ref={userInputs.id}
                            /></td>
                    </Tr>
                    <Tr>
                        <td>비밀번호</td>
                        <td><Input 
                                type="password"
                                ref={userInputs.pw}
                            /></td>
                    </Tr>
                </table>

                <Btn 
                    onClick={loginUser}
                >로그인</Btn>

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