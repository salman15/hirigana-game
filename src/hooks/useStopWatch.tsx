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

  useEffect(() => {
    let interval: null | number = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
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
