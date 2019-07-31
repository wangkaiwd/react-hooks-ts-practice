import React, { useState } from 'react';
import Switch from '@/components/switch/Switch';

const App: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className={'app'}>
      <Switch
        checked={checked}
        checkedColor={'#EF476F'}
        onChange={() => setChecked(!checked)}
      />
    </div>
  );
};
export default App;
