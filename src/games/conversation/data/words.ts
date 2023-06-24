import { conversationType } from "./conversations";
import { days } from "./words/days";
import { meat, fruit, vegetables, fish, foods } from "./words/food";
import { google } from "./words/google";
import {
  lesson1,
  lesson10,
  lesson11,
  lesson12,
  lesson13,
  lesson14,
  lesson15,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
  lessons,
} from "./words/lessons";
import { locations } from "./words/locations";
import { dayOfTheMonth, months } from "./words/months";
import { numbers } from "./words/numbers";
import { other } from "./words/other";
import { station } from "./words/station";

const allLessons = [
  ...lesson1,
  ...lesson2,
  ...lesson3,
  ...lesson4,
  ...lesson5,
  ...lesson6,
  ...lesson7,
  ...lesson8,
  ...lesson9,
  ...lesson10,
  ...lesson11,
  ...lesson12,
  ...lesson13,
  ...lesson14,
  ...lesson15,
  // ...lesson16,
  // ...lesson17,
  // ...lesson18,
  // ...lesson19,
  // ...lesson20,
  // ...lesson21,
  // ...lesson22,
  // ...lesson23,
  // ...lesson24,
  // ...lesson25
];

export const wordsObj: Record<string, conversationType[]> = {
  all: [
    ...numbers,
    ...days,
    ...months,
    ...dayOfTheMonth,
    ...allLessons,
    ...locations,
    ...google,
    ...other,
    ...meat,
    ...fruit,
    ...vegetables,
    ...fish,
    ...station,
  ],
  locations,
  numbers,
  days,
  months,
  dayOfTheMonth,
  lessons: allLessons,
  ...lessons,
  google,
  other,
  ...foods,
  station,
};

export const words: conversationType[] = [
  ...wordsObj.all,
  // 31 - 01 - 2023
];
