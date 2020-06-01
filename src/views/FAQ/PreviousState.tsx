import React, { useEffect, useRef, useState } from 'react';
import { Alert } from 'antd';
import Button from 'antd/es/button';

// 自定义`hooks`来获取之前的props和state
const usePrevious = (value: any) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  // 每次先将值进行返回，然后再进行更新
  return ref.current;
};
const PreviousState = () => {
  const [count, setCount] = useState(0);
  const calculation = count + 100;
  const previousCount = usePrevious(calculation);
  // 组件渲染后每次都执行
  // useEffect(() => {
  //   previousRef.current = count;
  // });
  return (
    <div>
      <Button type={'primary'} onClick={() => setCount(count + 1)}>Click</Button>
      <Alert message={`current:${count}`}/>
      <Alert message={`previous:${previousCount}`}/>
    </div>
  );
};
// previousRef.current 在渲染后才赋值，而赋值之后，并不会再次render组件，所以，页面中显示的是旧值

export default PreviousState;
