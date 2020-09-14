해당 깃은 redux, styled-components를 연습하기 위해 생성한 곳입니다.

# redux

## 액션 action

-액션은 상태에 어떠한 변화가 필요할 때 액션을 발생시킨다.  
-하나의 객체로 표현할 수 있음

```javascript
{
  type: "TOGGLE_VALUE";
}
```

-액션 객체는 **type을 필수**로 가지고 있어야함  
-그 외의 값들은 개발자가 마음대로 넣어줄 수 있다

```javascript
{
    type:"TOGGLE_VALUE",
    data:{
        id:0,
        text:"redux"
    }
}

```

## 액션 생성함수

**필수는 아니며 액션을 발생시킬때 직접 작성 가능하다.**  
-액션을 만드는 함수,단순히 인자를 받아와서 액션객체로 만들어 줌

```javascript
export function addTodo(data) {
  return {
    type: "ADD_TODO",
    data,
  };
}
export function changeInput(text) {
  return {
    type: "CHANGE_INPUT",
    text,
  };
}
```

-액션 함수를 만드는 이유는 컴포넌트에서 쉽게 사용하기 위해서임  
 그래서 export를 통해 다른 파일에 불러와 사용

## 리듀서 reducer

-변화를 일으키는 함수,두 가지의 인자를 받음

```javascript
function reducer(state, action) {
  //상태로직 업데이트
  return alteredState;
}
```

-리듀서는 현재의 상태와 전달받은 액션을 참고하여 새로운 state 생성반환  
useReducer와 비슷한 형태를 가짐

```javascript
function reducer(state = defaultState, action) {
  //상태로직 업데이트
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }

  return alteredState;
}
```

-여러개의 리듀서를 만들고 하나의 루트리듀서로 생성가능하다.  
(루트리듀서 안의 작은 리듀서들을 서브리듀서라고 부른다.)
