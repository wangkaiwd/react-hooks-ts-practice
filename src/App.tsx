import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Card, Input, List } from 'antd';
import { IData } from '@/responseTypes';

const App: React.FC = () => {
  const [data, setData] = useState<IData>({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [url, setUrl] = useState('https://hn.algolia.com/api/v1/search?query=redux');
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(url);
      setData({ hits: result.data.hits });
      setIsLoading(false);
    };
    fetchData().then();
  }, [url]);
  return (
    <Card bordered={false}>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button onClick={() => setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)}>Search</Button>
      <List dataSource={data.hits} loading={isLoading} renderItem={(item) => (
        <List.Item>
          <a href={item.url}>{item.title}</a>
        </List.Item>
      )}/>
    </Card>
  );
};
export default App;
