import React, { Fragment, useState } from 'react';
import Switch from '@/components/switch/Switch';

const App: React.FC = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Fragment>
      <Switch checked={checked} onChange={() => setChecked(!checked)}/>
    </Fragment>
  );
};
export default App;
