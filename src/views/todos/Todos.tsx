import React, { useState } from 'react';
import Controls from './Controls';
import TodoList from './TodoList';

export interface TodoProps {
  id: number;
  text: string;
  complete: boolean
}
const Todos = () => {
  const [todoList, setTodoList] = useState<TodoProps[]>([]);
  const addTodo = (todo: TodoProps) => {
    setTodoList([...todoList, todo]);
  };
  const onDeleteTodo = (todo: TodoProps) => {
    setTodoList(todoList.filter(item => item.id !== todo.id));
  };
  const onToggleCompleteStatus = (todo: TodoProps) => {
    const newTodoList = todoList.map(item => {
      if (item.id === todo.id) {
        return {
          ...item,
          complete: !todo.complete
        };
      }
      return item;
    });
    setTodoList(newTodoList);
  };
  return (
    <div className="todos" style={{ width: '600px', margin: '20px auto' }}>
      <Controls addTodo={addTodo}/>
      <TodoList
        todoList={todoList}
        onDeleteTodo={onDeleteTodo}
        onToggleCompleteStatus={onToggleCompleteStatus}
      />
    </div>
  );
};

export default Todos;
