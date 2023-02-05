export type charactersType = {
  type?: string;
  kana?: string;
  hiragana?: string;
  romanji: string;
};

export const hiragana: charactersType[] = [
  // Basic vowls
  { romanji: "a", hiragana: "あ" },
  { romanji: "i", hiragana: "い" },
  { romanji: "u", hiragana: "う" },
  { romanji: "e", hiragana: "え" },
  { romanji: "o", hiragana: "お" },
  // K
  { romanji: "ka", hiragana: "か" },
  { romanji: "ki", hiragana: "き" },
  { romanji: "ku", hiragana: "く" },
  { romanji: "ke", hiragana: "け" },
  { romanji: "ko", hiragana: "こ" },
  // Digraphans
  { romanji: "kya", hiragana: "きゃ" },
  { romanji: "kyu", hiragana: "きゅ" },
  { romanji: "kyo", hiragana: "きょ" },

  // S
  { romanji: "sa", hiragana: "さ" },
  { romanji: "shi", hiragana: "し" },
  { romanji: "su", hiragana: "す" },
  { romanji: "se", hiragana: "せ" },
  { romanji: "so", hiragana: "そ" },
  // Digraphans
  { romanji: "sha", hiragana: "しゃ" },
  { romanji: "shu", hiragana: "しゅ" },
  { romanji: "sho", hiragana: "しょ" },
  // T
  { romanji: "ta", hiragana: "た" },
  { romanji: "chi", hiragana: "ち" },
  { romanji: "tsu", hiragana: "つ" },
  { romanji: "te", hiragana: "て" },
  { romanji: "to", hiragana: "と" },
  // Digraphans
  { romanji: "cha", hiragana: "ちゃ" },
  { romanji: "chu", hiragana: "ちゅ" },
  { romanji: "cho", hiragana: "ちょ" },
  // N
  { romanji: "na", hiragana: "な" },
  { romanji: "ni", hiragana: "に" },
  { romanji: "nu", hiragana: "ぬ" },
  { romanji: "ne", hiragana: "ね" },
  { romanji: "no", hiragana: "の" },
  // Digraphans
  { romanji: "nya", hiragana: "にゃ" },
  { romanji: "nyu", hiragana: "にゅ" },
  { romanji: "nyo", hiragana: "にょ" },
  // H
  { romanji: "ha", hiragana: "は" },
  { romanji: "hi", hiragana: "ひ" },
  { romanji: "hu", hiragana: "ふ" },
  { romanji: "he", hiragana: "へ" },
  { romanji: "ho", hiragana: "ほ" },
  // Digraphans
  { romanji: "hya", hiragana: "ひゃ" },
  { romanji: "hyu", hiragana: "ひゅ" },
  { romanji: "hyo", hiragana: "ひょ" },
  // M
  { romanji: "ma", hiragana: "ま" },
  { romanji: "mi", hiragana: "み" },
  { romanji: "mu", hiragana: "む" },
  { romanji: "me", hiragana: "め" },
  { romanji: "mo", hiragana: "も" },
  // Digraphans
  { romanji: "mya", hiragana: "みゃ" },
  { romanji: "myu", hiragana: "みゅ" },
  { romanji: "myo", hiragana: "みょ" },
  // Y
  { romanji: "ya", hiragana: "や" },
  { romanji: "(i)", hiragana: "（い" },
  { romanji: "yu", hiragana: "ゆ" },
  { romanji: "(e)", hiragana: "（え" },
  { romanji: "yo", hiragana: "よ" },
  // R
  { romanji: "ra", hiragana: "ら" },
  { romanji: "ri", hiragana: "り" },
  { romanji: "ru", hiragana: "る" },
  { romanji: "re", hiragana: "れ" },
  { romanji: "ro", hiragana: "ろ" },
  // Digraphans
  { romanji: "rya", hiragana: "りゃ" },
  { romanji: "ryu", hiragana: "りゅ" },
  { romanji: "ryo", hiragana: "りょ" },
  // W
  { romanji: "wa", hiragana: "わ" },
  { romanji: "(i)", hiragana: "（い" },
  { romanji: "(u)", hiragana: "（う" },
  { romanji: "(e)", hiragana: "（え" },
  { romanji: "o", hiragana: "を" },
  // N
  { romanji: "n", hiragana: "ん" },
  // G
  { romanji: "ga", hiragana: "が" },
  { romanji: "gi", hiragana: "ぎ" },
  { romanji: "gu", hiragana: "ぐ" },
  { romanji: "ge", hiragana: "げ" },
  { romanji: "go", hiragana: "ご" },
  // Digraphans
  { romanji: "gya", hiragana: "ぢゃ" },
  { romanji: "gyu", hiragana: "ぢゅ" },
  { romanji: "gyo", hiragana: "ぢょ" },
  // Z
  { romanji: "za", hiragana: "ざ" },
  { romanji: "ji", hiragana: "じ" },
  { romanji: "zu", hiragana: "ず" },
  { romanji: "ze", hiragana: "ぜ" },
  { romanji: "zo", hiragana: "ぞ" },
  // Digraphans
  { romanji: "ja", hiragana: "じゃ" },
  { romanji: "ju", hiragana: "じゅ" },
  { romanji: "jo", hiragana: "じょ" },
  // D
  { romanji: "da", hiragana: "だ" },
  { romanji: "ji", hiragana: "ぢ" },
  { romanji: "zu", hiragana: "づ" },
  { romanji: "de", hiragana: "で" },
  { romanji: "do", hiragana: "ど" },
  // Digraphans
  // { romanji: "ja", hiragana: "ぢゃ" },
  // { romanji: "ju", hiragana: "ぢゅ" },
  // { romanji: "jo", hiragana: "ぢょ" },
  // B
  { romanji: "ba", hiragana: "ば" },
  { romanji: "bi", hiragana: "び" },
  { romanji: "bu", hiragana: "ぶ" },
  { romanji: "be", hiragana: "べ" },
  { romanji: "bo", hiragana: "ぼ" },
  // Digraphans
  { romanji: "bya", hiragana: "びゃ" },
  { romanji: "byu", hiragana: "びゅ" },
  { romanji: "byo", hiragana: "びょ" },
  // P
  { romanji: "pa", hiragana: "ぱ" },
  { romanji: "pi", hiragana: "ぴ" },
  { romanji: "pu", hiragana: "ぷ" },
  { romanji: "pe", hiragana: "ぺ" },
  { romanji: "po", hiragana: "ぽ" },
  // Digraphans
  { romanji: "pya", hiragana: "ぴゃ" },
  { romanji: "pyu", hiragana: "ぴゅ" },
  { romanji: "pyo", hiragana: "ぴょ" },
];
