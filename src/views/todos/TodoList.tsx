import React from 'react';
import { Button, Checkbox, List } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
const TodoList = () => {
  return (
    <List
      style={{ marginTop: '12px' }}
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Checkbox style={{ marginRight: '6px' }}/>
          <span>{item}</span>
          <Button type="link" icon="delete" style={{ marginLeft: 'auto' }}/>
        </List.Item>
      )}
    />
  );
};

export default TodoList;
