import React from 'react';

const store = {
  user: null,
  books: null,
  movies: null
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

interface IState {
  user: string | null;
  books: string[] | null;
  movies: string[] | null;
}

const reducer = (state: IState, action: Action) => {

};

const UseReducerWithContext = () => {
  return (
    <div>
      <User/>
      <hr/>
      <Books/>
      <Movies/>
    </div>
  );
};

const User = () => {
  return (
    <div>
      <h1>个人信息</h1>
    </div>
  );
};

const Books = () => {
  return (
    <div>
      <h1>我的书籍</h1>
    </div>
  );
};

const Movies = () => {
  return (
    <div>
      <h1>我的电影</h1>
    </div>
  );
};
export default UseReducerWithContext;
