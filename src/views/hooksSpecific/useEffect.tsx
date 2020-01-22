import React, { useLayoutEffect, useState } from 'react';
import Title from 'antd/lib/typography/Title';

const UseEffect = () => {
  const [value] = useState(0);
  useLayoutEffect(() => {
    // 这里使用useEffect会从0闪烁到1000，但是测试时并未发现
    document.querySelector('.demo')!.innerHTML = `value: 1000`;
  }, []);
  return (
    <Title className="demo" level={3}>
      值：{value}
    </Title>
  );
};

export default UseEffect;
