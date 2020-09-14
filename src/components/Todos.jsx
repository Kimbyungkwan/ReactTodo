import React from "react";
import $ from "styled-components";

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
    color: white
`;

export default function Todos() {
  return (
    <$Todos>
      <$TodoTitle>To Do List</$TodoTitle>
      <$TodoForm>
        <$TodoInput />
        <$TodoBtn>등록</$TodoBtn>
      </$TodoForm>
      <hr />
      <TodoList />
    </$Todos>
  );
}

const TodoList = ({ todos }) => {
  return <ul>{todos}</ul>;
};
const Todo = ({ todo }) => {
  return <li>{todo}</li>;
};
