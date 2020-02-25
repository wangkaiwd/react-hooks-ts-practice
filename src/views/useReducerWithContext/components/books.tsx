import React, { useContext, useEffect } from 'react';
import ajax from '@/views/useReducerWithContext/ajax';
import { IState } from '@/views/useReducerWithContext/types';
import { Context } from '@/views/useReducerWithContext/useReducerWithContext';

export const Books = () => {
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
