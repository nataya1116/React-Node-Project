import React, { useState , useRef } from "react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  Article,
} from "../styledComponent/common_cs";
import { Div, Tr, Input, Btn, CheckTd } from "../styledComponent/join_cs";

import { overlapUserId } from "../api/user";

const Join = () => {

  const userInputs = {
    userId: useRef(),
    userNickname: useRef(),
    userEmail: useRef(),
    userPw: useRef(),
    userPwCheck: useRef(),
  }

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
    userPw: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/g,
  };

  const checkMsg = {
    userId: "소문자 또는 숫자로 4~8자리입니다.",
    userNickname: "특수문자를 제외한 2~5자리입니다.",
    userEmail: "이메일을 확인해주세요.",
    userPw: "대소문자와 숫자, 특수문자 포함 8~20자리입니다.",
    userPwCheck: "비밀번호가 일치하지 않습니다.",
  };

  const onChangeHandler = (e) => {
    const { name } = e.target;
    if(name !== "userPwCheck"){
      regCheck(name);
    }else{
      pwDoubleCheck();
    }
    
  };

  const regTest = (name) => {
    return regs[name].test(userInputs[name].current.value);
  };

  const regCheck = (name) => {
    const isCorrect = regTest(name);
    isCorrect
      ? setUserChecks({ ...userChecks, [name]: "" })
      : setUserChecks({ ...userChecks, [name]: checkMsg[name] });

    return isCorrect;
  };

  const pwDoubleCheck = () => {
    const userPw = userInputs.userPw.current.value;
    const userPwCheck = userInputs.userPwCheck.current.value;

    const isCorrect = userPw === userPwCheck ? true : false;
    
    const msg = isCorrect ? "" : checkMsg.userPwCheck;

    setUserChecks({ ...userChecks, userPwCheck: msg });

    return isCorrect;
  };

  const joinUser = () => {
    const validate = Object.keys(userInputs).every((key)=>{
      if(key !== "userPwCheck"){
        return regCheck(key);
      }else{
        return pwDoubleCheck();
      }
    });

    if(validate){
      alert("회원가입 만들 예정");
    }else{
      alert("값을 확인해 주세요.");
    }
  }

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
                  ref={userInputs.userId}
                  name="userId"
                  onChange={onChangeHandler}
                />
              </td>
              <td>
                <Btn onClick={async ()=>{
                  const data = await overlapUserId(userInputs.userId.current.value);
                  console.log(data);
                  // const tmp = overlapUserId(userInputs.userId.current.value);
                  // console.log(tmp);
                //   if(overlapUserId(userInputs.userId.current.value) === "OVERLAP"){
                //   alert("중복이다");
                // }else{
                //   alert("사용가능한 아이디");
                // }
                }}>중복확인</Btn>
              </td>
            </Tr>
            <Tr>
              <CheckTd colSpan="3">{userChecks.userId}</CheckTd>
            </Tr>

            <Tr>
              <td>닉네임</td>
              <td>
                <Input
                  ref={userInputs.userNickname}
                  name="userNickname"
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
                  ref={userInputs.userEmail}
                  name="userEmail"
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
                  ref={userInputs.userPw}
                  name="userPw"
                  // type="password"
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
                  ref={userInputs.userPwCheck}
                  name="userPwCheck"
                  type="password"
                  onChange={onChangeHandler}
                />
              </td>
              <td colSpan="3"></td>
            </Tr>
            <Tr>
              <CheckTd colSpan="3">{userChecks.userPwCheck}</CheckTd>
            </Tr>
          </table>

          <Btn onClick={joinUser}>회원가입</Btn>
        </Div>
      </Article>
    </Section>
  );
};

export default Join;
