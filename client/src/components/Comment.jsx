import React, { Component } from 'react';
import styled from 'styled-components';

const CommentContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px;
  width: 500px;
  margin: 1px;
`;

class Comment extends Component {
  render() {
    return <CommentContainer>{this.props.children}</CommentContainer>;
  }
}

export default Comment;