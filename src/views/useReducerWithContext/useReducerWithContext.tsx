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
      <h3>个人信息</h3>
      <ul>
        <li>name:{state.user.name}</li>
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
      <h3>我的书籍</h3>
      <ul>
        {
          state.books.length > 0
            ?
            state.books.map((item, i) => <li key={i}>{item}</li>)
            :
            <li>加载中...</li>
        }
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
      <h3>我的电影</h3>
      <ul>
        {
          state.movies.length > 0
            ?
            state.movies.map((item, i) => <li key={i}>{item}</li>)
            :
            <li>加载中...</li>
        }
      </ul>
    </div>
  );
};
export default UseReducerWithContext;
