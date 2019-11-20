import React, { useRef, useState } from 'react';

const NewState = () => {
  // 每次执行时都会重新创建一个新的n,只不过n的在赋值的时候会选择组件中全局挂载的值，不再使用默认值
  const [n, setN] = useState(0);
  console.log('n1', n);
  let mRef = useRef(0); // 会每次进行修改，更新
  const onClick = () => {
    setN(n + 1);
    mRef.current = mRef.current + 1;
  };
  return (
    <div>
      n:{n} <br/>
      mRef: {mRef.current}
      <button onClick={onClick}>+1</button>
      <button onClick={
        () => {
          console.log('n2', n);
          console.log('m2', mRef.current);
          setTimeout(() => {
            console.log(`n3: ${n}`); // 这里的n为什么是之前的n，完全理解不了
            console.log(`m3: ${mRef.current}`);
          }, 3000);
        }
      }
      >
        log
      </button>
    </div>
  );
};

export default NewState;
