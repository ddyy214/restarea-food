import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import HomePage from "./page/HomePage";
import MyPage from './page/MyPage';
import BoardPage from './page/BoardPage';
import SignUpPage from "./page/SignUpPage";
import './css/style.css';
import './css/responsive.css';
import LoginModal from './page/LoginModal';
import Page1 from './page/Page1';
import Page2 from './page/Page2';
import Page3 from './page/Page3';
import Page4 from './page/Page4';
import { AuthContextProvider } from './context/AuthContext';

function App() {

  return (
    <>
      <div style={{ height: "100vh" }}>
        <AuthContextProvider>
          <Routes>
            <Route path="/" exact={true} element={<HomePage />} />
            <Route path="/login" exact={true} element={<LoginModal />} />
            <Route path="/mypage" exact={true} element={<MyPage />} />
            <Route path="/boardpage" exact={true} element={<BoardPage />} />
            <Route path="/signup" exact={true} element={<SignUpPage />} />
            <Route path="/page1" exact={true} element={<Page1 />} />
            <Route path="/page2" exact={true} element={<Page2 />} />
            <Route path="/page3" exact={true} element={<Page3 />} />
            <Route path="/page4" exact={true} element={<Page4 />} />
          </Routes>
        </AuthContextProvider>
      </div>
    </>
  );
}

export default App;
