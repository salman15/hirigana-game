import { FC, useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import ControlButtons from "../components/ControlButtons";
import Input from "../components/Input";
import Timer from "../components/Timer";
import useStopWatch from "../hooks/useStopWatch";
import { shuffle } from "../utils/shuffle";
import { conversations } from "./data/conversations";

const dataCopy = conversations.concat();

const randomDeck = () => {
  return shuffle(dataCopy).slice(0, 12);
};

const random = randomDeck();

const Conversation: FC<{ item: typeof conversations[0] }> = ({ item }) => {
  const [showTranslation, setShowTranslation] = useState(false);
  const [translation, setTranslation] = useState("");
  const [emoji, setEmoji] = useState<string>();

  const isTranslated =
    item.translation.toLowerCase() === translation.toLowerCase();

  const verify = () => {
    const emoji = isTranslated ? "✅" : "❌";
    setEmoji(emoji);
    setShowTranslation(!showTranslation);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.toLowerCase() === item.translation.toLowerCase()) {
      setEmoji("✅");
    }

    setTranslation(value);
  };

  return (
    <>
      <div>
        <p className="text-4xl">{item.hiragana}</p>
        <p className="text-3xl mt-2 pt-2 border-t-2">{item.romanji}</p>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex space-x-4 ">
          <Input
            onChange={handleInput}
            className="w-conversationInput max-w-full"
            name="translation"
            placeholder="Translate this sentence."
          />
          <button onClick={verify} className="h-12">
            Verify {emoji}
          </button>
        </div>
        {showTranslation && (
          <p className={isTranslated ? ` text-green-700 ` : `text-red-700`}>
            {item.translation}
          </p>
        )}
      </div>
    </>
  );
};

const Conversations: FC = () => {
  useDocumentTitle("💬 Hiragana game ");
  const stopWatchProps = useStopWatch();
  return (
    <div className="m-4">
      <div className="flex justify-between items-center w-full">
        <ControlButtons {...stopWatchProps} />
        <div className="w-full flex flex-col items-end">
          <Timer time={stopWatchProps.time} />
        </div>
      </div>
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 w-full gap-4 bg-gray-700 shadow-xl p-4 rounded gap-y-6 items-center">
        {random.map((item, key) => (
          <Conversation key={key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Conversations;
