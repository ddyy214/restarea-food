import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SideBarWrap = styled.div`
  z-index: 5;
  padding: 12px;
  border-radius: 0 4px 15px 0; /* Changed border-radius */
  background-color: #222222c4;
  height: 100%;
  width: 20%;
  left: -50%; /* Changed right to left */
  top: 0;
  position: fixed;
  transition: 0.5s ease;
  &.open {
    left: 0; /* Changed right to left */
    transition: 0.3s ease;
  }
`;

const Menu = styled.li`
  margin: 80px 100px;
  font-size: 25px;
  color: #ddd;
  position: relative;
  transition: transform 0.2s ease; 
  overflow: hidden; 
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    z-index: -1;
    transition: width 0.2s ease, background-color 0.2s ease; 
  }

  &:hover {
    transform: scale(1.05); 
    
    &:before {
      width: 100%;
      background-color: yellow; 
    }
  }
`;

function Sidebar({ isOpen }) {
  console.log(isOpen);
  const [isSidebarOpen, setIsSidebarOpen] = useState(isOpen);
  const outside = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', handlerOutsie);
    return () => {
      document.removeEventListener('mousedown', handlerOutsie);
    };
  }, []);

  const handlerOutsie = (e) => {
    if (!outside.current.contains(e.target)) {
      toggleSide();
    }
  };

  const toggleSide = () => {
    setIsSidebarOpen(false);
  };

  return (
    <SideBarWrap id="newSidebar" ref={outside} className={isSidebarOpen ? 'open' : ''}>
      <img
        src="/images/icon.jpg"
        alt="close"
        onClick={toggleSide}
        onKeyDown={toggleSide}
        style={{
          width: '30px', 
          height: '30px',
          filter: 'brightness(0) invert(1)',
        }}
      />
      <ul>
        <Menu>Ranking</Menu>
        <Menu>주변시설</Menu>
        <Menu><Link to="/boardpage">자유게시판</Link></Menu>
        <Menu><Link to="/mypage">마이페이지</Link></Menu>
      </ul>
    </SideBarWrap>
  );
}

export default Sidebar;