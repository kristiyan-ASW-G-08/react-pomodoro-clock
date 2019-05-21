import React, { useRef, useLayoutEffect,useState } from 'react';
import getTime from '../getTime';
const Display = ({ seconds, displayType, switchTimer }) => {
  const time = getTime(seconds);
  const displayRef = useRef(null);
  const [displayTyprSync, setDisplayTypeSync] = useState('');
  useLayoutEffect(() => {
    setDisplayTypeSync(displayType);
    if (displayRef.current) {
      if (displayRef.current.innerText === '25:00') {
        setDisplayTypeSync('Session');
      }
    }
  }, [displayType, switchTimer]);
  return (
    <div className="display">
      <p id="timer-label">{displayTyprSync}</p>
      <h1 id="time-left" ref={displayRef}>
        {time}
      </h1>
    </div>
  );
};
export default Display;
