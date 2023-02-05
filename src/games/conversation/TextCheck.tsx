import { FC, useState } from "react";
import Input from "../components/Input";
import { conversations } from "./data/conversations";

const TextCheck: FC<{
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

export default TextCheck;
