import { conversationType } from "./conversations";
import { days } from "./words/days";
import { meat, fruit, vegetables, fish } from "./words/food";
import { google } from "./words/google";
import { lesson3, lesson4, lesson5, lesson6, lessons } from "./words/lessons";
import { dayOfTheMonth, months } from "./words/months";
import { numbers } from "./words/numbers";

const other: conversationType[] = [
  //
  {
    hiragana: "じしょ",
    romanji: "Jishyo",
    translation: ["dictionary"],
  },
  {
    hiragana: "かいしゃいん",
    romanji: "Kaisha in",
    translation: ["company employee"],
  },
  {
    hiragana: "さん",
    romanji: "san",
    translation: ["Mr. / Ms."],
  },
  {
    hiragana: "せんせい",
    romanji: "Sensei",
    translation: ["teacher"],
  },
  {
    hiragana: "きょうし",
    romanji: "kyoushi",
    translation: ["instructor"],
  },
  {
    hiragana: "がくせい",
    romanji: "gakusei",
    translation: ["student"],
  },
  {
    hiragana: "しけさん",
    romanji: "Shikesan",
    translation: ["test"],
  },
  {
    hiragana: "しゅくだい",
    romanji: "Shukudai",
    translation: ["homework"],
  },
  {
    hiragana: "なまえ",
    romanji: "namae",
    translation: ["name"],
  },
  {
    hiragana: "しつもん",
    romanji: "Shitsumon",
    translation: ["question"],
  },
  {
    hiragana: "こたえ",
    romanji: "kotae",
    translation: ["answer"],
  },
  {
    hiragana: "れい",
    romanji: "rei",
    translation: ["example"],
  },
  {
    hiragana: "おねがいします。",
    romanji: "Onegaishimasu",
    translation: ["Please"],
  },
  {
    hiragana: "わたし",
    romanji: "Watashi",
    translation: ["I"],
  },
  {
    hiragana: "あなた",
    romanji: "Anata",
    translation: ["You"],
  },
  {
    hiragana: "おもしろい",
    romanji: "Omoshiroi",
    translation: ["interesting"],
  },
  {
    hiragana: "はやい",
    romanji: "Hayai",
    translation: ["fast"],
  },
  {
    hiragana: "かなし",
    romanji: "Kanashī",
    translation: ["sad"],
  },
  {
    hiragana: "はぴ",
    romanji: "Happī",
    translation: ["happy"],
  },
  {
    hiragana: "つまらない",
    romanji: "Tsumaranai",
    translation: ["boring"],
  },
  {
    hiragana: "いいね",
    romanji: "I ne",
    translation: ["cool"],
  },
  {
    hiragana: "におい",
    romanji: "Nioi",
    translation: ["smell"],
  },
  {
    hiragana: "おいしい",
    romanji: "Oishī",
    translation: ["tasty"],
  },
  {
    hiragana: "はな",
    romanji: "hana",
    translation: ["flower"],
  },
  {
    hiragana: "いぬ",
    romanji: "Inu",
    translation: ["dog"],
  },
  {
    hiragana: "ねこ",
    romanji: "Neko",
    translation: ["cat"],
  },
  {
    hiragana: "おとこ",
    romanji: "Otoko",
    translation: ["man"],
  },
  {
    hiragana: "じょせい",
    romanji: "Josei",
    translation: ["woman"],
  },
  {
    hiragana: "たかい",
    romanji: "Takai",
    translation: ["tall"],
  },
  {
    hiragana: "ちさな",
    romanji: "Chīsana",
    translation: ["small"],
  },
  {
    hiragana: "わるい",
    romanji: "Warui",
    translation: ["bad"],
  },
  {
    hiragana: "すとぷ",
    romanji: "Sutoppu",
    translation: ["stop"],
  },
  {
    hiragana: "もと",
    romanji: "Motto",
    translation: ["more"],
  },
  {
    hiragana: "いか",
    romanji: "Ika",
    translation: ["less"],
  },
  {
    hiragana: "だいじょぶ",
    romanji: "Daijōbu",
    translation: ["alright"],
  },
  {
    hiragana: "ともだち",
    romanji: "Tomodachi",
    translation: ["friend"],
  },
  {
    hiragana: "きょだい",
    romanji: "Kyōdai",
    translation: ["brother"],
  },
  {
    hiragana: "いもと",
    romanji: "Imōto",
    translation: ["sister"],
  },
  {
    hiragana: "おかあさん",
    romanji: "okaasan",
    translation: ["mother"],
  },
  {
    hiragana: "おとさん",
    romanji: "Otōsan",
    translation: ["father"],
  },
];

export const wordsObj: Record<string, conversationType[]> = {
  all: [
    ...numbers,
    ...days,
    ...months,
    ...dayOfTheMonth,
    ...lesson3,
    ...lesson4,
    ...lesson5,
    ...lesson6,
    ...google,
    ...other,
    ...meat,
    ...fruit,
    ...vegetables,
    ...fish,
  ],
  numbers,
  days,
  months,
  dayOfTheMonth,
  ...lessons,
  google,
  other,
  meat,
  fruit,
  vegetables,
  fish,
};

export const words: conversationType[] = [
  ...wordsObj.all,
  // 31 - 01 - 2023
];
