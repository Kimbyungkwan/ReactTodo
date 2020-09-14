import React, { useState } from "react";
import $ from "styled-components";

export default function Todos({ todo, onCreate, onToggle }) {
  const [text, setText] = useState("");
  const onSubmit = e => {
    e.preventDefault();
    setText("");
  };
  const onChange = e => {
    setText(e.target.value);
    console.log(e.target.value);
  };
  return (
    <$Todos>
      <$TodoTitle>To Do List</$TodoTitle>
      <$TodoForm onSubmit={onSubmit}>
        <$TodoInput onChange={onChange} />
        <$TodoBtn type="submit">등록</$TodoBtn>
      </$TodoForm>
      <hr />
      <TodoList />
    </$Todos>
  );
}

const TodoList = ({ todos }) => {
  return (
    <$TodoUl>
      <Todo />
    </$TodoUl>
  );
};
const Todo = ({ todo }) => {
  return (
    <$TodoLi>
      <span>할 일</span>
      <input type="checkbox"></input>
    </$TodoLi>
  );
};
const $TodoLi = $.li`
display: flex;
justify-content: space-between;
align-items:center;
background-color:#b48484;
padding:5px 10px;
color:white;
border-bottom:1px solid grey;
margin:0;
border-radius:5px;
`;
const $Todos = $.div`
  width: 500px;
  height: 750px;
  border:1px solid #b48484;
  padding: 10px;
  border-radius:5px ;
  background-color:white;
`;

const $TodoTitle = $.h1`
 color:#b48484;
`;
const $TodoForm = $.form`
    width:100%;
    display:flex;
    margin-bottom:20px;
`;
const $TodoInput = $.input`
    width:80%;
    padding:5px 10px;
    border:1px solid #b48484;
    border-radius:5px 0 0 5px ;
    &:focus {outline:none;}
`;
const $TodoBtn = $.button`
    width:20%;
    padding:5px 10px;
    background-color:#b48484;
    border:none;
    border-radius:0 5px 5px 0;
    outline:none;
    color: white;
    font-weight:100;

`;

const $TodoUl = $.ul`
    list-style: none;
    padding:0;
`;
