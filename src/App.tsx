import React, { useState } from 'react';
import Todos from '@/views/todos/Todos';

const App: React.FC = () => {
  return (
    <div className={'app'}>
      <Todos/>
    </div>
  );
};
export default App;
