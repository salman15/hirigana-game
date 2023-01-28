import { FC } from "react";
import { Link } from "react-router-dom";
import useDocumentTitle from "./hooks/useDocumentTitle";

const App: FC = () => {
  useDocumentTitle("Hiragana game | Select your game");

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen space-y-4">
      <h1>Select your game. / げむおせんたくしま。</h1>
      <div className="flex space-x-4">
        <Link className="bg-gray-700 shadow-xl p-4 rounded" to="/memory">
          めもり 🧠
        </Link>
        <Link className="bg-gray-700 shadow-xl p-4 rounded" to="/conversation">
          かいわ 💬
        </Link>
      </div>
    </div>
  );
};

export default App;
