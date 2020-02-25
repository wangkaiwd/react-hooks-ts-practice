import React, { Dispatch, Reducer, ReducerAction, useReducer } from 'react';
import { Action, IState } from '@/views/useReducerWithContext/types';
import { User } from '@/views/useReducerWithContext/components/user';
import { Movies } from '@/views/useReducerWithContext/components/movies';
import { Books } from '@/views/useReducerWithContext/components/books';

const store = {
  user: {},
  books: [],
  movies: []
};

export const Context = React.createContext<{ state: IState, dispatch: Dispatch<ReducerAction<Reducer<IState, Action>>> }>(null!);

const reducer = (state: IState, action: Action) => {
  switch (action.type) {
    case 'setUser':
      return {
        ...state,
        user: action.user
      };
    case 'setBooks':
      return {
        ...state,
        books: action.books
      };
    case 'setMovies': {
      return {
        ...state,
        movies: action.movies
      };
    }
  }
};

const UseReducerWithContext = () => {
  const [state, dispatch] = useReducer(reducer, store);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <User/>
      <hr/>
      <Books/>
      <Movies/>
    </Context.Provider>
  );
};

export default UseReducerWithContext;
