import React from 'react';
import { Button, Checkbox, List } from 'antd';
import { TodoProps } from '@/views/todos/Todos';

interface Props {
  todoList: TodoProps[];
  onDeleteTodo: (todo: TodoProps) => void;
  onToggleCompleteStatus: (todo: TodoProps) => void
}

const TodoList: React.FC<Props> = ({ todoList, onDeleteTodo, onToggleCompleteStatus }) => {
  return (
    <List
      style={{ marginTop: '12px' }}
      bordered
      dataSource={todoList}
      renderItem={item => (
        <List.Item>
          <Checkbox onChange={() => onToggleCompleteStatus(item)} value={item.complete} style={{ marginRight: '6px' }}/>
          <span>{item.text}</span>
          <Button onClick={() => onDeleteTodo(item)} type="link" icon="delete" style={{ marginLeft: 'auto' }}/>
        </List.Item>
      )}
    />
  );
};

export default TodoList;
