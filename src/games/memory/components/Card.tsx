import { FC, useState } from "react";
import back from "../assets/card.png";
import { hiraganaType } from "../data/hiragana";

const Card: FC<{
  found: boolean;
  item: hiraganaType;
  selectedCards: { one?: string; two?: string };
  setSelectedCards: (hiragana: string) => void;
  index: number;
}> = ({ item, selectedCards, found, index, setSelectedCards }) => {
  const hiraganaIndex = `${item.hiragana}-${index}`;

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
      className={`h-64 w-full p-4 bg-blue-600 rounded shadow-lg flex items-center justify ${
        found ? "opacity-50 center pointer-events-none " : ""
      }`}
    >
      <div
        className="flex items-center justify-center flex-col center h-64 w-full "
        onClick={() => setSelectedCards(hiraganaIndex)}
      >
        {selected ? (
          <>
            <p className="w-full text-center text-6xl">{item.hiragana}</p>
            {(showRomanji || found) && (
              <p className="w-full text-center text-6xl mt-2 pt-2 border-t-2">
                {item.romanji}
              </p>
            )}
            {!found && (
              <button onClick={toggleRomanji} className="mt-4">
                {showRomanji ? "Hide" : `Show`} Romanji
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
