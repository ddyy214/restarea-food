import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SubHeaderContainer = styled.div`
    display: flex;
    background-color: black;
    color: white;
    background: #212020;
    margin-top: 0px;
    padding: 0px 12px 3px 6px;
    border-top: solid rgba(255, 255, 255, 0.5) 0px;
    box-shadow: ivory;
    align-items: end;
`;

const MenuItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #333;
  }
`;

export default function SubHeader() {
  return (
    <SubHeaderContainer>
      <Link className="logo" to="/">
        <img src="https://blog.kakaocdn.net/dn/sOyns/btsqj4DwgGb/mKXpq55jDFKNNjxhn6uT30/img.png" alt="Logo" style={{ width: '300px' }} />
      </Link>
      <MenuItem>메뉴 1</MenuItem>
      <MenuItem>메뉴 2</MenuItem>
      <MenuItem>메뉴 3</MenuItem>
      {/* 추가 메뉴 아이템을 원하는 만큼 추가할 수 있습니다 */}
    </SubHeaderContainer>
  );
}
