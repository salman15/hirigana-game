import { FC, useEffect, useState } from "react";

const Timer: FC<{
  isActive: boolean;
  isPaused: boolean;
  defaultTime: number;
}> = ({ isActive, isPaused, defaultTime }) => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    setTime(0);
  }, [defaultTime]);

  useEffect(() => {
    let interval: null | number | NodeJS.Timer = null;

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
