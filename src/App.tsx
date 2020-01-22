import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [data, setData] = useState<{ hits: any[] }>({ hits: [] });
  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectId}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};
export default App;
