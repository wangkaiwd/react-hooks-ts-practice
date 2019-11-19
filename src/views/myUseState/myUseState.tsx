import React, { useState } from 'react';

const Counter = () => {
  const [n, setN] = useState(0);
  return (
    <div>
      {n}
      <button onClick={() => setN(n + 1)}>click</button>
    </div>
  );
};

export default Counter;
