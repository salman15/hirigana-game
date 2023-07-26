import { FC, useEffect, useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { toast } from "react-toastify";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import ControlButtons from "../components/ControlButtons";
import Timer from "../components/Timer";
import useStopWatch from "../hooks/useStopWatch";
import { shuffle } from "../utils/shuffle";
import TextCheck from "./TextCheck";
import { conversationType } from "./data/conversations";

const ConversationsStepsWithFilters: FC<{
  random: Record<string, conversationType[]>;
  source: Record<string, conversationType[]>;
  noRandom?: boolean;
}> = ({ random, source, noRandom }) => {
  const types = Object.keys(source);

  useDocumentTitle("💬 Hiragana game ");
  const stopWatchProps = useStopWatch();
  const [step, setStep] = useState(0);
  const [data, setData] = useState(noRandom ? source : random);
  const [showRomanji, setShowRomanji] = useState(false);
  const [selected, setSelected] = useState<string>(types[0]);
  const [verifiedWords, setVerifiedWords] = useState<conversationType[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const selectedSource = data[selected];

  const handleReset = () => {
    const dataCopy = source[selected]?.concat();
    const random = shuffle(dataCopy).slice(0, 48);
    setData({ ...source, [selected]: random });
    stopWatchProps.handleReset();
    setVerifiedWords([]);
    setStep(0);
  };

  useEffect(() => {
    if (verifiedWords.length === selectedSource.length)
      toast.success(
        <div>
          <p>Good job! You got all the answers correct.</p>
          <button className="bg-blue-600" onClick={handleReset}>
            Try again!
          </button>
        </div>
      );
  }, [verifiedWords]);

  const toggleShowRomanji = () => {
    setShowRomanji(!showRomanji);
  };

  const handleVerified = (conversation: conversationType) => {
    if (!verifiedWords.find((item) => item.hiragana === conversation.hiragana))
      setVerifiedWords([...verifiedWords, conversation]);
  };

  const handleStep = () => {
    const nextStep = step + 1;
    if (nextStep < selectedSource.length) {
      setStep(nextStep);
    }
  };

  const handleSelected = (select: string) => {
    setSelected(select);
    toast.info(`Changed to: ${select}`);

    if (verifiedWords.length > 0) setVerifiedWords([]);
    if (showFilters) setShowFilters(false);
  };
  return (
    <div className="App m-4 ">
      <div className=" lg:flex flex-col justify-between items-center sticky top-0 py-2 bg-main z-20">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <ControlButtons
            {...stopWatchProps}
            showRomanji={showRomanji}
            handleShowRomanji={toggleShowRomanji}
            handleReset={() => {
              toast.success("Reset the game!");
              handleReset();
            }}
          >
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex justify-center align-center ${
                showFilters ? "bg-blue-600" : ""
              }`}
            >
              {showFilters ? <BiShow /> : <BiHide />}
            </button>
          </ControlButtons>

          <div className="w-full md:w-1/2 flex lg:flex-col items-center justify-between lg:items-end">
            <p className="lg:w-full text-right">
              Showing {selectedSource.length} of {source[selected].length}
            </p>
            <p>Correct: {verifiedWords.length}</p>
            <Timer {...stopWatchProps} defaultTime={stopWatchProps.time} />
          </div>
        </div>
        {showFilters && (
          <ul className="grid grid-cols-3 gap-2 md:grid-cols-2 lg:gap-4 lg:flex lg:flex-wrap lg:items-start lg:justify-start lg:space-x-4  w-full">
            {types.map((type, i) => (
              <li className="w-full md:w-auto" key={i}>
                <button
                  className={`md:w-40 ${
                    selected === type ? "bg-blue-600" : ""
                  }`}
                  onClick={() => handleSelected(type)}
                >
                  {`${type[0].toUpperCase()}${type.slice(1, type.length + 1)}`}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="grid grid-cols-1 w-full bg-gray-700 shadow-xl p-4 space-y-4 rounded">
        <h2 className="font-bold text-2xl">Selected: {selected}</h2>
        <ul className="relative grid grid-cols-12 lg:flex lg:flex-row justify-between z-10 w-full ">
          {selectedSource.map((__, key) => (
            <li
              className={`w-2 h-2 rounded-full ${
                step > key
                  ? "bg-green-600"
                  : step === key
                  ? "bg-blue-600"
                  : "bg-gray-600"
              }`}
            />
          ))}
        </ul>
        {selectedSource.map((item, key) => {
          return key === step ? (
            <TextCheck
              showRomanji={showRomanji}
              item={item}
              isStarted={stopWatchProps.isActive}
              startGame={stopWatchProps.handleStart}
              handleVerified={handleVerified}
              onClick={handleStep}
              isOne
            />
          ) : (
            <></>
          );
        })}
      </div>
    </div>
  );
};

export default ConversationsStepsWithFilters;
