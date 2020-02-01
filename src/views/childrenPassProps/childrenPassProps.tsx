import React, { Children, cloneElement, FC, FunctionComponentElement, ReactElement, ReactNode, useState } from 'react';
import { Button, Typography } from 'antd';

const { Title } = Typography;
const Parent: FC = (props) => {
  const [count, setCount] = useState(0);
  const onCountChange = (newCount: number) => {
    setCount(newCount);
  };
  const childrenWithProps = (props.children as ((ReactElement | ((injectProps: IChildInjectProps) => ReactElement))[])).map((child, index) => {
    if ((child as ReactElement).type === Child) {
      return cloneElement<IChildInjectProps>(child as ReactElement, {
        count,
        onCountChange,
        key: index
      });
    } else {
      return (child as (injectProps: IChildInjectProps) => ReactElement)({
        count,
        onCountChange,
        key: index
      });
    }
  });
  return (
    <div>
      {childrenWithProps}
    </div>
  );
};

interface IChildInjectProps {
  count: number;
  onCountChange: (newCount: number) => void;
  key: number;
}

interface IChildProps {
  [key: string]: any;
}

const Child: FC<IChildProps> = (props) => {
  const onClickButton = () => {
    const newCount = props.count + 1;
    props.onCountChange(newCount);
  };

  return (
    <div>
      <Title level={3}>{props.count}</Title>
      <Button onClick={onClickButton}>click</Button>
    </div>
  );
};

const Child2: FC<IChildInjectProps> = (props) => {
  const onClickButton = () => {
    const newCount = props.count + 1;
    props.onCountChange(newCount);
  };
  return (
    <div>
      <Title level={3}>{props.count}</Title>
      <Button onClick={onClickButton}>click</Button>
    </div>
  );
};

const ChildrenPassProps = () => {
  return (
    <div>
      <Parent>
        <Child/>
        {(props: IChildInjectProps) => <Child2 {...props}/>}
      </Parent>
    </div>
  );
};

export default ChildrenPassProps;
