import React, { useContext, useEffect } from 'react';
import ajax from '@/views/useReducerWithContext/ajax';
import { IUser } from '@/views/useReducerWithContext/types';
import { Context } from '@/views/useReducerWithContext/useReducerWithContext';

export const User = () => {
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
