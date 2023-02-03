import { FC, useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import ControlButtons from "../components/ControlButtons";
import Input from "../components/Input";
import Timer from "../components/Timer";
import useStopWatch from "../hooks/useStopWatch";
import { shuffle } from "../utils/shuffle";
import { conversations, conversationType } from "./data/conversations";

const Conversation: FC<{
  item: typeof conversations[0];
  startGame: () => void;
  isStarted: boolean;
  showRomanji: boolean;
}> = ({ item, isStarted, startGame, showRomanji }) => {
  const [showTranslation, setShowTranslation] = useState(false);
  const [translation, setTranslation] = useState("");
  const [emoji, setEmoji] = useState<string>();

  const findTranslation = (translation: string) => {
    return !!item.translation.find(
      (item) => item.toLowerCase() === translation.toLowerCase()
    );
  };

  const isTranslated = findTranslation(translation);

  const verify = () => {
    const emoji = isTranslated ? "✅" : "❌";
    setEmoji(emoji);
    setShowTranslation(!showTranslation);
    !isStarted && startGame();
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (findTranslation(value.toLowerCase())) {
      setEmoji("✅");
      setShowTranslation(true);
    }

    setTranslation(value);
    !isStarted && startGame();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center  p-4 bg-gray-800 bg-opacity-20 ">
      <div>
        <p className="text-4xl">{item.hiragana}</p>
        {showRomanji && (
          <p className="text-3xl mt-2 pt-2 border-t-2">{item.romanji}</p>
        )}
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-4 ">
          <Input
            onChange={handleInput}
            className="w-conversationInput max-w-full"
            name="translation"
            placeholder="Translate this sentence."
          />
          <button onClick={verify} className="">
            Verify {emoji}
          </button>
        </div>
        {showTranslation && (
          <p
            className={`font-bold text-lg ${
              isTranslated ? ` text-green-500 ` : `text-red-500`
            }`}
          >
            {item.translation}
          </p>
        )}
      </div>
    </div>
  );
};

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
    if (noRandom) {
      setShowRomanji(false);
      stopWatchProps.handleReset();
      return;
    }
    const dataCopy = source.concat();
    const random = shuffle(dataCopy).slice(0, 12);
    setData(random);
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
              Showing {data.length} of {source.length}
            </p>
            <Timer {...stopWatchProps} defaultTime={stopWatchProps.time} />
          </div>
        </div>
      </div>
      <div className="relative z-10 grid w-full gap-2 bg-gray-700 shadow-xl p-4 rounded gap-y-6 ">
        {data.map((item, key) => (
          <Conversation
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
