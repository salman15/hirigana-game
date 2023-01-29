import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Conversations from "../games/conversation/Conversations";
import {
  conversations,
  conversationType,
} from "../games/conversation/data/conversations";
import { words } from "../games/conversation/data/words";
import Memory from "../games/memory/Memory";
import { shuffle } from "../games/utils/shuffle";

const randomDeck = (dataCopy: conversationType[]) => {
  return shuffle(dataCopy).slice(0, 12);
};

const dataCopyConversations = conversations.concat();
const randomConversations = randomDeck(dataCopyConversations);

const dataCopyWords = words.concat();
const randomWords = randomDeck(dataCopyWords);

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
]);
