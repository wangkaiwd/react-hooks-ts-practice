import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App: React.FC = () => {
  const [data, setData] = useState<{ hits: any[] }>({ hits: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://hn.algolia.com/api/v1/search?query=react');
      setData(result.data);
    };
    fetchData().then();
  }, []);
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
