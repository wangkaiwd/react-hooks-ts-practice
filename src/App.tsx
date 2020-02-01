import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Input, List } from 'antd';
import { IData } from '@/responseTypes';

const App: React.FC = () => {
  const [data, setData] = useState<IData>({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [search, setSearch] = useState('redux');
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://hn.algolia.com/api/v1/search?query=${search}`);
      setData({ hits: result.data.hits });
    };
    fetchData().then();
  }, [search]);
  return (
    <Card bordered={false}>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={() => setSearch(query)}>Search</Button>
      <List dataSource={data.hits} renderItem={(item) => (
        <List.Item>
          <a href={item.url}>{item.title}</a>
        </List.Item>
      )}/>
    </Card>
  );
};
export default App;
