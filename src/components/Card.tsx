import { FC, useEffect, useState } from "react";
import { hirigana, HiriganaType } from "../data/hirigana";
import back from "../assets/card.png";

const Card: FC<{
  item: HiriganaType;
  selectedCards: { one?: string; two?: string };
  setSelectedCards: (hirigana: string) => void;
  index: number;
}> = ({ item, selectedCards, index, setSelectedCards }) => {
  const hiriganaIndex = `${item.hirigana}-${index}`;

  const [showRomanji, setShowRomanji] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const nakedOne = selectedCards.one && selectedCards?.one.split("-")[0];
    const nakedTwo = selectedCards.two && selectedCards?.two.split("-")[0];
    if (nakedOne === item.hirigana && nakedTwo === item.hirigana)
      setHidden(true);
  }, [selectedCards]);

  const toggleRomanji = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();

    setShowRomanji(!showRomanji);
  };

  const selected =
    hiriganaIndex === selectedCards.one ||
    hiriganaIndex === selectedCards.two ||
    hidden;
  return (
    <div
      className={`h-64 w-full p-4 bg-blue-600 rounded shadow-lg flex items-center justify ${
        hidden ? "opacity-50 center pointer-events-none " : ""
      }`}
    >
      <div
        className="flex items-center justify-center flex-col center h-64 w-full "
        onClick={() => setSelectedCards(hiriganaIndex)}
      >
        {selected ? (
          <>
            <p className="w-full text-center text-6xl">{item.hirigana}</p>
            {(showRomanji || hidden) && (
              <p className="w-full text-center text-6xl mt-2 pt-2 border-t-2">
                {item.romanji}
              </p>
            )}
            {!hidden && (
              <button onClick={toggleRomanji} className="mt-4">
                {showRomanji ? "Hide" : `Show`} Romanji
              </button>
            )}
          </>
        ) : (
          <img src={back} />
        )}
      </div>
    </div>
  );
};

export default Card;
