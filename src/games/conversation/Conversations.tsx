import { FC, useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import ControlButtons from "../components/ControlButtons";
import Input from "../components/Input";
import Timer from "../components/Timer";
import useStopWatch from "../hooks/useStopWatch";
import { shuffle } from "../utils/shuffle";
import { conversations, conversationType } from "./data/conversations";
import TextCheck from "./TextCheck";

const Conversations: FC<{
  random: conversationType[];
  source: conversationType[];
  noRandom?: boolean;
}> = ({ random, source, noRandom }) => {
  useDocumentTitle("💬 Hiragana game ");
  const stopWatchProps = useStopWatch();
  const [data, setData] = useState(noRandom ? source : random);
  const [showRomanji, setShowRomanji] = useState(false);

  const toggleShowRomanji = () => {
    setShowRomanji(!showRomanji);
  };

  const handleReset = () => {
    const dataCopy = source.concat();
    const random = shuffle(dataCopy).slice(0, 12);
    setData(random);
    stopWatchProps.handleReset();
  };
  return (
    <div className="m-4">
      <div className=" flex-col flex justify-between items-center lg:sticky top-0 py-2 bg-main z-20">
        <div className="flex justify-between items-center w-full">
          <ControlButtons
            {...stopWatchProps}
            showRomanji={showRomanji}
            handleShowRomanji={toggleShowRomanji}
            handleReset={handleReset}
          />
          <div className="w-full flex flex-col items-end">
            <p>
              Showing {data.length} of {source.length}
            </p>
            <Timer {...stopWatchProps} defaultTime={stopWatchProps.time} />
          </div>
        </div>
      </div>
      <div className="relative z-10 grid w-full gap-2 bg-gray-700 shadow-xl p-4 rounded gap-y-6 ">
        {data.map((item, key) => (
          <TextCheck
            showRomanji={showRomanji}
            key={`${item.hiragana}-${key}`}
            item={item}
            isStarted={stopWatchProps.isActive}
            startGame={stopWatchProps.handleStart}
          />
        ))}
      </div>
    </div>
  );
};

export default Conversations;
