import React, { useState , useRef} from "react";
import {
  Section,
  SectionHeader,
  SectionTitle,
  Article,
} from "../styledComponent/common_cs";
import { Div, Tr, Input, Btn, CheckTd } from "../styledComponent/join_cs";

// import { overlapId } from "../api/user";
import { UserService } from "../service";
import { useNavigate } from 'react-router-dom';

const Join = () => {

  const nav = useNavigate();

  const userInputs = {
    id: useRef(),
    nickname: useRef(),
    email: useRef(),
    pw: useRef(),
    pwCheck: useRef(),
  }

  const [userChecks, setUserChecks] = useState({
    id: "",
    nickname: "",
    email: "",
    pw: "",
    pwCheck: "",
  });

  const [userIsOverlaps, setUserIsOverlaps] = useState({
    id: false,
    nickname: false,
    email: false,
  });

  const regs = {
    id: /^[a-z0-9]{4,8}$/g,
    nickname: /^[가-힝|a-zA-Z0-9]{2,8}$/g,
    email:
      /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/g,
    pw: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,20}$/g,
  };

  const checkMsg = {
    id: "소문자 또는 숫자로 4~8자리입니다.",
    nickname: "특수문자를 제외한 2~8자리입니다.",
    email: "이메일을 확인해주세요.",
    pw: "대소문자와 숫자, 특수문자 포함 8~20자리입니다.",
    pwCheck: "비밀번호가 일치하지 않습니다.",
  };

  const overlapMsg = {
    id: "아이디를 중복체크해주세요.",
    nickname: "닉네임을 중복체크해주세요.",
    email: "이메일을 중복체크해주세요.",
  }

  const onChangeHandler = (e) => {
    const { name } = e.target;
    
    if(name === "pwCheck"){
      pwDoubleCheck();
    }else{
      regCheck(name);
    }
  };

  const regTest = (name) => {
    return regs[name].test(userInputs[name].current.value);
  };

  const regCheck = (name) => {
    const isCorrect = regTest(name);
    let msg = isCorrect ? "" : checkMsg[name];

    if(userIsOverlaps[name] !== undefined && !userIsOverlaps[name] && !msg ){
      msg = overlapMsg[name];
    }

    setUserChecks({ ...userChecks, [name]:msg });

    return isCorrect;
  };

  const pwDoubleCheck = () => {
    const pw = userInputs.pw.current.value;
    const pwCheck = userInputs.pwCheck.current.value;

    const isCorrect = pw === pwCheck ? true : false;
    
    const msg = isCorrect ? "" : checkMsg.pwCheck;

    setUserChecks({ ...userChecks, pwCheck: msg });

    return isCorrect;
  };

  const join = async () => {
    const validate = Object.keys(userInputs).every((key)=>{
      if(key === "pwCheck"){
        return pwDoubleCheck();
      }else{
        return regCheck(key);
      }
    });
    
    console.log("1")
    const isOverlap = Object.keys(userIsOverlaps).every((key)=>{

      return userIsOverlaps[key]});

    if(!validate) {
      alert("값을 확인해 주세요.");
      return;
    }

    if(!isOverlap) {
      alert("중복 체크를 해주세요.");
      return;
    }
    
    const result = await UserService.join({
      id: userInputs.id.current.value,
      nickname: userInputs.nickname.current.value,
      email: userInputs.email.current.value,
      pw: userInputs.pw.current.value
    });

    if(result) nav("/login");

  }

  const overLapCheck = async (e) => {

    const name = e.target.name;
    const check = userChecks[name];

    if(check !== overlapMsg[name]) return;

    const value = userInputs[name]?.current?.value;

    let result;
    switch (name) {
      case "id":
        result = await UserService.overlapId(value);
        break;
      
      case "nickname":
        result = await UserService.overlapNickname(value);
        break;

      case "email":
        result = await UserService.overlapEmail(value);
        break;

      default:
        break;
    }
    

    if(result) userChecks[name] = "";

    userInputs[name].current.disabled = result;
    e.target.disabled = result;

    setUserIsOverlaps({ ...userIsOverlaps, [name]: result });
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
                  ref={userInputs.id}
                  name="id"
                  onChange={onChangeHandler}
                />
              </td>
              <td>
                <Btn 
                  name="id" 
                  onClick={overLapCheck}
                >중복확인</Btn>
              </td>
            </Tr>
            <Tr>
              <CheckTd colSpan="3">{userChecks.id}</CheckTd>
            </Tr>

            <Tr>
              <td>닉네임</td>
              <td>
                <Input
                  ref={userInputs.nickname}
                  name="nickname"
                  onChange={onChangeHandler}
                />
              </td>
              <td>
                <Btn  
                  name="nickname" 
                  onClick={overLapCheck}
                  >중복확인</Btn>
              </td>
            </Tr>
            <Tr>
              <CheckTd colSpan="3">{userChecks.nickname}</CheckTd>
            </Tr>

            <Tr>
              <td>이메일</td>
              <td>
                <Input
                  ref={userInputs.email}
                  name="email"
                  onChange={onChangeHandler}
                />
              </td>
              <td>
                <Btn  
                  name="email" 
                  onClick={overLapCheck}
                  >중복확인</Btn>
              </td>
            </Tr>
            <Tr>
              <CheckTd colSpan="3">{userChecks.email}</CheckTd>
            </Tr>

            <Tr>
              <td>비밀번호</td>
              <td>
                <Input
                  ref={userInputs.pw}
                  name="pw"
                  type="password"
                  onChange={onChangeHandler}
                />
              </td>
              <td></td>
            </Tr>
            <Tr>
              <CheckTd colSpan="3">{userChecks.pw}</CheckTd>
            </Tr>

            <Tr>
              <td>비밀번호 확인</td>
              <td>
                <Input
                  ref={userInputs.pwCheck}
                  name="pwCheck"
                  type="password"
                  onChange={onChangeHandler}
                />
              </td>
              <td colSpan="3"></td>
            </Tr>
            <Tr>
              <CheckTd colSpan="3">{userChecks.pwCheck}</CheckTd>
            </Tr>
          </table>

          <Btn onClick={join}>회원가입</Btn>
        </Div>
      </Article>
    </Section>
  );
};

export default Join;
