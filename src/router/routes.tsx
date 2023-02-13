import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Conversations from "../games/conversation/Conversations";
import ConversationsWithFilters from "../games/conversation/ConverstationsWithFilters";
import { conversations } from "../games/conversation/data/conversations";
import { words, wordsObj } from "../games/conversation/data/words";
import { days } from "../games/conversation/data/words/days";
import { dayOfTheMonth, months } from "../games/conversation/data/words/months";
import { numbers } from "../games/conversation/data/words/numbers";
import { hiragana } from "../games/memory/data/hiragana";
import { katakana } from "../games/memory/data/katakana";
import Memory from "../games/memory/Memory";
import PracticeMemory from "../games/practice/PracticeMemory";
import PracticeWords from "../games/practice/PracticeWords";
import { randomDeck, shuffle } from "../games/utils/shuffle";

const dataCopyConversations = conversations.concat();
const randomConversations = randomDeck(dataCopyConversations);

const randomWords = {
  ...wordsObj,
  all: randomDeck(wordsObj.all.concat().slice(0, 12)),
};

const copyDays = days.concat();
const randomDays = randomDeck(copyDays);

const copyNumbers = numbers.concat();
const randomNumbers = randomDeck(copyNumbers);

const copyDayOfTheMonth = dayOfTheMonth.concat();
const randomDayOfTheMonth = randomDeck(copyDayOfTheMonth);

const copyMonths = months.concat();
const randomMonths = randomDeck(copyMonths);

const copyHiragana = hiragana.concat();
const randomHiragana = randomDeck(copyHiragana);

const copyKatakana = katakana.concat();
const randomKatakana = randomDeck(copyKatakana);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/memory",
    element: (
      <Memory
        random={shuffle([...randomHiragana, ...randomHiragana])}
        source={hiragana}
        type="hiragana"
      />
    ),
  },
  {
    path: "/memory-katakana",
    element: (
      <Memory
        random={shuffle([...randomKatakana, ...randomKatakana])}
        source={katakana}
        type="kana"
      />
    ),
  },
  {
    path: "/conversation",
    element: (
      <Conversations random={randomConversations} source={conversations} />
    ),
  },
  {
    path: "/words",
    element: (
      <ConversationsWithFilters random={randomWords} source={wordsObj} />
    ),
  },
  {
    path: "/days",
    element: <Conversations random={randomDays} source={days} noRandom />,
  },
  {
    path: "/day-of-the-month",
    element: (
      <Conversations
        random={randomDayOfTheMonth}
        source={dayOfTheMonth}
        noRandom
      />
    ),
  },
  {
    path: "/months",
    element: <Conversations random={randomMonths} source={months} noRandom />,
  },
  {
    path: "/counting",
    element: <Conversations random={randomNumbers} source={numbers} noRandom />,
  },
  {
    path: "/practice-memory",
    element: <PracticeMemory />,
  },
  {
    path: "/practice-words",
    element: <PracticeWords />,
  },
]);
