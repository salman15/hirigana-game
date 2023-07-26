import { FC } from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "./hooks/useDocumentTitle";

const App: FC = () => {
  useDocumentTitle("Hiragana game | Select your game");
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen w-screen space-y-4 p-4">
        <h1>Select your game. / げむおせんたくしま。</h1>
        <div className="grid md:grid-cols-4 gap-4">
          <Link className="bg-gray-700 shadow-xl p-4 rounded" to="/memory">
            めもりひらがな / Memory hiragana🧠
          </Link>
          <Link
            className="bg-gray-700 shadow-xl p-4 rounded"
            to="/memory-katakana"
          >
            めもりひ カタカナ/ Memory Katakana🧠
          </Link>
          <Link className="bg-gray-700 shadow-xl p-4 rounded" to="/words">
            ことば / Words 👽
          </Link>
          <Link className="bg-gray-700 shadow-xl p-4 rounded" to="/guess">
            Guess 👽
          </Link>
          <Link className="bg-gray-700 shadow-xl p-4 rounded" to="/days">
            ひび / Days 📅
          </Link>
          <Link
            className="bg-gray-700 shadow-xl p-4 rounded"
            to="/day-of-the-month"
          >
            つきのひ / Day of the month 📆
          </Link>
          <Link className="bg-gray-700 shadow-xl p-4 rounded" to="/months">
            つき / Months 🈷️
          </Link>
          <Link className="bg-gray-700 shadow-xl p-4 rounded" to="/counting">
            かぞえる / Counting 🧮
          </Link>
          <Link
            className="bg-gray-700 shadow-xl p-4 rounded"
            to="/conversation"
          >
            かいわ / Conversation 💬
          </Link>
          <Link
            className="bg-gray-700 shadow-xl p-4 rounded"
            to="/practice-memory"
          >
            めもり れんしゅ / Practice memory 🎯🧠
          </Link>
          <Link
            className="bg-gray-700 shadow-xl p-4 rounded"
            to="/practice-words"
          >
            ことば れんしゅ / Practice Words 🎯👽
          </Link>
        </div>
      </div>
    </>
  );
};

export default App;
