import { useCallback, useState } from 'react';

export const useForceUpdate = () => {
  const [, setState] = useState();
  // const forceUpdate = useCallback(() => {
  //   setState({});
  // }, []);
  const forceUpdate = () => {
    console.log('update');
    setState({})
  }
  return forceUpdate;
};
