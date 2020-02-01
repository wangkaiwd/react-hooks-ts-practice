import React, { Children, cloneElement, FC, FunctionComponentElement, ReactElement, ReactNode, useState } from 'react';
import { Button, Typography } from 'antd';

const { Title } = Typography;
const Parent: FC = (props) => {
  const [count, setCount] = useState(0);
  const onCountChange = (newCount: number) => {
    setCount(newCount);
  };
  const childrenWithProps = Children.map(props.children, (child) => cloneElement<IChildInjectProps>(child as ReactElement, { count }));
  return (
    <div>
      {childrenWithProps}
    </div>
  );
};

interface IChildInjectProps {
  count: number
}

interface IChildProps {
  [key: string]: any;
}

const Child: FC<IChildProps> = (props) => {
  return (
    <div>
      <Title level={3}>{props}</Title>
      <Button>click</Button>
    </div>
  );
};

const ChildrenPassProps = () => {
  return (
    <div>
      <Parent>
        <Child/>
      </Parent>
    </div>
  );
};

export default ChildrenPassProps;
