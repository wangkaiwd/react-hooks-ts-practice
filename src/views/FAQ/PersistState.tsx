import React, { useRef, useState } from 'react';
import { Button } from 'antd';
// stale props and state
const PersistState = () => {
  const [count, setCount] = useState(0);
  const [, update] = useState();
  const countRef = useRef(0);
  const onAddCount = () => {
    // setCount(count + 1);
    ++countRef.current;
    update({});
  };
  const onShowCount = () => {
    setTimeout(() => {
      // 这样打印的内容会从执行onShowCount函数中的执行上下文中进行查找，
      // 找到的count是当时的count
      // 当setCount时会重新执行PersisState,会重新创建新的执行上下文，各个执行上下文之间不会相互影响，都有各自的作用域和作用域链
      console.log('count', count);
      console.log('persist state', countRef.current);
    }, 1000);
  };
  return (
    <div className="persist">
      <Button onClick={onAddCount}>count++</Button>
      <Button onClick={onShowCount}>
        show count
      </Button>
      <h2>state:{count}</h2>
      <h2>ref:{countRef.current}</h2>
    </div>
  );
};

export default PersistState;

// 这个例子涉及到的3个知识点：
//  1. stale props and state
//  2. something like instance variables
//  3. implement a force update custom hook

// const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
