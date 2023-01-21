// @ts-ignore: Unreachable code error
import ConfettiGenerator from "confetti-js";

export const createConfetti = () => {
  const confettiSettings = { target: "my-canvas" };
  const confetti = new ConfettiGenerator(confettiSettings);
  return confetti;
};
