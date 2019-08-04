import { TodoProps } from '@/views/todos/Todos';
import { ADD_TODO, ON_DELETE_TODO, ON_TOGGLE_COMPLETE } from '@/store/actionTypes';
import { ActionProps } from '@/store/reducer';

export const addTodo = (todo: TodoProps): ActionProps => ({ type: ADD_TODO, todo });
export const onDeleteTodo = (todo: TodoProps): ActionProps => ({ type: ON_DELETE_TODO, todo });
export const onToggleComplete = (todo: TodoProps): ActionProps => ({ type: ON_TOGGLE_COMPLETE, todo });
