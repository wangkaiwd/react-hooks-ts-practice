import React, { useState } from 'react';
import Switch from '@/components/switch/Switch';

const App: React.FC = () => {
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  return (
    <div className={'app'}>
      <Switch
        checked={checked}
        checkedColor={'#EF476F'}
        onChange={() => setChecked(!checked)}
      />
      <Switch
        checked={checked1}
        onChange={() => setChecked1(!checked1)}
      />
    </div>
  );
};
export default App;
