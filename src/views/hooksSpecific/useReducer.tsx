import React, { useReducer } from 'react';
// 1. 当useState中的state逻辑比较复杂的时候，使用useReducer是一个更可取的方法
// 2. 工作流类似于Redux

interface State {
  n: number;
}
type Action = { type: 'add', value: number } | { type: 'subtract', value: number }
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'add':
      return { n: state.n + action.value };
      break;
    case 'subtract':
      return { n: state.n - action.value };
      break;
    default:
      return { ...state };
  }
};
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { n: 0 });
  return (
    <div>
      <h3>n:{state.n}</h3>
      <button onClick={() => dispatch({ type: 'add', value: 2 })}>加2</button>
      <br/>
      <button onClick={() => dispatch({ type: 'subtract', value: 1 })}>减1</button>
    </div>
  );
};

export default UseReducer;
