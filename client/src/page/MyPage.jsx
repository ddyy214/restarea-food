import React, { useState, useEffect } from 'react';
import SubHeader from '../components/SubHeader';
import styled from 'styled-components';

export const MyPageStyles = styled.div`
  background-color: black;
  color: white;
  width: 100%; /* Set the desired width */
  height: 800px; /* Set the desired height */
`;

export const UserInfoStyles = styled.div`
  background-color: #212020;
  border-top: solid rgba(255, 255, 255, 0.5) 1px;
  box-shadow: inset 0 10px 30px -16px #000;
  width: 100%; /* Set the desired width */
  height: 800px;
`;

export default function MyPage() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    // 다른 회원정보 필드들도 추가
  });

  useEffect(() => {
    // 데이터베이스에서 회원정보를 가져오는 로직을 여기에 구현
    // 가상의 데이터로 예시를 보여드리겠습니다.
    const fetchedUserInfo = {
      name: 'John Doe',
      email: 'john@example.com',
      // 다른 회원정보 필드들도 추가할 수 있습니다.
    };

    setUserInfo(fetchedUserInfo);
  }, []); 

  return (
    <MyPageStyles>
      <SubHeader />
      <UserInfoStyles>
        <h2>마이 페이지</h2>
        <h3>회원정보:</h3>
        <p>이름: {userInfo.name}</p>
        <p>이메일: {userInfo.email}</p>
        {/* 다른 회원정보 필드들의 미리보기도 추가할 수 있습니다. */}
      </UserInfoStyles>
    </MyPageStyles>
  );
}
