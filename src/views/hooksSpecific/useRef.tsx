import React, { useRef, useState } from 'react';
import Title from 'antd/es/typography/Title';
import { Button } from 'antd';

const UseRef = () => {
  // 每次函数执行都会返回一个新的n
  const [n, setN] = useState(0);
  // 每次函数重新执行，使用的都是一个值
  const refN = useRef(0);
  // 写一个假的更新函数，来保证refN.current在更新时也能重新渲染(render)组件更新页面
  const update = useState<number>()[1];
  return (
    <div>
      <Title level={3}>n: {n}</Title>
      <Title level={3}>refN: {refN.current}</Title>
      <Button type={'primary'} onClick={() => setN(n + 1)}> update n</Button>
      <Button type={'primary'} onClick={() => {
        refN.current++;
        update(refN.current);
      }}> update refN</Button>
    </div>
  );
};

export default UseRef;
