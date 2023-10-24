import React, { useState } from 'react';
import styled from 'styled-components';
import SubHeader from '../components/SubHeader';
import Comment from '../components/Comment';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 24px;
`;

const Title = styled.h2`
  font-weight: bold;
  text-align: center;
  font-size: 33px;
  margin-top: 50px;
`;

export default function Page1() {
  const [list, setList] = useState([
    { userid: 'jenny1', content: '안녕하세요1', date: '2022-04-21', updateFlag: true },
  ]);

  const addList = (obj) => {
    setList([...list, obj]);
  };

  const updateList = (updatedList) => {
    setList(updatedList);
  };

  return (
    <>
      <SubHeader />
      <PageContainer>
        <Title>가평(서울방향)</Title>
        <StyledImage
          src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2F7IsrZ%2FbtsrCnHcO65%2FplPVfwzAahI6AkukmKQlkK%2Fimg.png"
          alt="Sample"
        />
        <Comment value={list}>
          <CommentForm addList={addList} />
          <CommentList list={list} updateList={updateList} />
        </Comment>
      </PageContainer>
    </>
  );
}