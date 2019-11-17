import React from 'react';
import ClassVsHooks, { ClassComponents } from '@/views/classVsHooks/ClassVsHooks';

const App: React.FC = () => {
  return (
    <div className={'app'}>
      <ClassVsHooks/>
      <ClassComponents/>
    </div>
  );
};
export default App;
