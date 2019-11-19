import React from 'react';
import App from '@/App';
import ReactDOM from 'react-dom';
// @see: https://stackoverflow.com/a/45576880/11720536
// 这里的返回值要使用元祖tuple来进行定义
let _state: any;
const myUseState = <T extends unknown> (initialValue: T): [T, (newValue: T) => void] => {
  let n = typeof _state === 'undefined' ? initialValue : _state;
  const setN = (newValue: T): void => {
    n = newValue;
    _state = newValue;
    ReactDOM.render(<App/>, document.getElementById('root'));
  };
  return [n, setN];
};
const Counter = () => {
  // setN会重新渲染Counter,然后会重新执行myUseState
  const [n, setN] = myUseState(0);
  console.log('component', n);
  return (
    <div>
      {n}
      <button onClick={() => setN(n + 1)}>click</button>
    </div>
  );
};

export default Counter;
