import React, { useState } from 'react';

// 注意事项：
//    1. 不可以局部更新(不同于class组件中的setState)
//    2. 地址要变:
//        React使用Object.is比较算法来比较state,如果State Hook的更新函数传入的值的地址与当前值的地址相同
//        组件不会`render`
//    3. useState接受函数：函数中的内容只会在组件首次渲染时执行
//    4. setState接受函数: 新的state值依赖于前一个state值
const UseState = () => {
  const [user, setUser] = useState({
    name: 'Mick',
    age: 12,
  });
  const [n, setN] = useState(0);
  // console.log('user', user);
  const onClickToUpdateName = () => {
    // user.name = 'Jack';
    // setUser(user) // 当setUser中的内容没有发生变化时不会触发render
    setUser({
      ...user,
      name: 'Jack',
    });
  };
  const onClickToUpdateN = () => {
    // setN(n + 1);
    // setN(n + 2); // 当前执行函数只会有一个n,并且这个n并不会发生改变
    // setN(n + 1); // 只有最后一次更新会生效
    setN(n => n + 1);
    setN(n => n + 1);
  };
  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <button onClick={onClickToUpdateName}>update name</button>
      <br/>
      <h3>n:{n}</h3>
      <button onClick={onClickToUpdateN}>update n+2</button>
    </div>
  );
};

export default UseState;
