import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'antd';
import Alert from 'antd/es/alert';
import { useUpdate } from '@/views/FAQ/CustomHooks';

// const ComponentUpdated = () => {
//   const [count, setCount] = useState(0);
//   // const [isFirst, setIsFirst] = useState(true);
//   const onceRef = useRef(true);
//   useEffect(() => {
//     // if (isFirst) {
//     //   // 调用setIsFirst会更新视图，之后重新render组件，此时isFirst会变为false
//     //   return setIsFirst(false);
//     // }
//     if (onceRef.current) {
//       onceRef.current = false;
//     } else {
//       console.log('update');
//     }
//   });
//   return (
//     <div>
//       <Button type={'primary'} onClick={() => setCount(count + 1)}>
//         update
//       </Button>
//       <Alert message={count}/>
//     </div>
//   );
// };

const ComponentUpdated = () => {
  const [count, setCount] = useState(0);
  useUpdate(() => {
    console.log('update');
  });
  return (
    <div>
      <Button type={'primary'} onClick={() => setCount(count + 1)}>
        update
      </Button>
      <Alert message={count}/>
    </div>
  );
};

export default ComponentUpdated;
