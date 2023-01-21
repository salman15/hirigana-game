import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Card from "./components/Card";
import { hirigana, HiriganaType } from "./data/hirigana";
import StopWatch from "./components/StopWatch";
import useStopWatch from "./hooks/useStopWatch";

const shuffle = (array: Array<HiriganaType>) => {
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

const shuffleHirigana = shuffle([...hirigana]).slice(0, 12);
const data = [...shuffleHirigana, ...shuffleHirigana];

function App() {
  const [select1, setSelect1] = useState<string>();
  const [select2, setSelect2] = useState<string>();
  const stopWatchProps = useStopWatch();

  const setSelectedCards = (hirigana: string) => {
    if (!stopWatchProps.isActive) stopWatchProps.handleStart();

    if (select1 === hirigana) {
      setSelect1(undefined);
    } else if (select2 === hirigana) {
      setSelect2(undefined);
    } else if (!select1) {
      setSelect1(hirigana);
    } else if (select1 && !select2) {
      setSelect2(hirigana);
    } else {
      setSelect1(hirigana);
      setSelect2(undefined);
    }
  };

  const selectCards = { one: select1, two: select2 };

  return (
    <div className="App w-full ">
      <StopWatch {...stopWatchProps} />

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 w-full gap-4 bg-gray-700 shadow-xl p-4 rounded">
        {data.map((item, index) => (
          <Card
            item={item}
            index={index}
            key={`${item.hirigana}-${index}`}
            selectedCards={selectCards}
            setSelectedCards={setSelectedCards}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
