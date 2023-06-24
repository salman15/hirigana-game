import { FC, useState } from "react";
import back from "../assets/card.png";
import { charactersType } from "../data/hiragana";

const Card: FC<{
  found: boolean;
  item: charactersType;
  selectedCards: { one?: string; two?: string };
  setSelectedCards: (hiragana: string) => void;
  index: number;
  type: "hiragana" | "kana";
}> = ({ item, type, selectedCards, found, index, setSelectedCards }) => {
  const hiraganaIndex = `${item[type]}-${index}`;

  const [showRomanji, setShowRomanji] = useState(false);

  const toggleRomanji = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();

    setShowRomanji(!showRomanji);
  };

  const selected =
    hiraganaIndex === selectedCards.one ||
    hiraganaIndex === selectedCards.two ||
    found;
  return (
    <div
      aria-label={item.hiragana}
      className={`h-28 lg:h-64 w-full p-2 lg:p-4 bg-blue-600 rounded shadow-lg flex items-center justify ${
        found ? "opacity-50 center pointer-events-none " : ""
      }`}
    >
      <div
        className="flex items-center justify-center flex-col center h-64 max-h-full w-full "
        onClick={() => setSelectedCards(hiraganaIndex)}
      >
        {selected ? (
          <>
            <p className="w-full text-center lg:text-6xl">{item[type]}</p>
            {(showRomanji || found) && (
              <p className="w-full text-center lg:text-6xl mt-2 pt-2 border-t-2">
                {item.romanji}
              </p>
            )}
            {!found && (
              <button
                onClick={toggleRomanji}
                className="lg:mt-4  p-1 lg:p w-full"
              >
                <p className="hidden lg:block">
                  {showRomanji ? "Hide" : `Show`} Romanji
                </p>
                <p className="lg:hidden p-0">{showRomanji ? "Hide" : `Show`}</p>
              </button>
            )}
          </>
        ) : (
          <img className="w-full h-full p-2" src={back} />
        )}
      </div>
    </div>
  );
};

export default Card;
