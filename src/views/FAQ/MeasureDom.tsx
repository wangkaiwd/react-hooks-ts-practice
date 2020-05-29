import React, { useCallback, useState, Fragment, useRef } from 'react';
// useCallback: 返回传入函数的memorized版本
// memorized: 每次render重新执行组件内容时，如果依赖项没有发生变化，不会重新创建一个新的函数
const MeasureDom = () => {
  const [height, setHeight] = useState(0);
  const h2Ref = useRef(null); // 这里用到h2Ref的值时必需要手动更新视图
  // 这里使用callback ref的原因：可以在函数触发时更新state
  const measureRef = useCallback((node) => {
    if (node !== null) { // 挂载和卸载时都会调用，挂载时node为ref所在dom元素，卸载时为null
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);
  return (
    <Fragment>
      {/* React将在组件挂载时，会调用ref回调函数并传入DOM元素，当卸载时调用它并传入null */}
      <h1 ref={measureRef}>
        Hello, world
      </h1>
      <h2 ref={h2Ref}>
        The above header is {Math.round(height)}px tall
      </h2>
    </Fragment>
  );
};

export default MeasureDom;
