import React, { useRef, useLayoutEffect, useState } from 'react';
import getTime from '../getTime';
import {
  CircularProgressbarWithChildren,
  buildStyles
} from 'react-circular-progressbar';
const Display = ({
  seconds,
  displayType,
  switchTimer,
  sessionLength,
  breakLength,
  count
}) => {
  const time = getTime(seconds);
  const displayRef = useRef(null);
  const [displayTyprSync, setDisplayTypeSync] = useState('');
  const [progressValue, setProgressValue] = useState(0);
  const [progressMax, setProgressMax] = useState(0);
  useLayoutEffect(() => {
    setDisplayTypeSync(displayType);
    setProgressValue(seconds);
    if (displayType === 'Break') {
      setProgressMax(breakLength * 60);
    } else if (displayType === 'Session') {
      setProgressMax(sessionLength * 60);
    }
    if (displayRef.current) {
      if (displayRef.current.innerText === '25:00') {
        setDisplayTypeSync('Session');
      }
    }
  }, [breakLength, count, displayType, seconds, sessionLength, switchTimer]);
  return (
    <div className="display">
      <div className="progress-container">
        <CircularProgressbarWithChildren
          value={progressValue}
          maxValue={progressMax}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'butt',
            textSize: '16px',
            pathTransitionDuration: 0.5,
            pathColor: `rgb(245, 86, 75)`,
            textColor: '#f88',
            trailColor: '#d6d6d6',
            backgroundColor: '#3e98c7'
          })}
        >
          <p id="timer-label">{displayTyprSync}</p>
          <h1 id="time-left" ref={displayRef}>
            {time}
          </h1>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};
export default Display;
