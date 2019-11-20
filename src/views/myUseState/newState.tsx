import React, { useState } from 'react';

const NewState = () => {
  const [n, setN] = useState(0);

  return (
    <div>
      <button onClick={() => setN(n + 1)}>+1</button>
      <button onClick={
        () => {
          setTimeout(() => {
            console.log(`n: ${n}`);
          }, 3000);
        }
      }
      >
        log
      </button>
    </div>
  );
};

export default NewState;
