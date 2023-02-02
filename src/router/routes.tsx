import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Conversations from "../games/conversation/Conversations";
import {
  conversations,
  conversationType,
} from "../games/conversation/data/conversations";
import {
  dayOfTheMonth,
  days,
  months,
  numbers,
  words,
} from "../games/conversation/data/words";
import Memory from "../games/memory/Memory";
import PracticeMemory from "../games/practice/PracticeMemory";
import PracticeWords from "../games/practice/PracticeWords";
import { shuffle } from "../games/utils/shuffle";
import Words from "../games/words/Words";

const randomDeck = (dataCopy: conversationType[]) => {
  return shuffle(dataCopy).slice(0, 12);
};

const dataCopyConversations = conversations.concat();
const randomConversations = randomDeck(dataCopyConversations);

const dataCopyWords = words.concat();
const randomWords = randomDeck(dataCopyWords);

const copyDays = days.concat();
const randomDays = randomDeck(copyDays);

const copyNumbers = numbers.concat();
const randomNumbers = randomDeck(copyNumbers);

const copyDayOfTheMonth = dayOfTheMonth.concat();
const randomDayOfTheMonth = randomDeck(copyDayOfTheMonth);

const copyMonths = months.concat();
const randomMonths = randomDeck(copyMonths);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/memory",
    element: <Memory />,
  },
  {
    path: "/conversation",
    element: (
      <Conversations random={randomConversations} source={conversations} />
    ),
  },
  {
    path: "/words",
    element: <Conversations random={randomWords} source={words} />,
  },
  {
    path: "/days",
    element: <Conversations random={randomDays} source={days} />,
  },
  {
    path: "/day-of-the-month",
    element: (
      <Conversations random={randomDayOfTheMonth} source={dayOfTheMonth} />
    ),
  },
  {
    path: "/months",
    element: <Conversations random={randomMonths} source={months} />,
  },
  {
    path: "/counting",
    element: <Conversations random={randomNumbers} source={numbers} />,
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
