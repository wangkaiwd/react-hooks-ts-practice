import React, { ChangeEvent, useRef, useState } from 'react';
import { Input } from 'antd';
import { TodoProps } from '@/views/todos/Todos';
import { connect } from 'react-redux';
import { addTodo } from '@/store/actionCreator';

interface Props {
  addTodo: (todo: TodoProps) => void;
}
const Controls: React.FC<Props> = ({ addTodo }) => {
  const [value, setValue] = useState<string>('');
  const initId = useRef<number>(0);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };
  const onPressEnter = () => {
    if (value.trim() === '') return;
    addTodo({
      id: initId.current++,
      text: value,
      complete: false
    });
    setValue('');
  };
  return (
    <Input
      placeholder="please input your task"
      size={'large'}
      value={value}
      onChange={onChange}
      onPressEnter={onPressEnter}
    />
  );
};

export default connect(
  null,
  (dispatch) => ({
    addTodo: (todo: TodoProps) => dispatch(addTodo(todo))
  }))(Controls);
