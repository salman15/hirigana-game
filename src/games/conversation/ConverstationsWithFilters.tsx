import { FC, useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import ControlButtons from "../components/ControlButtons";
import Timer from "../components/Timer";
import useStopWatch from "../hooks/useStopWatch";
import { shuffle } from "../utils/shuffle";
import { conversationType } from "./data/conversations";
import TextCheck from "./TextCheck";

const ConversationsWithFilters: FC<{
  random: Record<string, conversationType[]>;
  source: Record<string, conversationType[]>;
  noRandom?: boolean;
}> = ({ random, source, noRandom }) => {
  const types = Object.keys(source);
  useDocumentTitle("💬 Hiragana game ");
  const stopWatchProps = useStopWatch();
  const [data, setData] = useState(noRandom ? source : random);
  const [showRomanji, setShowRomanji] = useState(false);
  const [selected, setSelected] = useState<string>(types[0]);
  const selectedSource = data[selected];

  const toggleShowRomanji = () => {
    setShowRomanji(!showRomanji);
  };

  const handleReset = () => {
    const dataCopy = source[selected]?.concat();
    const random = shuffle(dataCopy).slice(0, 12);
    setData({ ...source, [selected]: random });
    stopWatchProps.handleReset();
  };

  return (
    <div className="m-4">
      <div className=" flex-col flex justify-between items-center sticky top-0 py-2 bg-main z-20">
        <div className="flex justify-between items-center w-full">
          <ControlButtons
            {...stopWatchProps}
            showRomanji={showRomanji}
            handleShowRomanji={toggleShowRomanji}
            handleReset={handleReset}
          />
          <div className="w-full flex flex-col items-end">
            <p>
              Showing {selectedSource.length} of {source[selected].length}
            </p>
            <Timer {...stopWatchProps} defaultTime={stopWatchProps.time} />
          </div>
        </div>
        <ul className="flex flex-wrap space-x-4 w-full">
          {types.map((type, i) => (
            <li key={i}>
              <button
                className={selected === type ? "bg-blue-600" : ""}
                onClick={() => setSelected(type)}
              >
                {`${type[0].toUpperCase()}${type.slice(1, type.length + 1)}`}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <ul className="relative z-10 grid w-full gap-2 bg-gray-700 shadow-xl p-4 rounded gap-y-6 list-decimal">
        {selectedSource.map((item, key) => (
          <li className="pl-2 ml-12">
            <TextCheck
              showRomanji={showRomanji}
              key={`${item.hiragana}-${key}`}
              item={item}
              isStarted={stopWatchProps.isActive}
              startGame={stopWatchProps.handleStart}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConversationsWithFilters;
