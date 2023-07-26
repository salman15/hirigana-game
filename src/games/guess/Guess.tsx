import { FC, PropsWithChildren, useCallback, useEffect, useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { toast } from "react-toastify";
import ControlButtons from "../components/ControlButtons";
import Timer from "../components/Timer";
import { conversationType } from "../conversation/data/conversations";
import useStopWatch from "../hooks/useStopWatch";
import { shuffle } from "../utils/shuffle";

type GuessListItemProps = {
  onClick: () => void;
  isPressed: boolean;
} & PropsWithChildren;

const GuessListItem: FC<GuessListItemProps> = ({
  children,
  isPressed,
  onClick,
}) => {
  return (
    <li
      onClick={onClick}
      className={`rounded p-4  ${isPressed ? "bg-blue-900" : "bg-blue-500"}`}
    >
      {children}
    </li>
  );
};

const Guess: FC<{ source: Record<string, conversationType[]> }> = ({
  source,
}) => {
  const stopWatchProps = useStopWatch();

  const types = Object.keys(source);
  const [data, setData] = useState(source);
  const [selected, setSelected] = useState<string>(types[0]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>();
  const [correctAnswers, setCorrectAnswers] = useState<conversationType[]>([]);
  const [words, setWords] = useState<conversationType[]>([]);
  const [translatedWords, setTranslatedWords] = useState<conversationType[]>(
    []
  );

  const shuffleWords = useCallback(() => {
    setWords(shuffle(data[selected].concat()));
    setTranslatedWords(shuffle(data[selected].concat()));
  }, [selected]);

  useEffect(() => {
    shuffleWords();
  }, []);

  const handleReset = () => {
    const dataCopy = source[selected]?.concat();
    const random = shuffle(dataCopy).slice(0, 48);
    setData({ ...source, [selected]: random });
    stopWatchProps.handleReset();
    setCorrectAnswers([]);
    shuffleWords();
  };

  const onItemClick = (item: conversationType, key: "hiragana" | "romanji") => {
    const value = item[key];
    if (!selectedAnswer) setSelectedAnswer(item[key]);
    else if (selectedAnswer === value) {
      setCorrectAnswers([...correctAnswers, item]);
      setSelectedAnswer(undefined);
      toast.success("Correct answer!");
    } else {
      setSelectedAnswer(undefined);
      toast.warn("Incorrect answer!");
    }
  };

  return (
    <div className="App m-4">
      <div className=" lg:flex flex-col justify-between items-center sticky top-0 py-2 bg-main z-20">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <ControlButtons
            {...stopWatchProps}
            handleReset={() => {
              toast.success("Reset the game!");
              handleReset();
            }}
          >
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex justify-center align-center ${
                showFilters ? "bg-blue-600" : ""
              }`}
            >
              {showFilters ? <BiShow /> : <BiHide />}
            </button>
          </ControlButtons>

          <div className="w-full md:w-1/2 flex lg:flex-col items-center justify-between lg:items-end">
            <p className="lg:w-full text-right">
              Showing {words.length} of {data[selected].length}
            </p>
            <p>Correct: {correctAnswers.length}</p>
            <Timer {...stopWatchProps} defaultTime={stopWatchProps.time} />
          </div>
        </div>
        {showFilters && (
          <ul className="grid grid-cols-3 gap-2 md:grid-cols-2 lg:gap-4 lg:flex lg:flex-wrap lg:items-start lg:justify-start lg:space-x-4  w-full">
            {types.map((type, i) => (
              <li className="w-full md:w-auto" key={i}>
                <button
                  className={`md:w-40 ${
                    selected === type ? "bg-blue-600" : ""
                  }`}
                  onClick={() => setSelected(type)}
                >
                  {`${type[0].toUpperCase()}${type.slice(1, type.length + 1)}`}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <ul className="space-y-4">
          {words.map((item, key) => (
            <GuessListItem
              key={key}
              onClick={() =>
                onItemClick(
                  item,
                  selectedAnswer === item.romanji ? "romanji" : "hiragana"
                )
              }
              isPressed={
                !!correctAnswers.find(
                  (answer) => answer.hiragana === item.hiragana
                ) || selectedAnswer === item.hiragana
              }
            >
              {item.hiragana}
            </GuessListItem>
          ))}
        </ul>
        <ul className="space-y-4">
          {translatedWords.map((item, key) => (
            <GuessListItem
              key={key}
              onClick={() =>
                onItemClick(
                  item,
                  selectedAnswer === item.hiragana ? "hiragana" : "romanji"
                )
              }
              isPressed={
                !!correctAnswers.find(
                  (answer) => answer.romanji === item.romanji
                ) || selectedAnswer === item.romanji
              }
            >
              {item.translation}
            </GuessListItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Guess;
