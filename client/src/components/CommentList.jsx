import React, { Component } from 'react';
import styled from 'styled-components';

const ListContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    width: 120%;
    margin-left: -80px;
`;

const ListItem = styled.li`
  display: flow;
  justify-content: space-between;
  margin-top: -20px;
  width: 100%;
`;

const CommentId = styled.li`
  /* Add your .comment-id styles here */
`;

const CommentContent = styled.li`
    flex-grow: 1;
    padding-left: 5px;
`;

const CommentUpdateInput = styled.input`
    border: none;
    border-bottom: 1px solid #333;
    font-size: 16px;
    color: #666;
    outline: none;
`;

const CommentDeleteButton = styled.span`
    width: 80px;
`;

class CommentList extends Component {
  state = {
    value: '',
    update: null
  };

  input = React.createRef();

  handleClick = (i) => (e) => {
    this.setState({
      value: e.target.innerHTML,
      update: i
    });
  };

  updateChange = (e) => {
    const { value } = e.target;
    this.setState({
      value
    });
  };

  updateKeyDown = (i) => (e) => {
    if (e.key !== 'Enter') return;
    const { updateList, list } = this.props;
    const newList = [...list];
    newList[i].content = this.state.value;
    this.setState({
      update: null
    });
    updateList(newList);
  };

  deleteClick = (k) => {
    const { updateList, list } = this.props;
    const newList = [...list].filter((v, i) => i !== k);
    updateList(newList);
  };

  items = () =>
    this.props.list.map((v, k) => (
      <ListContainer className='comment-row' key={k}>
        <CommentId className='comment-id'>{v.userid}</CommentId>
       <CommentContent className='comment-content'>
  {this.state.update === k ? (
    <CommentUpdateInput
      type='text'
      className='comment-update-input'
      onChange={this.updateChange}
      onKeyDown={this.updateKeyDown(k)}
      value={this.state.value}
      ref={this.input}
    />
  ) : (
    <div>
      <span onClick={this.handleClick(k)}>{v.content}</span>
      <div>
        <button onClick={this.handleClickEdit}>수정</button>
        <CommentDeleteButton
          className='comment-delete-btn'
          onClick={() => this.deleteClick(k)}
        >
          삭제
        </CommentDeleteButton>
      </div>
    </div>
  )}
</CommentContent>
        <li className='comment-date'>{v.date}</li>
      </ListContainer>
    ));

  render() {
    return <ListItem>{this.items()}</ListItem>;
  }
}

export default CommentList;