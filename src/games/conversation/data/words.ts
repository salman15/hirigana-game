import { conversationType } from "./conversations";
import { days } from "./words/days";
import { google } from "./words/google";
import { lesson5 } from "./words/lessons";
import { dayOfTheMonth, months } from "./words/months";
import { numbers } from "./words/numbers";

const other: conversationType[] = [
  {
    hiragana: "おきます",
    romanji: "Okimasu",
    translation: ["get up"],
  },
  {
    hiragana: "ねます",
    romanji: "Nemasu",
    translation: ["go to bed"],
  },
  {
    hiragana: "はたらきます",
    romanji: "hatarakimasu",
    translation: ["work"],
  },
  {
    hiragana: "やすみます",
    romanji: "yasumimasu",
    translation: ["take a rest"],
  },
  {
    hiragana: "べんきょうします",
    romanji: "benkyushimasu",
    translation: ["study"],
  },
  {
    hiragana: "おわります",
    romanji: "owarimasu",
    translation: ["finish"],
  },
  {
    hiragana: "ぎんこう",
    romanji: "ginkou",
    translation: ["bank"],
  },
  {
    hiragana: "ゆうびんきょく",
    romanji: "yuubinkyoku",
    translation: ["post office"],
  },
  {
    hiragana: "としょかん",
    romanji: "toshokan",
    translation: ["library"],
  },
  {
    hiragana: "びじゅつかん",
    romanji: "bijutsukan",
    translation: ["art museum"],
  },
  {
    hiragana: "いま",
    romanji: "ima",
    translation: ["now"],
  },
  {
    hiragana: "-じ",
    romanji: "-ji",
    translation: ["o'clock"],
  },
  {
    hiragana: "ぺじ",
    romanji: "peji",
    translation: ["page"],
  },
  {
    hiragana: "－ふん",
    romanji: "-hun",
    translation: ["minute"],
  },
  {
    hiragana: "はん",
    romanji: "han",
    translation: ["half"],
  },
  {
    hiragana: "ごぜん",
    romanji: "gozen",
    translation: ["am", "morning"],
  },
  {
    hiragana: "ごご",
    romanji: "gogo",
    translation: ["pm", "afternoon"],
  },
  {
    hiragana: "あさ",
    romanji: "asa",
    translation: ["morning"],
  },
  {
    hiragana: "ひる",
    romanji: "hiru",
    translation: ["noon"],
  },
  {
    hiragana: "ばん",
    romanji: "ban",
    translation: ["evening"],
  },
  {
    hiragana: "おととい",
    romanji: "ototoi",
    translation: ["the day before yesterday"],
  },
  {
    hiragana: "きのう",
    romanji: "kinou",
    translation: ["yesterday"],
  },
  {
    hiragana: "きょう",
    romanji: "kyou",
    translation: ["today"],
  },
  {
    hiragana: "あした",
    romanji: "ashita",
    translation: ["tomorrow"],
  },
  {
    hiragana: "あさって",
    romanji: "asatsute",
    translation: ["the day after tomorrow"],
  },
  {
    hiragana: "けさ",
    romanji: "kesa",
    translation: ["this morning"],
  },
  {
    hiragana: "こんばん",
    romanji: "konban",
    translation: ["tonight"],
  },
  {
    hiragana: "やすみ",
    romanji: "yasumi",
    translation: ["a day off"],
  },
  {
    hiragana: "ひるやすみ",
    romanji: "hiruyasumi",
    translation: ["lunchtime"],
  },
  {
    hiragana: "なんじ ",
    romanji: "nanji",
    translation: ["what time"],
  },
  {
    hiragana: "しけん",
    romanji: "shiken",
    translation: ["examination"],
  },
  {
    hiragana: "かいぎ",
    romanji: "kaigi",
    translation: ["meeting"],
  },
  {
    hiragana: "えいが",
    romanji: "eiga",
    translation: ["movie"],
  },
  {
    hiragana: "まいあさ",
    romanji: "maiasa",
    translation: ["every morning"],
  },
  {
    hiragana: "まいばん",
    romanji: "maiban",
    translation: ["every night"],
  },
  {
    hiragana: "まいにち",
    romanji: "mainichi",
    translation: ["every day"],
  },
  {
    hiragana: "なんようび",
    romanji: "nanyoubi",
    translation: ["what day of the week"],
  },
  {
    hiragana: "～から",
    romanji: "kara",
    translation: ["from"],
  },
  {
    hiragana: "～まで",
    romanji: "made",
    translation: ["until"],
  },
  {
    hiragana: "～と～",
    romanji: "to",
    translation: ["and"],
  },
  {
    hiragana: "たいへんですね。",
    romanji: "taihendesu",
    translation: ["it's though"],
  },
  {
    hiragana: "ばんごう",
    romanji: "bangou",
    translation: ["number"],
  },
  {
    hiragana: "なんばん",
    romanji: "nanban",
    translation: ["what number"],
  },
  {
    hiragana: "そちら",
    romanji: "sochira",
    translation: ["your place"],
  },

  // 30 - 01 - 2023
  {
    hiragana: "ここ",
    romanji: "koko",
    translation: ["here"],
  },
  {
    hiragana: "そこ",
    romanji: "soko",
    translation: ["there"],
  },
  {
    hiragana: "あそこ",
    romanji: "asoko",
    translation: ["that place over there"],
  },
  {
    hiragana: "どこ",
    romanji: "doko",
    translation: ["where"],
  },
  {
    hiragana: "どちら",
    romanji: "dochira",
    translation: ["which direction"],
  },
  {
    hiragana: "こちら",
    romanji: "kochira",
    translation: ["this way"],
  },
  {
    hiragana: "そちら (close)",
    romanji: "sochira",
    translation: ["that way"],
  },
  {
    hiragana: "あちら ",
    romanji: "achira (far)",
    translation: ["that way"],
  },
  {
    hiragana: "きょうしつ",
    romanji: "kyoushitsu",
    translation: ["classroom"],
  },
  {
    hiragana: "しょくどう",
    romanji: "shokudou",
    translation: ["dining hall"],
  },
  {
    hiragana: "じむしょ",
    romanji: "jimusho",
    translation: ["office"],
  },
  {
    hiragana: "かいぎしつ",
    romanji: "kaigishitsu",
    translation: ["conference room"],
  },
  {
    hiragana: "ひっこして",
    romanji: "Hitsukoshite",
    translation: ["moved"],
  },
  {
    hiragana: "きた",
    romanji: "kita",
    translation: ["came"],
  },
  {
    hiragana: "ばかり",
    romanji: "bakari",
    translation: ["just"],
  },
  {
    hiragana: "ほん",
    romanji: "Hon",
    translation: ["Book"],
  },
  {
    hiragana: "ざっし",
    romanji: "Zatsushi",
    translation: ["Magazine"],
  },
  {
    hiragana: "これ",
    romanji: "Kore",
    translation: ["This"],
  },
  {
    hiragana: "それ",
    romanji: "Sore (Near the listener)",
    translation: ["this"],
  },
  {
    hiragana: "あれ",
    romanji: "Are (thing over there)",
    translation: ["That"],
  },
  {
    hiragana: "その ~",
    romanji: "Sono (near)",
    translation: ["this"],
  },
  {
    hiragana: "あの ~",
    romanji: "Ano (far)",
    translation: ["this"],
  },
  {
    hiragana: "この ~",
    romanji: "Kono ~",
    translation: ["This"],
  },
  {
    hiragana: "てちょう",
    romanji: "Techou",
    translation: ["personal organiser"],
  },
  {
    hiragana: "めいし",
    romanji: "meishi",
    translation: ["business card"],
  },
  {
    hiragana: "えんぴつ",
    romanji: "Enpitsu",
    translation: ["pencil"],
  },
  {
    hiragana: "かぎ ",
    romanji: "kei",
    translation: ["key"],
  },
  {
    hiragana: "それとも",
    romanji: "soretomo",
    translation: ["or"],
  },
  {
    hiragana: "とけい",
    romanji: "tokei",
    translation: ["watch"],
  },
  {
    hiragana: "かさ",
    romanji: "kasa",
    translation: ["umbrella"],
  },
  {
    hiragana: "かばん",
    romanji: "kaban",
    translation: ["bag"],
  },
  {
    hiragana: "もの",
    romanji: "mono",
    translation: ["thing"],
  },
  {
    hiragana: "だれ",
    romanji: "dare",
    translation: ["who"],
  },
  {
    hiragana: "くるま",
    romanji: "Kuruma",
    translation: ["car"],
  },
  {
    hiragana: "つくえ",
    romanji: "Tsukue",
    translation: ["desk"],
  },
  {
    hiragana: "いす",
    romanji: "isu",
    translation: ["chair"],
  },
  {
    hiragana: "てれび",
    romanji: "Terebi",
    translation: ["Television"],
  },
  {
    hiragana: "むせん",
    romanji: "Musen",
    translation: ["radio"],
  },
  {
    hiragana: "かめら",
    romanji: "Kamera",
    translation: ["camera"],
  },
  {
    hiragana: "ちょこれと",
    romanji: "Chokoreto",
    translation: ["Chocolate"],
  },
  {
    hiragana: "こひ",
    romanji: "Kohi",
    translation: ["Coffee"],
  },
  {
    hiragana: "みやげ",
    romanji: "miyage",
    translation: ["present"],
  },
  {
    hiragana: "そうです。",
    romanji: "Soudesu",
    translation: ["I see"],
  },
  {
    hiragana: "そうですか。",
    romanji: "Soudesuka",
    translation: ["do you see"],
  },
  {
    hiragana: "から",
    romanji: "Kara",
    translation: ["from"],
  },
  {
    hiragana: "うけつけ",
    romanji: "Uketsuke",
    translation: ["reception desk"],
  },
  {
    hiragana: "へや",
    romanji: "heya",
    translation: ["room"],
  },
  {
    hiragana: "おてあらい",
    romanji: "Otearai",
    translation: ["toilet"],
  },
  {
    hiragana: "かいだん",
    romanji: "kaidan",
    translation: ["staircase"],
  },
  {
    hiragana: "じどうはんばいき",
    romanji: "jidouhanbaki",
    translation: ["vending machine"],
  },
  {
    hiragana: "でんわ",
    romanji: "denwa",
    translation: ["phone"],
  },
  {
    hiragana: "［お］くに",
    romanji: "[O]kuni",
    translation: ["Country"],
  },
  {
    hiragana: "かいしゃ",
    romanji: "kaisha",
    translation: ["company"],
  },
  {
    hiragana: "うち",
    romanji: "uchi",
    translation: ["house"],
  },
  {
    hiragana: "くつ",
    romanji: "kutsu",
    translation: ["shoes"],
  },
  {
    hiragana: "ほとんど",
    romanji: "Hotondo",
    translation: ["almost"],
  },
  {
    hiragana: "うりば",
    romanji: "uriba",
    translation: ["department counter"],
  },
  {
    hiragana: "ちか",
    romanji: "chika",
    translation: ["basement"],
  },
  {
    hiragana: "－かい",
    romanji: "-kai",
    translation: ["th floor"],
  },
  {
    hiragana: "これは",
    romanji: "koreha",
    translation: ["this is"],
  },
  {
    hiragana: "なんがい",
    romanji: "nangai",
    translation: ["what floor"],
  },
  {
    hiragana: "えん",
    romanji: "en",
    translation: ["yen"],
  },
  {
    hiragana: "いくら ",
    romanji: "ikura",
    translation: ["how much"],
  },
  {
    hiragana: "ひゃく",
    romanji: "hyaku",
    translation: ["hunderd"],
  },
  {
    hiragana: "まん",
    romanji: "man",
    translation: ["ten thousand"],
  },
  {
    hiragana: "すみません。",
    romanji: "sumimasen",
    translation: ["excuse me"],
  },
  {
    hiragana: "どうも。",
    romanji: "doumo",
    translation: ["Thanks"],
  },
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

export const words: conversationType[] = [
  ...dayOfTheMonth,
  ...months,
  ...numbers,
  ...days,
  ...google,
  ...lesson5,
  ...other,
  // 31 - 01 - 2023
];

export const wordsObj: Record<string, conversationType[]> = {
  all: [
    ...dayOfTheMonth,
    ...months,
    ...numbers,
    ...days,
    ...google,
    ...lesson5,
    ...other,
  ],
  dayOfTheMonth,
  months,
  numbers,
  days,
  google,
  lesson5,
  other,
};
