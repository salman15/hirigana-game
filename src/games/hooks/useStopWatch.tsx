import React, { useEffect, useState } from "react";

export type useStopWatchReturnProps = {
  time: number;
  isActive: boolean;
  isPaused: boolean;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  handleStart: () => void;
  handlePauseResume: () => void;
  handleReset: () => void;
};

const useStopWatch = (): useStopWatchReturnProps => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(time + 1);
  };

  return {
    time,
    isActive,
    isPaused,
    setTime,
    handleStart,
    handlePauseResume,
    handleReset,
  };
};

export default useStopWatch;
