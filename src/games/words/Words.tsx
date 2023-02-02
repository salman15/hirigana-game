import React from "react";
import { Link } from "react-router-dom";

const Words = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen space-y-4 p-4">
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <Link className="bg-gray-700 shadow-xl p-4 rounded" to="/words/all">
          すべて / All
        </Link>
        <Link className="bg-gray-700 shadow-xl p-4 rounded" to="/words/days">
          ひび / days
        </Link>
        <Link
          className="bg-gray-700 shadow-xl p-4 rounded"
          to="/words/counting"
        >
          かぞえる / counting
        </Link>
        {/* <Link className="bg-gray-700 shadow-xl p-4 rounded" to="/words/people">
        ひと / people
        </Link>
        <Link className="bg-gray-700 shadow-xl p-4 rounded" to="/words/ordering">
        ちゅもんする / ordering
    </Link> */}
      </div>
    </div>
  );
};

export default Words;
