import { Dispatch, Reducer, SetStateAction, useEffect, useReducer, useState } from 'react';
import axios from 'axios';

interface IResult<T = any> {
  data: T;
  isLoading: boolean;
  isError: boolean;
}

type IAction<T = any> = {
  type: 'FETCH_INIT';
} | {
  type: 'FETCH_SUCCESS';
  payload: T
} | {
  type: 'FETCH_FAILURE';
}
const dataFetchReducer = <T extends any> (state: IResult<T>, action: IAction<T>): IResult<T> => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, isLoading: true };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false
      };
    case 'FETCH_FAILURE':
      return { ...state, isError: true };
    default:
      throw new Error();
  }
};

const useDataApi = <T extends any> (initialData: T, initialUrl: string): [IResult<T>, Dispatch<SetStateAction<string>>] => {
  const [state, dispatch] = useReducer<Reducer<IResult<T>, IAction<T>>>(dataFetchReducer, {
    data: initialData,
    isError: false,
    isLoading: false
  });
  const [url, setUrl] = useState(initialUrl);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const result = await axios(url);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (e) {
        dispatch({ type: 'FETCH_FAILURE' });
      }
    };
    fetchData().then();
  }, [url]);
  return [state, setUrl];
};
const useHackerNewsApi = <T extends any> (initialData: T, initialUrl: string): [IResult<T>, Dispatch<SetStateAction<string>>] => {
  const [data, setData] = useState<T>(initialData);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        setData(result.data);
      } catch (e) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData().then();
  }, [url]);
  return [{ data, isLoading, isError }, setUrl];
};

export default useHackerNewsApi;
export { useDataApi };
