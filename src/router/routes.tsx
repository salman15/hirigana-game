import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Conversations from "../games/conversation/Conversations";
import Memory from "../games/memory/Memory";

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
    element: <Conversations />,
  },
]);
