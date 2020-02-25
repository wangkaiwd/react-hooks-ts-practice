import React, { useContext, useEffect } from 'react';
import ajax from '@/views/useReducerWithContext/ajax';
import { IState } from '@/views/useReducerWithContext/types';
import { Context } from '@/views/useReducerWithContext/useReducerWithContext';

export const Movies = () => {
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
