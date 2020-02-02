import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import axios from 'axios';

interface IResult<T = any> {
  data: T;
  isLoading: boolean;
  isError: boolean;
}

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
