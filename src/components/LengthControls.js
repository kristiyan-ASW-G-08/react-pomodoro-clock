import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faMinus,
  faPlay,
  faPause
} from '@fortawesome/free-solid-svg-icons';
library.add(faPlus, faMinus, faPlay, faPause);
const LengthControls = ({
  incrementHandler,
  decrementHandler,
  displayType,
  labelId,
  length,
  lengthId,
  decrementId,
  incrementId
}) => {
  return (
    <div className="controls">
      <h1 id={labelId}>{displayType}</h1>
      <h1 id={lengthId}>{length}</h1>
      <div className="buttons-container">
      <button className="button" id={incrementId} onClick={incrementHandler}>
        <FontAwesomeIcon icon="plus" />
      </button>
      <button className="button" id={decrementId} onClick={decrementHandler}>
        <FontAwesomeIcon icon="minus" />
      </button>
      </div>
    </div>
  );
};
export default LengthControls;
