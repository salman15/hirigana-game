import { FC } from "react";

const ControlButtons: FC<{
  handleStart?: () => void;
  handleReset?: () => void;
  handlePauseResume?: () => void;
  toggleHide?: () => void;
  showAll?: () => void;
  hide?: boolean;
  isPaused?: boolean;
  isActive?: boolean;
}> = ({
  handleStart,
  handlePauseResume,
  handleReset,
  toggleHide,
  showAll,
  isPaused,
  isActive,
  hide,
}) => {
  const StartButton = handleStart ? (
    <button className="btn btn-one btn-start" onClick={handleStart}>
      Start
    </button>
  ) : (
    <></>
  );
  const ActiveButtons = (
    <>
      {handlePauseResume && (
        <button className="btn btn-one" onClick={handlePauseResume}>
          {isPaused ? "Resume" : "Pause"}
        </button>
      )}
      {handleReset && (
        <button className="btn btn-two" onClick={handleReset}>
          Reset
        </button>
      )}
    </>
  );

  return (
    <div className="Control-Buttons w-full">
      <div className=" my-2 w-full flex justify-start items-center space-x-4">
        {toggleHide && (
          <button className="w-36" onClick={toggleHide}>
            {!hide ? "Hide" : "Show"} video
          </button>
        )}
        {isActive ? ActiveButtons : StartButton}
        {showAll && (
          <button className="w-36" onClick={showAll}>
            Practice
          </button>
        )}
      </div>
    </div>
  );
};

export default ControlButtons;
