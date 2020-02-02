import React, { useState } from 'react';
import { Button, Card, Input, List } from 'antd';
import useHackerNewsApi from '@/views/fetchData/useHackerNewsApi';
import { IData } from '@/responseTypes';

const FetchData: React.FC = () => {
  const [query, setQuery] = useState('redux');
  const [{ data, isLoading, isError }, setUrl] = useHackerNewsApi<IData>({ hits: [] }, 'https://hn.algolia.com/api/v1/search?query=redux');
  return (
    <Card bordered={false}>
      <form onSubmit={(e) => {
        e.preventDefault();
        setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`);
      }}>
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button htmlType="submit">Search</Button>
      </form>
      {isError ?
        <div>something went wrong...</div>
        :
        <List dataSource={data.hits} loading={isLoading} renderItem={(item) => (
          <List.Item>
            <a href={item.url}>{item.title}</a>
          </List.Item>
        )}/>}
    </Card>
  );
};
export default FetchData;
