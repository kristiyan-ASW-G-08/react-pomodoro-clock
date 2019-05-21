import React, { useState, useLayoutEffect, useEffect, useRef } from 'react';
import LengthControls from './components/LengthControls';
import Display from './components/Display';
import Controls from './components/Controls';
import accurateInterval from 'accurate-interval';
import useInterval from './useInterval';
import './App.css';

function App() {
  const [sessionLength, setSessionLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [isPaused, setIsPaused] = useState(true);
  const [displayType, setDisplayType] = useState('Session');
  const [audioPlay, setAudioPlay] = useState(false);
  const audioRef = useRef(null);
  const [count, setCount] = useState(1500);
  const [delay, setDelay] = useState(null);
  const [isRunning, setIsRunning] = useState(true);
  useInterval(
    () => {
      if (isRunning) {
      }
      setCount(count => count - 1);
      if (count === 0) {
        switchCount();
      }
    },
    isRunning ? delay : null,
    count
  );
  const switchCount = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    if (displayType === 'Session') {
      setDisplayType('Break');
      setCount(count => breakLength * 60);
    } else {
      setDisplayType('Session');
      setCount(count => sessionLength * 60);
    }
  };
  const resetHandler = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setDelay(delay => null);
    setSessionLength(25);
    setBreakLength(5);
    setCount(1500);
  };
  const incrementSessionHander = () => {
    if (delay === null && sessionLength < 60) {
      setSessionLength(sessionLength => sessionLength + 1);
      setCount(count => (sessionLength + 1) * 60);
    }
  };
  const decrementSessionHandler = () => {
    if (delay === null && sessionLength > 1) {
      setSessionLength(sessionLength => sessionLength - 1);
      setCount(count => (sessionLength - 1) * 60);
    }
  };
  const incrementBreakHandler = () => {
    if (delay === null && breakLength < 60) {
      setBreakLength(breakLength => breakLength + 1);
    }
  };
  const decrementBreakHandler = () => {
    if (delay === null && breakLength > 1) {
      setBreakLength(breakLength => breakLength - 1);
    }
  };
  const pauseHandler = () => {
    setDelay(delay => (delay === null ? 1000 : null));
  };
  return (
    <div className="App">
      <Display
        seconds={count}
        displayType={displayType}
        switchTimer={switchCount}
      />
      <Controls
        isPausedHandler={pauseHandler}
        isPaused={isPaused}
        resetHandler={resetHandler}
        seconds={count}
      />
      <LengthControls
        displayType={'Session'}
        incrementHandler={incrementSessionHander}
        decrementHandler={decrementSessionHandler}
        length={sessionLength}
        labelId={'session-label'}
        lengthId={'session-length'}
        incrementId={'session-increment'}
        decrementId={'session-decrement'}
      />
      <LengthControls
        displayType={'Break'}
        incrementHandler={incrementBreakHandler}
        decrementHandler={decrementBreakHandler}
        labelId={'break-label'}
        length={breakLength}
        lengthId={'break-length'}
        incrementId={'break-increment'}
        decrementId={'break-decrement'}
      />
      <audio
        id="beep"
        preload="auto"
        src="https://goo.gl/65cBl1"
        ref={audioRef}
      />
    </div>
  );
}

export default App;
