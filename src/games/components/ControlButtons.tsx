import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import { BiMovie, BiMoviePlay, BiPause, BiPlay, BiReset } from "react-icons/bi";
import { GiArcheryTarget, GiRomanToga } from "react-icons/gi";
const ControlButtons: FC<{
  handleStart?: () => void;
  handleReset?: () => void;
  handlePauseResume?: () => void;
  toggleHide?: () => void;
  showAll?: () => void;
  handleShowRomanji?: () => void;
  hide?: boolean;
  isPaused?: boolean;
  isActive?: boolean;
  isPractice?: boolean;
  showRomanji?: boolean;
  children?: ReactNode;
}> = ({
  handleStart,
  handlePauseResume,
  handleReset,
  toggleHide,
  showAll,
  isPaused,
  isActive,
  isPractice,
  hide,
  showRomanji,
  handleShowRomanji,
  children,
}) => {
  const StartButton = handleStart ? (
    <button
      className="flex justify-center align-center btn btn-one btn-start"
      onClick={handleStart}
    >
      <BiPlay />
    </button>
  ) : (
    <></>
  );
  const ActiveButtons = (
    <>
      {handlePauseResume && (
        <button
          className={`flex justify-center align-center btn btn-one ${
            isPaused ? "" : "bg-blue-600"
          }`}
          onClick={handlePauseResume}
        >
          {isPaused ? <BiPlay /> : <BiPause />}
        </button>
      )}
      {handleReset && (
        <button
          className="flex justify-center align-center btn btn-two"
          onClick={handleReset}
        >
          <BiReset />
        </button>
      )}
    </>
  );

  return (
    <div className="Control-Buttons w-full">
      <div className="my-2 w-full grid grid-cols-5 gap-4 justify-start items-center ">
        <Link
          className="bg-gray-700 shadow-xl p-4 rounded flex justify-center align-center"
          to="/"
        >
          🏠 <p className="hidden">もどる</p>
        </Link>
        {toggleHide && (
          <button
            className={`flex justify-center align-center ${
              !!hide ? "" : "bg-blue-600"
            }`}
            onClick={toggleHide}
          >
            {!hide ? <BiMoviePlay /> : <BiMovie />}
          </button>
        )}
        {isPractice ? <></> : isActive ? ActiveButtons : StartButton}
        {showAll && (
          <button
            className={`flex justify-center align-center ${
              isPractice ? "bg-blue-600" : ""
            }`}
            onClick={showAll}
          >
            <GiArcheryTarget />
          </button>
        )}
        {handleShowRomanji && (
          <button
            className={`flex justify-center align-center ${
              showRomanji ? "bg-blue-600" : ""
            }`}
            onClick={handleShowRomanji}
          >
            <GiRomanToga />
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default ControlButtons;
