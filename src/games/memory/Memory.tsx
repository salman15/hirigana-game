import { FC, useEffect, useState } from "react";
import Card from "./components/Card";
import ControlButtons from "../components/ControlButtons";
import Timer from "../components/Timer";
import Video from "./components/Video";
import { hiragana, hiraganaType } from "./data/hiragana";
import useStopWatch from "../hooks/useStopWatch";
import { createConfetti } from "../confetti/confetti";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import Input from "../components/Input";
import { shuffle } from "../utils/shuffle";

const dataCopy = hiragana.concat();

const randomDeck = () => {
  const shuffleHiragana = shuffle(dataCopy).slice(0, 12);
  return shuffle([...shuffleHiragana, ...shuffleHiragana]);
};

const data = randomDeck();

const confetti = createConfetti();

const Memory: FC = () => {
  useDocumentTitle("🧠 Hiragana game ");

  const [select1, setSelect1] = useState<string>();
  const [select2, setSelect2] = useState<string>();
  const [characters, setCharacters] = useState(data);
  const [found, setFound] = useState<string[]>([]);
  const [hide, setHide] = useState(true);
  const [clicks, setClicks] = useState(0);
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [translate, setTranslate] = useState("");
  const toggleHide = () => {
    setHide(!hide);
  };

  const stopWatchProps = useStopWatch();

  const handleFound = (hiragana: string, measureAgainst: string) => {
    const nakedOne = measureAgainst && measureAgainst.split("-")[0];
    const nakedHiragana = hiragana.split("-")[0];

    if (nakedOne === nakedHiragana) {
      setFound([...found, nakedHiragana]);
      return true;
    } else return false;
  };

  const startStopWatch = () =>
    !stopWatchProps.isActive && stopWatchProps.handleStart();

  const toggleCard = (hiragana: string) => {
    // If selected deselect
    if (select1 === hiragana) {
      setSelect1(undefined);
    }
    // If selected deselect
    else if (select2 === hiragana) {
      setSelect2(undefined);
    }
    // If select 1 is not selected select 1
    else if (!select1) {
      setSelect1(hiragana);
      if (select2) handleFound(hiragana, select2);
    }
    // If select 2 is not selected select 2 and see if it's found
    else if (select1 && !select2) {
      setSelect2(hiragana);
      handleFound(hiragana, select1);
    }
    // default back to selecting the first one and deselecting the second one
    else {
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

  const handleShowAll = () => {
    if (showAll) {
      reset();
      setShowAll(false);
    } else {
      const foundAll = hiragana.map((item) => item.hiragana);
      setFound(foundAll);
      setCharacters(hiragana);
      setShowAll(true);
      stopWatchProps.handlePauseResume();
    }
  };

  const findTranslation = () => {
    const words = translate.split(" ");
    const translation = words.map(
      (word) =>
        hiragana.find(
          (text) =>
            text.hiragana === word.toLowerCase() ||
            text.romanji === word.toLowerCase()
        )?.hiragana
    );

    return translation.join(" ");
  };

  const foundTranslation = findTranslation();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(foundTranslation.replaceAll(" ", ""));
  };

  useEffect(() => {
    if (found.length === characters.length / 2) {
      stopWatchProps.handlePauseResume();
      confetti.render();
    }
  }, [found, characters]);

  const selectCards = { one: select1, two: select2 };
  const filteredCharacters = characters.filter(
    (filter) =>
      filter.romanji.includes(search.toLowerCase()) ||
      filter.hiragana.includes(search.toLowerCase())
  );
  return (
    <div className="App w-full p-4">
      <Video hide={hide} />
      <div className=" flex-col flex justify-between items-center sticky top-0 py-2 bg-main z-20">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <ControlButtons
            {...stopWatchProps}
            handleReset={reset}
            hide={hide}
            toggleHide={toggleHide}
            showAll={handleShowAll}
          />
          <div className="w-full md:w-1/2 flex flex-col items-end">
            <p className="w-full text-right">
              Found: ({found.length}/{characters.length / 2})
            </p>
            <p className="text-right">Clicks: ({clicks})</p>
            <Timer {...stopWatchProps} defaultTime={stopWatchProps.time} />
          </div>
        </div>
        {showAll && (
          <>
            <p className="w-full text-left">
              Enter Romanji (use spaces between characters):
            </p>
            <Input
              className="w-full p-4 rounded mb-4 text-gray-800"
              placeholder="Type in sentence..."
              value={translate}
              onChange={(e) => setTranslate(e.target.value)}
            />
            <p className="w-full text-left">Output in Hiragana:</p>
            <div className="w-full flex space-x-4">
              <Input
                className="w-full p-4 rounded mb-4 text-gray-800"
                placeholder="Your text in Hiragana or Romanji"
                value={foundTranslation}
              />
              <button className="h-full flex" onClick={copyToClipboard}>
                📋 copy
              </button>
            </div>
            <p className="w-full text-left">Search:</p>
            <Input
              className="w-full p-4 rounded mb-4 text-gray-800"
              placeholder="Type in character..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </>
        )}
      </div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 w-full gap-4 bg-gray-700 shadow-xl p-4 rounded">
        {filteredCharacters.map((item, index) => (
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
};

export default Memory;
