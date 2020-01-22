import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, List } from 'antd';

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
    <Card bordered={false}>
      <List dataSource={data.hits} renderItem={(item) => (
        <List.Item>
          <a href={item.url}>{item.title}</a>
        </List.Item>
      )}/>
    </Card>
  );
};
export default App;
