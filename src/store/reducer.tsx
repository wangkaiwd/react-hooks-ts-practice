import { TodoProps } from '@/views/todos/Todos';
import { ADD_TODO, ON_DELETE_TODO, ON_TOGGLE_COMPLETE } from '@/store/actionTypes';

export interface ActionProps {
  type: string;

  [key: string]: any
}

export default (state: TodoProps[] = [], action: ActionProps) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case ON_DELETE_TODO:
      return state.filter(item => item.id !== action.todo.id);
    case ON_TOGGLE_COMPLETE:
      return state.map(item => {
        if (item.id === action.todo.id) {
          return {
            ...item,
            complete: !action.todo.complete
          };
        }
        return item;
      });
    default:
      return state;
  }
}
