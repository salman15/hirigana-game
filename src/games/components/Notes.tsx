import { FC } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { grammarNotes } from "../conversation/data/notes/grammar";

const Notes: FC = () => {
  return (
    <div>
      {grammarNotes.map((note) => (
        <div>
          <h1>{note.title}</h1>
          <ReactMarkdown>{note.content}</ReactMarkdown>
        </div>
      ))}
    </div>
  );
};

export default Notes;
