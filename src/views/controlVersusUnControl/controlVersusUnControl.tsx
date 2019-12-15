import React, { ChangeEvent, useRef, useState } from 'react';
import Title from 'antd/es/typography/Title';
import { Typography } from 'antd';

const ControlVersusUnControl = () => {
  const [value, setValue] = useState('默认值');
  const inputRef = useRef<HTMLInputElement>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  console.log('inputRef', inputRef.current && inputRef.current.value);
  return (
    <div>
      <Typography>
        <Title level={3}>control value</Title>
        <input type="text" value={value} onChange={onChange}/>
        <Title level={2}>{value}</Title>
      </Typography>
      <Typography>
        <Title level={3}>unControl value</Title>
        {/*@see:https://reactjs.org/docs/uncontrolled-components.html#default-values*/}
        {/*在 React 渲染生命周期中，form元素的value属性将会覆盖DOM中的value属性, 使用defaultValue属性来指定初始值，之后的更新将不受控制*/}
        <input type="text" defaultValue={'unControl'} ref={inputRef}/>
      </Typography>
    </div>
  );
};

export default ControlVersusUnControl;
