import { FC } from "react";
import { Link } from "react-router-dom";

const ControlButtons: FC<{
  handleStart?: () => void;
  handleReset?: () => void;
  handlePauseResume?: () => void;
  toggleHide?: () => void;
  showAll?: () => void;
  handleShowRomanji: () => void;
  hide?: boolean;
  isPaused?: boolean;
  isActive?: boolean;
  showRomanji?: boolean;
}> = ({
  handleStart,
  handlePauseResume,
  handleReset,
  toggleHide,
  showAll,
  isPaused,
  isActive,
  hide,
  showRomanji,
  handleShowRomanji,
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
      <div className="my-2 w-full flex flex-wrap justify-start items-center space-x-4 space-y-4 xl:space-y-0">
        <Link className="bg-gray-700 shadow-xl p-4 rounded" to="/">
          🏠 もどる / Back
        </Link>
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
        {handleShowRomanji && (
          <button className="w-36" onClick={handleShowRomanji}>
            {showRomanji ? "Hide" : "Show"} Romanji
          </button>
        )}
      </div>
    </div>
  );
};

export default ControlButtons;
