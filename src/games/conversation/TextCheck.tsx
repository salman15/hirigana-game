import { FC, useState } from "react";
import Input from "../components/Input";
import { conversationType } from "./data/conversations";

type TextCheckType = {
  item: conversationType;
  startGame: () => void;
  handleVerified: (item: conversationType) => void;
  isStarted: boolean;
  showRomanji: boolean;
  isOne?: boolean;
  onClick?: () => void;
};

const TextCheck: FC<TextCheckType> = ({
  item,
  isStarted,
  startGame,
  handleVerified,
  showRomanji,
  isOne,
  onClick,
}) => {
  const [showTranslation, setShowTranslation] = useState(false);
  const [translation, setTranslation] = useState("");
  const [emoji, setEmoji] = useState<"✅" | "❌" | "">("");

  const findTranslation = (translation: string) => {
    return !!item.translation.find(
      (item) => item.toLowerCase() === translation.toLowerCase()
    );
  };

  const isTranslated = findTranslation(translation);
  const verify = () => {
    if (!isOne) {
      const emoji = isTranslated ? "✅" : "❌";
      setShowTranslation(!showTranslation);
      setEmoji(emoji);
    } else if (!isTranslated) {
      setShowTranslation(true);
    }

    !isStarted && startGame();
    if (isTranslated) {
      handleVerified(item);
      if (onClick) onClick();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (findTranslation(value)) {
      setEmoji("✅");
      setShowTranslation(true);
      handleVerified(item);
    }

    setTranslation(value);
    !isStarted && startGame();
  };

  return (
    <div
      className={
        isOne
          ? "grid grid-cols-1 gap-4 items-center p-4  bg-gray-800 bg-opacity-20 "
          : "grid grid-cols-1 md:grid-cols-2 gap-4 items-center  p-4 bg-gray-800 bg-opacity-20 "
      }
    >
      <div>
        <p className="text-2xl lg:text-4xl">{item.hiragana}</p>
        {showRomanji && (
          <p className="text-xl lg:text-3xl mt-2 pt-2 border-t-2">
            {item.romanji}
          </p>
        )}
        {showTranslation && (
          <>
            <p
              className={`font-bold text-lg lg:w-full lg:text-left mt-2 pt-2 border-t-2 ${
                isTranslated
                  ? ` text-green-500 border-green-500`
                  : `text-red-500 border-red-500`
              }`}
            >
              {item.translation.join(" or ")}
            </p>
            {item.explanation && (
              <p className="font-cursive lg:text-left lg:w-full">
                {item.explanation}
              </p>
            )}
          </>
        )}
      </div>
      <div className="flex flex-col lg:items-end space-y-4">
        <div className={`flex space-x-4 ${isOne ? "w-full" : "lg:w-full"} `}>
          <Input
            onKeyDown={(event) => event.key === "Enter" && verify()}
            defaultValue={""}
            onChange={handleInput}
            className={`w-conversationInput ${
              isOne ? "w-full" : "lg:w-full"
            } max-w-full`}
            name="translation"
            placeholder="Translate this sentence."
          />
          <button onClick={verify} className="">
            {isOne ? "Next" : `Verify ${emoji}`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextCheck;
