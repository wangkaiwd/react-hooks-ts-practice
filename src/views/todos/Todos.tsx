import React, { useState } from 'react';
import Controls from './Controls';
import TodoList from './TodoList';

export interface TodoProps {
  id: number;
  text: string;
  complete: boolean
}
const Todos = () => {
  return (
    <div className="todos" style={{ width: '600px', margin: '20px auto' }}>
      <Controls/>
      <TodoList/>
    </div>
  );
};

export default Todos;
