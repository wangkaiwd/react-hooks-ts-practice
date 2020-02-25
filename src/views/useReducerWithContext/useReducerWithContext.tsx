import React, { Dispatch, Reducer, ReducerAction, useContext, useEffect, useReducer } from 'react';
import ajax from '@/views/useReducerWithContext/ajax';

const store = {
  user: {},
  books: [],
  movies: []
};

type Action = {
  type: 'setUser',
  user: IState['user']
} | {
  type: 'setBooks',
  books: IState['books']
} | {
  type: 'setMovies',
  movies: IState['movies']
}

interface IUser {name?: string;}

interface IState {
  user: IUser;
  books: string[];
  movies: string[];
}

const Context = React.createContext<{ state: IState, dispatch: Dispatch<ReducerAction<Reducer<IState, Action>>> }>(null!);

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

const User = () => {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    ajax<IUser>('/user').then(
      response => {
        dispatch({ type: 'setUser', user: response });
      }
    );
  }, []);
  return (
    <div>
      <h1>个人信息</h1>
      <ul>
        <li>{state.user.name}</li>
      </ul>
    </div>
  );
};

const Books = () => {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    ajax<IState['books']>('/books').then(
      response => {
        dispatch({ type: 'setBooks', books: response });
      }
    );
  }, []);
  return (
    <div>
      <h1>我的书籍</h1>
      <ul>
        {state.books.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
};

const Movies = () => {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    ajax<IState['movies']>('/movies').then(
      response => {
        dispatch({ type: 'setMovies', movies: response });
      }
    );
  }, []);
  return (
    <div>
      <h1>我的电影</h1>
      <ul>
        {state.movies.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
};
export default UseReducerWithContext;
