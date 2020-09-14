import React, { useState } from "react";
import $ from "styled-components";

export default function Todos({ todos, onCreate, onToggle }) {
  const [text, setText] = useState("");
  const onChange = e => {
    if (text.length === 25) return;
    setText(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (!text) return;
    onCreate(text);
    setText("");
  };
  return (
    <$Todos>
      <$TodoTitle>To Do List</$TodoTitle>
      <$TodoForm onSubmit={onSubmit}>
        <$TodoInput
          value={text}
          placeholder="할 일을 입력하세요"
          onChange={onChange}
        />
        <$TodoBtn type="submit">등록</$TodoBtn>
      </$TodoForm>
      <hr />
      <TodoList todos={todos} onToggle={onToggle} />
    </$Todos>
  );
}

const TodoList = React.memo(({ todos, onToggle }) => {
  return (
    <$TodoUl>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </$TodoUl>
  );
});
const TodoItem = React.memo(({ todo, onToggle }) => {
  return (
    <$TodoLi style={{ textDecoration: todo.done ? "line-through" : "none" }}>
      <span>{todo.text}</span>
      <$TodoCheckbox
        type="checkbox"
        onChange={() => onToggle(todo.id)}
      ></$TodoCheckbox>
    </$TodoLi>
  );
});

const $Todos = $.div`
 overflow:auto;
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

const $TodoLi = $.li`
    display: flex;
    justify-content: space-between;
    align-items:center;
    background-color:#b48484;
    padding:5px 10px;
    color:white;
    border-bottom:1px solid grey;
    margin:5px 0;
    border-radius:5px;
`;

const $TodoCheckbox = $.input`
    width: 15px;
    height: 15px;
    border:none;
    cursor:pointer;
`;
