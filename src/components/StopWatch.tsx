import { FC } from "react";
import { useStopWatchReturnProps } from "../hooks/useStopWatch";
import ControlButtons from "./ControlButtons";
import Timer from "./Timer";

const StopWatch: FC<useStopWatchReturnProps> = ({
  time,
  isActive,
  isPaused,
  handleStart,
  handlePauseResume,
  handleReset,
}) => {
  return (
    <div className="stop-watch flex items-center justify-start space-x-4">
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
      <Timer time={time} />
    </div>
  );
};

export default StopWatch;
