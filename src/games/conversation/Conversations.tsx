import { FC, useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import ControlButtons from "../components/ControlButtons";
import Timer from "../components/Timer";
import useStopWatch from "../hooks/useStopWatch";
import { shuffle } from "../utils/shuffle";
import { conversationType } from "./data/conversations";
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
  const [verifiedWords, setVerifiedWords] = useState<conversationType[]>([]);
  const toggleShowRomanji = () => {
    setShowRomanji(!showRomanji);
  };

  const handleReset = () => {
    const dataCopy = source.concat();
    const random = shuffle(dataCopy).slice(0, 12);
    setData(random);
    stopWatchProps.handleReset();
  };

  const handleVerified = (conversation: conversationType) => {
    if (!verifiedWords.find((item) => item.hiragana === conversation.hiragana))
      setVerifiedWords([...verifiedWords, conversation]);
  };

  return (
    <div className="m-4 flex flex-col">
      <div className=" lg:flex flex-col justify-between items-center sticky top-0 py-2 bg-main z-20">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <ControlButtons
            {...stopWatchProps}
            showRomanji={showRomanji}
            handleShowRomanji={toggleShowRomanji}
            handleReset={handleReset}
          />
          <div className="w-full md:w-1/2 flex lg:flex-col items-center justify-between lg:items-end">
            <p className="lg:w-full text-right">
              Showing {data.length} of {source.length}
            </p>
            <p>Correct: {verifiedWords.length}</p>
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
            handleVerified={handleVerified}
          />
        ))}
      </div>
    </div>
  );
};

export default Conversations;
