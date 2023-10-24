import React, { useState } from 'react';
import styled from 'styled-components';
import { GoogleButton } from 'react-google-button';
import { UserAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SERVER_URL = 'http://localhost:5000/user/login';

const inputStyles = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  fontSize: '14px',
};

const buttonStyles = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  marginBottom: '10px',
};

const separatorStyles = {
  borderTop: '1px solid #ccc',
  margin: '10px 0',
  width: '100%',
};

const LoginContainer = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const CenteredButton = styled.button`
  ${buttonStyles}
  margin: 0 auto;
  display: block;
  width: calc(100% - 20px);
`;

const Separator = styled.div`
  ${separatorStyles}
`;

const SignUpLink = styled.a`
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
`;

const ForgotPasswordLink = styled.a`
  color: #007bff;
  text-decoration: underline;
  cursor: pointer;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: space between;
  align-items: center;
`;

export default function LoginModal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);

  const { googleSignIn } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  const handleForgotPasswordClick = () => {
    // Implement the forgot password functionality here
  };

  const Login = async () => {
    axios({
      url: SERVER_URL,
      method: "POST",
      withCredentials: true,
      data: {
        user_email: email, // 컬럼명을 user_email로 수정
        pw: password,       // 컬럼명을 pw로 수정
      }
    }).then(result => {
      if (result.status === 200) {
        setIsLogin(true);
      } else {
        // 에러 처리 로직
        console.error("오류가 발생했습니다");
      }
    });
  }



  return (
    <LoginContainer className="modal-container">
      <form>
        <h1>Login</h1>
        <div className="inputGroup">
          <label htmlFor="user_email">User Email:</label>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyles}
            placeholder="email"
            value={email}
            className="inputValue"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyles}
            placeholder="password"
            value={password}
            className="inputValue"
          />
        </div>
        <CenteredButton onClick={Login}>Sign in</CenteredButton>
        <br />
        <Separator />
        <ActionContainer>
          <ForgotPasswordLink onClick={handleForgotPasswordClick}>
            비밀번호 찾기
          </ForgotPasswordLink>
          <SignUpLink as={Link} to="/signup">
            회원가입
          </SignUpLink>
        </ActionContainer>
        <GoogleButton onClick={handleGoogleSignIn} />
      </form>
    </LoginContainer>
  );
}
