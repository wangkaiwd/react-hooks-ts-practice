import { useEffect, useRef } from 'react';

// https://github.com/streamich/react-use/blob/master/src/useUpdateEffect.ts

// type queries: https://mariusschulz.com/blog/type-queries-and-typeof-in-typescript
export const useUpdate: typeof useEffect = (callback, deps) => {
  const onceRef = useRef(true);
  useEffect(() => {
    if (onceRef.current) {
      onceRef.current = false;
    } else {
      return callback();
    }
  }, deps);
};
