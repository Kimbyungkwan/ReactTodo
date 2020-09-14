// 액션 타입 선언
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";

// 액션 생성 함수
let nextId = 1;

export const addTodo = text => ({
  type: ADD_TODO,
  todo: {
    id: nextId++, //새 항목을 추가하고 nextId를 증감
    text,
  },
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id,
});

// 초기 state
const initialState = [
  // state 구성
  /*
    {
        id:nextId,
        text:text,
        done:false
    }
  */
];

// reducer

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      if (nextId) return [...state, action.todo];
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}
