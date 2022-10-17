import React, { useState } from "react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  Article,
} from "../styledComponent/common_cs";
import { Div, Tr, Input, Btn, CheckTd } from "../styledComponent/join_cs";

const Join = () => {
  const [userInputs, setUserInputs] = useState({
    userId: "",
    userNickname: "",
    userEmail: "",
    userPw: "",
    userPwCheck: "",
  });
  const [userChecks, setUserChecks] = useState({
    userId: "",
    userNickname: "",
    userEmail: "",
    userPw: "",
    userPwCheck: "",
  });

  const regs = {
    userId: /^[a-z0-9]{4,8}$/g,
    userNickname: /^[가-힝|a-zA-Z0-9]{2,5}$/g,
    userEmail:
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/g,
    userPw: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/g,
  };

  const checkMsg = {
    userId: "소문자와 숫자를 포함한 4~8자리입니다.",
    userNickname: "특수문자를 제외한 2~5자리입니다.",
    userEmail: "이메일을 확인해주세요.",
    userPw: "대소문자와 숫자 포함 8~20자리입니다.",
    userPwCheck: "비밀번호가 일치하지 않습니다.",
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    userInputs[name] = value;
    console.log(userInputs[name]);
    setUserInputs({ ...userInputs });
    console.log(userInputs);

    regCheck(name);
  };

  const regTest = (name) => {
    return regs[name].test(userInputs[name]);
  };

  const regCheck = (name) => {
    const isCorrect = regTest(name);
    isCorrect
      ? setUserChecks({ ...userChecks, [name]: "" })
      : setUserChecks({ ...userChecks, [name]: checkMsg[name] });

    return isCorrect
  };
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
              <td>
                <Input
                  name="userId"
                  value={userInputs.userId}
                  onChange={onChangeHandler}
                />
              </td>
              <td>
                <Btn>중복확인</Btn>
              </td>
            </Tr>
            <Tr>
              <CheckTd colSpan="3">{userChecks.userId}</CheckTd>
            </Tr>

            <Tr>
              <td>닉네임</td>
              <td>
                <Input
                  name="userNickname"
                  value={userInputs.userNickname}
                  onChange={onChangeHandler}
                />
              </td>
              <td>
                <Btn>중복확인</Btn>
              </td>
            </Tr>
            <Tr>
              <CheckTd colSpan="3">{userChecks.userNickname}</CheckTd>
            </Tr>

            <Tr>
              <td>이메일</td>
              <td>
                <Input
                  name="userEmail"
                  value={userInputs.userEmail}
                  onChange={onChangeHandler}
                />
              </td>
              <td>
                <Btn>메일인증</Btn>
              </td>
            </Tr>
            <Tr>
              <CheckTd colSpan="3">{userChecks.userEmail}</CheckTd>
            </Tr>

            <Tr>
              <td>비밀번호</td>
              <td>
                <Input
                  name="userPw"
                  value={userInputs.userPw}
                  type="password"
                  onChange={onChangeHandler}
                />
              </td>
              <td></td>
            </Tr>
            <Tr>
              <CheckTd colSpan="3">{userChecks.userPw}</CheckTd>
            </Tr>

            <Tr>
              <td>비밀번호 확인</td>
              <td>
                <Input
                  name="userPwCheck"
                  value={userInputs.userPwCheck}
                  type="password"
                />
              </td>
              <td colSpan="3"></td>
            </Tr>
            <Tr>
              <CheckTd colSpan="3">{userChecks.userPwCheck}</CheckTd>
            </Tr>
          </table>

          <Btn>회원가입</Btn>
        </Div>
      </Article>
    </Section>
  );
};

export default Join;
