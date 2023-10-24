import React, { Component } from 'react';
import styled from 'styled-components';

const FormContainer = styled.li`

`;

const Form = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const InputBox = styled.span`
    display: flex;
    position: relative;
    width: 80%;
    height: 50px;
    border: solid 1px #dadada;
    padding: 10px 14px 10px 20px;
    background: #fff;
    box-sizing: border-box;
`;

const InputField = styled.input`
    display: block;
    position: relative;
    width: 100%;
    height: 29px;
    padding-right: 25px;
    line-height: 29px;
    border: none;
    background: #fff;
    font-size: 15px;
    box-sizing: border-box;
    z-index: 10;
`;

const SubmitButton = styled.input`
    width: 18%;
    padding: 18px 0 16px;
    text-align: center;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
    background: #333;
    color: #fff;
    font-size: 14px;
`;

class CommentForm extends Component {
  state = {
    value: ''
  };

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      userid: 'jenny',
      content: this.state.value,
      date: '2022-04-25',
      updateFlag: true
    };
    this.props.addList(obj);
    this.setState({
      value: ''
    });
  };

  render() {
    return (
      <FormContainer className='comment-form'>
        <Form onSubmit={this.handleSubmit}>
          <InputBox className='ps_box'>
            <InputField
              type='text'
              className='int'
              placeholder='댓글을 입력해 주세요.'
              onChange={this.handleChange}
              value={this.state.value}
            />
          </InputBox>
          <SubmitButton type='submit' className='btn' value='등록' />
        </Form>
      </FormContainer>
    );
  }
}

export default CommentForm;