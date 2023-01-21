import React, { FC } from "react";

const Timer: FC<{ time: number }> = ({ time }) => {
  return (
    <div className="timer text-2xl">
      <span className="digits">
        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
      </span>
      <span className="digits">
        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
      </span>
      <span className="digits mili-sec">
        {("0" + ((time / 10) % 100)).slice(-2)}
      </span>
    </div>
  );
};

export default Timer;
