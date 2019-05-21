import { useRef, useLayoutEffect, useEffect } from 'react';
import accurateInterval from 'accurate-interval';
const useInterval = (callback, delay,count) => {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback,count]);

  // Set up the interval.
  useLayoutEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let intervalId = accurateInterval(tick, delay, {
        aligned: true,
        immediate: true
      });
      return () => intervalId.clear();
    }
  }, [delay,count]);
};
export default useInterval;
