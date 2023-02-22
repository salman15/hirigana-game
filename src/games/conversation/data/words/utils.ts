import { conversationType } from "../conversations";

export const createOutput = (length: number) => {
  const words: conversationType[] = [];
  for (let i = 0; length > i; i++) {
    words.push({
      hiragana: "",
      romanji: "",
      translation: [""],
    });
  }
  return words;
};
