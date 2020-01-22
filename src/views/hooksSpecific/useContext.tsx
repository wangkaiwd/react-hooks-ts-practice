import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react';

interface ContextProps {
  n: number;
  setN: Dispatch<SetStateAction<number>>;
}
const MyContext = createContext<ContextProps | null>(null);
const UseContext = () => {
  const [n, setN] = useState(0);
  console.log('UseContext');
  return (
    <MyContext.Provider value={{ n, setN }}>
      <Parent/>
    </MyContext.Provider>
  );
};

const Parent = () => {
  const { n, setN } = useContext(MyContext)!;
  console.log('parent');
  return (
    <div>
      <h4>I am parent</h4>
      <h4>n:{n}</h4>
      <button onClick={() => setN(n + 1)}>click parent</button>
      <Child/>
    </div>
  );
};

const Child = () => {
  const { n, setN } = useContext(MyContext)!; // 每一次都会将组件树从上到下进行更新
  // 在vue中只是对值进行更改，用到的地方也会自动更新，而不会重新渲染整个组件树
  console.log('child');
  return (
    <div>
      <h5>I am child</h5>
      <h5>n: {n}</h5>
      <button onClick={() => setN(n + 1)}>click child</button>
    </div>
  );
};
export default UseContext;
