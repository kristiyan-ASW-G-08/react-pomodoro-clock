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
    <div className="Controls">
      <button onClick={isPausedHandler} id="start_stop">
        <FontAwesomeIcon icon={isPaused ? 'play' : 'pause'} />;
      </button>
      <button onClick={() => resetHandler()} id="reset">
        Reset
      </button>
    </div>
  );
};
export default Controls;
