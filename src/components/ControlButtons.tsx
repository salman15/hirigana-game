import React, { FC } from "react";

const ControlButtons: FC<{
  handleStart: () => void;
  handleReset: () => void;
  handlePauseResume: () => void;
  isPaused: boolean;
  active: boolean;
}> = ({ handleStart, handlePauseResume, handleReset, isPaused, active }) => {
  const StartButton = (
    <button className="btn btn-one btn-start" onClick={handleStart}>
      Start
    </button>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <button className="btn btn-one" onClick={handlePauseResume}>
        {isPaused ? "Resume" : "Pause"}
      </button>
      <button className="btn btn-two" onClick={handleReset}>
        Reset
      </button>
    </div>
  );

  return (
    <div className="Control-Buttons">
      <div className=" my-2">{active ? ActiveButtons : StartButton}</div>
    </div>
  );
};

export default ControlButtons;
