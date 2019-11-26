import React, { useState } from 'react';

// 注意事项：
//    1. 不可以局部更新(不同于class组件中的setState)
//    2. 地址要变:
//        React使用Object.is比较算法来比较state,如果State Hook的更新函数传入的值的地址与当前值的地址相同
//        组件不会`render`
//    3.
const UseState = () => {
  const [user, setUser] = useState({
    name: 'Mick',
    age: 12,
  });
  console.log('user', user);
  const onClickToUpdateName = () => {
    // user.name = 'Jack';
    // setUser(user) // 当setUser中的内容没有发生变化时不会触发render
    setUser({
      ...user,
      name: 'Jack',
    });
  };
  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <button onClick={onClickToUpdateName}>update name</button>
    </div>
  );
};

export default UseState;
