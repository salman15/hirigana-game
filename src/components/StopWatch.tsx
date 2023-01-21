import { FC } from "react";
import { useStopWatchReturnProps } from "../hooks/useStopWatch";
import ControlButtons from "./ControlButtons";
import Timer from "./Timer";

const StopWatch: FC<useStopWatchReturnProps> = ({ time }) => {
  return (
    <div className="stop-watch flex items-center justify-start space-x-4">
      <Timer time={time} />
    </div>
  );
};

export default StopWatch;
