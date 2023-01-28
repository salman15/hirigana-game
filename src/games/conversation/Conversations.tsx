import { FC, useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import ControlButtons from "../components/ControlButtons";
import Input from "../components/Input";
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
            className="min-w-conversationInput"
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
  const noop = () => undefined;
  return (
    <div>
      <ControlButtons
        {...stopWatchProps}
        handleReset={noop}
        hide={false}
        toggleHide={noop}
        showAll={noop}
      />
      <div className="relative z-10 grid grid-cols-2 w-full gap-4 bg-gray-700 shadow-xl p-4 rounded">
        {random.map((item, key) => (
          <Conversation key={key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Conversations;
