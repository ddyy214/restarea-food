import { useState } from "react";
import React from "react";
import axios from 'axios';
import styled from 'styled-components';

const FormStyle = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 100px;
  width: 670px;
  height: auto;
  background: #FFFFFF;
  border: 1px solid #ffffff;
  box-shadow: 7px 7px 39px rgb(0 0 0 / 25%);
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  
`;

const Title = styled.h2`
  width: 200px;
  height: 134px;
  font-size: 60px;
  font-weight: bold;
  line-height: 33px;
  color: #6e6e6e;
  white-space: nowrap; /* 텍스트가 한 줄에 들어오도록 설정 */
  margin-left: -50px;
`;

const CustomButton = styled.button`
  width: 130px;
  height: 50px;
  background-color: #FFFFFF;
  color: #88898c;
  border-radius: 13px;
  border: #bebebe solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 150px;
`;
const CustomInput = styled.input`
  padding: 0px;
  border: none;
  border-bottom: 1px solid #CFCFCF;
  width: 466px;
  height: 30px;
`;

const CustomLabel = styled.label`
  color: grey;
`;

const Message = styled.p`
  margin: 10px;
  font-weight: 300;
  font-size: 8px;
  line-height: 24px;
  color: #f8975a;
`;

const SignUpPage = (props) => {

  const [formData, setFormData] = useState({
    user_email: '', 
    nickname: '',
    password: '',
    passwordConfirm: '',
    birth: '',
  });

  const [userEmail, setUserEmail] = React.useState(""); // 수정
  const [nickName, setNickName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [birth, setBirth] = React.useState("");

  const [userEmailMessage, setUserEmailMessage] = React.useState("");
  const [nickNameMessage, setNickNameMessage] = React.useState("");
  const [passwordMessage, setPasswordMessage] = React.useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = React.useState("");
  const [birthMessage, setBirthMessage] = React.useState("");

  const [isUserEmail, setIsUserEmail] = React.useState(false);
  const [isNickName, setIsNickName] = React.useState(false);
  const [isPassword, setIsPassword] = React.useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = React.useState(false);
  const [isBirth, setIsBirth] = React.useState(false);

  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setUserEmail(currentEmail);
    const emailRegExp = /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;

    if (!emailRegExp.test(currentEmail)) {
      setUserEmailMessage("이메일의 형식이 올바르지 않습니다.");
      setIsUserEmail(false);
    } else {
      setUserEmailMessage("사용 가능한 이메일 입니다.");
      setIsUserEmail(true);
    }
  };

  const onChangeName = (e) => {
    const currentName = e.target.value;
    setNickName(currentName);

    if (currentName.length < 2 || currentName.length > 5) {
      setNickNameMessage("닉네임은 2글자 이상 5글자 이하로 입력해주세요!");
      setIsNickName(false);
    } else {
      setNickNameMessage("사용가능한 닉네임 입니다.");
      setIsNickName(true);
    }
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호 입니다.");
      setIsPassword(true);
    }
  };

  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage("비밀번호가 일치하지 않습니다");
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage("비밀번호가 일치합니다.");
      setIsPasswordConfirm(true);
    }
  };

  const onChangeBirth = (e) => {
    const currentBirth = e.target.value;
    setBirth(currentBirth);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 클라이언트에서 서버로 POST 요청을 보냅니다.
    axios
      .post('http://localhost:5000/signup', {
        user_email: userEmail, 
        nickname: nickName,
        password: password,
        passwordConfirm: passwordConfirm,
        birth: birth,
      })
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.message);
        } else {
          console.error(response.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <FormStyle>
        <Title>Sign Up</Title>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <div className="form-el">
              <CustomLabel htmlFor="userEmail">Email</CustomLabel> <br />
              <CustomInput id="userEmail" name="userEmail" value={userEmail} onChange={onChangeEmail} />
              <Message>{userEmailMessage}</Message>
            </div>

            <div className="form-el">
              <CustomLabel htmlFor="nickName">Nick Name</CustomLabel> <br />
              <CustomInput id="nickName" name="nickName" value={nickName} onChange={onChangeName} />
              <Message>{nickNameMessage}</Message>
            </div>

            <div className="form-el">
              <CustomLabel htmlFor="password">Password</CustomLabel> <br />
              <CustomInput id="password" name="password" value={password} onChange={onChangePassword} />
              <Message>{passwordMessage}</Message>
            </div>

            <div className="form-el">
              <CustomLabel htmlFor="passwordConfirm">Password Confirm</CustomLabel> <br />
              <CustomInput id="passwordConfirm" name="passwordConfirm" value={passwordConfirm} onChange={onChangePasswordConfirm} />
              <Message>{passwordConfirmMessage}</Message>
            </div>

            <div className="form-el">
              <CustomLabel htmlFor="birth">Birth</CustomLabel> <br />
              <CustomInput id="birth" name="birth" value={birth} onChange={onChangeBirth} />
              <Message>{birthMessage}</Message>
            </div>

            <br />
            <br />
            <CustomButton type="submit">Submit</CustomButton>
          </div>
        </form>
      </FormStyle>
    </>
  );
};

export default SignUpPage;