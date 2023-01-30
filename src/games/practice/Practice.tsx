import { FC, useState } from "react";
import useDocumentTitle from "../../hooks/useDocumentTitle";
import ControlButtons from "../components/ControlButtons";
import Input from "../components/Input";
import Card from "../memory/components/Card";
import Video from "../memory/components/Video";
import { hiragana } from "../memory/data/hiragana";

const Practice: FC = () => {
  useDocumentTitle("🎯 Hiragana game ");

  const [hide, setHide] = useState(true);
  const [translate, setTranslate] = useState("");
  const [search, setSearch] = useState("");

  const toggleHide = () => {
    setHide(!hide);
  };

  const findTranslation = () => {
    const words = translate.split(" ");
    const translation = words.map(
      (word) =>
        hiragana.find(
          (text) =>
            text.hiragana === word.toLowerCase() ||
            text.romanji === word.toLowerCase()
        )?.hiragana
    );

    return translation.join(" ");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(foundTranslation.replaceAll(" ", ""));
  };

  const foundTranslation = findTranslation();

  const filteredCharacters = hiragana.filter(
    (filter) =>
      filter.romanji.includes(search.toLowerCase()) ||
      filter.hiragana.includes(search.toLowerCase())
  );

  return (
    <div className="App w-full p-4">
      <Video hide={hide} />
      <div className=" flex-col flex justify-between items-center sticky top-0 py-2 bg-main z-20">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <ControlButtons hide={hide} toggleHide={toggleHide} />
          <div className="w-full md:w-1/2 flex flex-col items-end">
            <p className="w-full text-right">Total: {hiragana.length}</p>
          </div>
        </div>

        <p className="w-full text-left">
          Enter Romanji (use spaces between characters):
        </p>
        <Input
          className="w-full p-4 rounded mb-4 text-gray-800"
          placeholder="Type in sentence..."
          value={translate}
          onChange={(e) => setTranslate(e.target.value)}
        />
        <p className="w-full text-left">Output in Hiragana:</p>
        <div className="w-full flex space-x-4">
          <Input
            className="w-full p-4 rounded mb-4 text-gray-800"
            placeholder="Your text in Hiragana or Romanji"
            value={foundTranslation}
          />
          <button className="h-full flex" onClick={copyToClipboard}>
            📋 copy
          </button>
        </div>
        <p className="w-full text-left">Search:</p>
        <Input
          className="w-full p-4 rounded mb-4 text-gray-800"
          placeholder="Type in character..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 w-full gap-4 bg-gray-700 shadow-xl p-4 rounded">
        {filteredCharacters.map((item, index) => (
          <Card
            found={true}
            item={item}
            index={index}
            key={`${item.hiragana}-${index}`}
            selectedCards={{}}
            setSelectedCards={() => undefined}
          />
        ))}
      </div>
    </div>
  );
};

export default Practice;
