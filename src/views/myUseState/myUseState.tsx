import React from 'react';
import App from '@/App';
import ReactDOM from 'react-dom';
// @see: https://stackoverflow.com/a/45576880/11720536
// 这里的返回值要使用元祖tuple来进行定义
let _state: any[] = [];
let _index = 0;
const myUseState = <T extends unknown> (initialValue: T): [T, (newValue: T) => void] => {
  const currentIndex = _index;
  let state = typeof _state[currentIndex] === 'undefined' ? initialValue : _state[currentIndex];
  const setState = (newValue: T): void => {
    _state[currentIndex] = newValue;
    ReactDOM.render(<App/>, document.getElementById('root'));
    _index = 0;
  };
  _index++;
  return [state, setState];
};
const Counter = () => {
  // setN会重新渲染Counter,然后会重新执行myUseState
  const [n, setN] = myUseState(0);

  // 要分别区分不同的元素，这里根据索引来放入数组中标记不同的state值，所以hooks的顺序很重要
  const [m, setM] = myUseState(0);
  return (
    <div>
      {n}
      <button onClick={() => setN(n + 1)}>click</button>
      <hr/>
      {m}
      <button onClick={() => setM(m + 1)}>click</button>
    </div>
  );
};

export default Counter;
