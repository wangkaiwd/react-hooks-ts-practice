import React from 'react';
import { Button, Checkbox, List } from 'antd';
import { connect } from 'react-redux';
import { TodoProps } from '@/views/todos/Todos';
import { onDeleteTodo, onToggleComplete } from '@/store/actionCreator';

interface Props {
  todoList: TodoProps[];
  onDeleteTodo: (todo: TodoProps) => void;
  onToggleCompleteStatus: (todo: TodoProps) => void
}

const TodoList: React.FC<Props> = ({ todoList, onDeleteTodo, onToggleCompleteStatus }) => {
  return (
    <List
      rowKey={'id'}
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

export default connect(
  (state: TodoProps[]) => ({ todoList: state }),
  (dispatch) => ({
    onDeleteTodo: (todo: TodoProps) => dispatch(onDeleteTodo(todo)),
    onToggleCompleteStatus: (todo: TodoProps) => dispatch(onToggleComplete(todo))
  })
)(TodoList);
