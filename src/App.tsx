import { FC } from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "./hooks/useDocumentTitle";

const App: FC = () => {
  useDocumentTitle("Hiragana game | Select your game");

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen space-y-4 p-4">
      <h1>Select your game. / げむおせんたくしま。</h1>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <Link className="bg-gray-700 shadow-xl p-4 rounded" to="/memory">
          めもり / Memory 🧠
        </Link>
        <Link className="bg-gray-700 shadow-xl p-4 rounded" to="/conversation">
          かいわ / Conversation 💬
        </Link>
        <Link className="bg-gray-700 shadow-xl p-4 rounded" to="/words">
          ことば / Words 👽
        </Link>
        <Link className="bg-gray-700 shadow-xl p-4 rounded" to="/practice">
          れんしゅ / Practice 🎯
        </Link>
      </div>
    </div>
  );
};

export default App;
