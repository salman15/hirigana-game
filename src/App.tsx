import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ControlButtons from "./components/ControlButtons";
import Timer from "./components/Timer";
import Video from "./components/Video";
import { hiragana, hiraganaType } from "./data/hiragana";
import useStopWatch from "./hooks/useStopWatch";
import { createConfetti } from "./confetti/confetti";

const shuffle = (array: Array<hiraganaType>) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const randomDeck = () => {
  const shuffleHiragana = shuffle(hiragana).slice(0, 12);
  return shuffle([...shuffleHiragana, ...shuffleHiragana]);
};

const data = randomDeck();

const confetti = createConfetti();

function App() {
  const [select1, setSelect1] = useState<string>();
  const [select2, setSelect2] = useState<string>();
  const [characters, setCharacters] = useState(data);
  const [found, setFound] = useState<string[]>([]);
  const [hide, setHide] = useState(true);
  const [clicks, setClicks] = useState(0);
  const toggleHide = () => {
    setHide(!hide);
  };

  const stopWatchProps = useStopWatch();

  const handleFound = (hiragana: string) => {
    const nakedOne = select1 && select1.split("-")[0];
    const nakedHiragana = hiragana.split("-")[0];

    if (nakedOne === nakedHiragana) {
      setFound([...found, nakedHiragana]);
      return true;
    } else return false;
  };

  const startStopWatch = () =>
    !stopWatchProps.isActive && stopWatchProps.handleStart();

  const toggleCard = (hiragana: string) => {
    if (select1 === hiragana) {
      setSelect1(undefined);
    } else if (select2 === hiragana) {
      setSelect2(undefined);
    } else if (!select1) {
      setSelect1(hiragana);
    } else if (select1 && !select2) {
      setSelect2(hiragana);
      handleFound(hiragana);
    } else {
      setSelect1(hiragana);
      setSelect2(undefined);
    }
  };

  const setSelectedCards = (hiragana: string) => {
    setClicks(clicks + 1);
    startStopWatch();
    toggleCard(hiragana);
  };

  const reset = () => {
    stopWatchProps.handleReset();
    setFound([]);
    setSelect1(undefined);
    setSelect2(undefined);
    setClicks(0);
    const data = randomDeck();
    setCharacters(data);
    confetti.clear();
  };

  useEffect(() => {
    if (found.length === characters.length / 2) {
      stopWatchProps.handlePauseResume();
      confetti.render();
    }
  }, [found, characters]);

  const selectCards = { one: select1, two: select2 };

  return (
    <div className="App w-full ">
      <Video hide={hide} />
      <div className="flex justify-between items-center sticky top-0 py-2 bg-main z-20">
        <ControlButtons
          {...stopWatchProps}
          handleReset={reset}
          hide={hide}
          toggleHide={toggleHide}
        />
        <div className="w-full flex flex-col items-end">
          <p className="w-full text-right">
            Found: ({found.length}/{characters.length / 2})
          </p>
          <p className="text-right">Clicks: ({clicks})</p>
          <Timer time={stopWatchProps.time} />
        </div>
      </div>
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 w-full gap-4 bg-gray-700 shadow-xl p-4 rounded">
        {characters.map((item, index) => (
          <Card
            found={!!found.find((found) => found === item.hiragana)}
            item={item}
            index={index}
            key={`${item.hiragana}-${index}`}
            selectedCards={selectCards}
            setSelectedCards={setSelectedCards}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
