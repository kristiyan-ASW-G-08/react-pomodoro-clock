import React, { useRef } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faMinus,
  faPlay,
  faPause
} from '@fortawesome/free-solid-svg-icons';
library.add(faPlus, faMinus, faPlay, faPause);
const Controls = ({ isPausedHandler, isPaused, resetHandler }) => {
  return (
    <div className="controls">
      <div className="buttons-container">
        <button className="button" onClick={isPausedHandler} id="start_stop">
          {isPaused ? 'play' : 'pause'}
          {/* <FontAwesomeIcon icon={isPaused ? 'play' : 'pause'} />; */}
        </button>
        <button className="button" onClick={() => resetHandler()} id="reset">
          reset
        </button>
      </div>
    </div>
  );
};
export default Controls;
