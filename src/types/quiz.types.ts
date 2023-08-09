export type StatusManager = {
  nextText: string;
  isLastQuestion: boolean;
  finished: boolean;
  hideHero: boolean;
  correctAnswers: number;
  started: boolean;
  pickedMessages: { curIndex: number; selectedLetter: string }[];
};
