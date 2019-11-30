import React, { Fragment, useCallback, useState } from 'react';
import { Button, Typography } from 'antd';

const { Title } = Typography;
const UseMemo = () => {
  const [n, setN] = useState(0);
  const [m, setM] = useState(0);
  const onClick = () => {
    setN(n + 1);
  };
  const onClick2 = () => {
    setM((m) => m + 1);
  };
  // 每次在重新渲染该组件的时候都会重新创建一个新的函数，而函数会将地址存储到堆内存中
  // const onClickChild = () => {
  //
  // };
  // 使用useMemo优化,类似于vue中的计算属性
  // const onClickChild = useMemo(() => {
  //   return () => {};
  // }, [m]);

  // 使用useCallback来处理函数，useMemo(() => () => {})等价于 useCallback(() => {})
  // 是useMemo处理函数时的一个语法糖
  const onClickChild = useCallback(() => {}, [m]);
  return (
    <Fragment>
      <Title level={2}>n:{n}</Title>
      <Title level={2}>m:{m}</Title>
      <Button type={'primary'} onClick={onClick}>click</Button>
      <Button onClick={onClick2}>click2</Button>
      <Child name="child"/>
      <Child2 name="child2" onClick={onClickChild}/>
    </Fragment>
  );
};

interface ChildProps {
  name: string;
  n?: number;
  onClick?: () => void
}
const Child: React.FC<ChildProps> = (props) => {
  console.log(props.name);
  return (
    <div>
      I am {props.name}
    </div>
  );
};
const Child2 = React.memo(Child);
export default UseMemo;
