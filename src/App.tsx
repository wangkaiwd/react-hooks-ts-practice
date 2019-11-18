import React, { useState } from 'react';
import ClassVsHooks, { ClassComponents } from '@/views/classVsHooks/ClassVsHooks';

const App: React.FC = () => {
  const [nameConfig, setNameConfig] = useState({
    firstName: 'w',
    lastName: 'k',
  });
  const { lastName, firstName } = nameConfig;
  const changeName = (newFirstName: string): void => {
    nameConfig.firstName = newFirstName;
    setNameConfig({ ...nameConfig });
  };
  return (
    <div className={'app'}>
      <ClassVsHooks/>
      <ClassComponents
        firstName={firstName}
        lastName={lastName}
        onChange={changeName}
      />
    </div>
  );
};
export default App;
