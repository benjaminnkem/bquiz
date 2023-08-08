/*
Creating quiz context

  QUIZZES: -> This will be an array of all quizzes
    QUIZ: List of all questions;
        - Unique identifier;
        - Object containing questions and answer, properties;
*/

import { ReactNode, createContext } from "react";

type GlobalQuizProvider = { children: ReactNode };
type QuizzesListType = {
  id: string;
  title: string;
  description: string;
  quiz_body: {
    question_id: number;
    question: string;
    answer: string;
  }[];
}[];

const quizzes: QuizzesListType = [
  {
    id: "science-whiz",
    title: "Science Whiz",
    description: "",
    quiz_body: [
      { question_id: 1, question: "Some random question 1", answer: "D" },
      { question_id: 2, question: "Some random question 2", answer: "A" },
      { question_id: 3, question: "Some random question 3", answer: "C" },
      { question_id: 4, question: "Some random question 4", answer: "D" },
      { question_id: 5, question: "Some random question 5", answer: "B" },
    ],
  },
  {
    id: "movie-buzz",
    title: "Movie Buzz",
    description: "",
    quiz_body: [
      { question_id: 1, question: "Some random question 1", answer: "D" },
      { question_id: 2, question: "Some random question 2", answer: "A" },
      { question_id: 3, question: "Some random question 3", answer: "C" },
      { question_id: 4, question: "Some random question 4", answer: "D" },
      { question_id: 5, question: "Some random question 5", answer: "B" },
    ],
  },
  {
    id: "tech-trivia-trek",
    title: "Tech Trivia Trek",
    description: "",
    quiz_body: [
      { question_id: 1, question: "Some random question 1", answer: "D" },
      { question_id: 2, question: "Some random question 2", answer: "A" },
      { question_id: 3, question: "Some random question 3", answer: "C" },
      { question_id: 4, question: "Some random question 4", answer: "D" },
      { question_id: 5, question: "Some random question 5", answer: "B" },
    ],
  },
];

export const QuizContext = createContext(
  {} as { quizzes: QuizzesListType; getQuiz: (quiz_id: string) => QuizzesListType }
);

const GlobalQuizProvider = ({ children }: GlobalQuizProvider) => {
  const getQuiz = (quiz_id: string): QuizzesListType => {
    const singleQuiz = quizzes.filter((quiz) => quiz.id === quiz_id);
    return singleQuiz;
  };

  const quizVal = {
    quizzes,
    getQuiz,
  };

  return <QuizContext.Provider value={quizVal}>{children}</QuizContext.Provider>;
};

export default GlobalQuizProvider;
