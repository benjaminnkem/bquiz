/*
Creating quiz context

  QUIZZES: -> This will be an array of all quizzes
    QUIZ: List of all questions;
        - Unique identifier;
        - Object containing questions and answer, properties;
*/

import { ReactNode, createContext } from "react";

type GlobalQuizProvider = { children: ReactNode };
type QuizBody = {
  question_id: number;
  question: string;
  options: {
    optionText: string;
    position: string;
  }[];
  answer: string;
}[];

type QuizzesListType = {
  id: string;
  title: string;
  description: string;
  quiz_body: QuizBody;
}[];

const quizzes: QuizzesListType = [
  {
    id: "science-whiz",
    title: "Science Whiz",
    description: `
      Dive into the world of science and answer questions about biology, chemistry, physics, and more to prove your scientific prowess.
    `,
    quiz_body: [
      {
        question_id: 1,
        question: "What is the chemical symbol for gold?",
        options: [
          { optionText: "S", position: "D" },
          { optionText: "Au", position: "B" },
          { optionText: "Ai", position: "C" },
          { optionText: "Fe", position: "A" },
        ],
        answer: "B",
      },
      {
        question_id: 2,
        question: "Which gas is essential for photosynthesis?",
        options: [
          { optionText: "Nitrogen", position: "B" },
          { optionText: "Hydrogen", position: "D" },
          { optionText: "Oxygen", position: "C" },
          { optionText: "Argon", position: "A" },
        ],
        answer: "C",
      },
      {
        question_id: 3,
        question: "What does DNA stand for?",
        options: [
          { optionText: "Deanomlous Anther", position: "A" },
          { optionText: "Deoxyribonucleic Acid", position: "B" },
          { optionText: "DeOrthodox Acid", position: "C" },
          { optionText: "DeOxyminomic Acid", position: "D" },
        ],
        answer: "B",
      },
      {
        question_id: 4,
        question: "What is the smallest bone in the human body?",
        options: [
          { optionText: "Femur", position: "C" },
          { optionText: "Something", position: "C" },
          { optionText: "Something", position: "C" },
          { optionText: "Something", position: "B" },
        ],
        answer: "B",
      },
      {
        question_id: 5,
        question: "Which planet is known as the Red Planet?",
        options: [
          { optionText: "Venus", position: "C" },
          { optionText: "Earth", position: "C" },
          { optionText: "Mars", position: "C" },
          { optionText: "Uranus", position: "C" },
        ],
        answer: "C",
      },
    ],
  },
  {
    id: "movie-buzz",
    title: "Movie Buff Challenge",
    description: `
      Guess the movie from quotes, posters, and scenes to prove that you're the ultimate movie buff.
    `,
    quiz_body: [
      {
        question_id: 1,
        question: "Which film features a character named Luke Skywalker?",
        options: [{ optionText: "", position: "C" }],
        answer: "C",
      },
      {
        question_id: 2,
        question: "Which actor played the role of Tony Stark in the Marvel Cinematic Universe?",
        options: [{ optionText: "", position: "C" }],
        answer: "C",
      },
      {
        question_id: 3,
        question: "In which year was the first Jurassic Park movie released?",
        options: [{ optionText: "", position: "C" }],
        answer: "A",
      },
      {
        question_id: 4,
        question: "Which movie features a giant ape climbing the Empire State Building?",
        options: [{ optionText: "", position: "C" }],
        answer: "D",
      },
      {
        question_id: 5,
        question: "Who directed the 1994 film 'Pulp Fiction'?",
        options: [{ optionText: "", position: "C" }],
        answer: "A",
      },
    ],
  },
  {
    id: "sports-fanatic",
    title: "Sports Fanatic",
    description: `
      Prove your sports knowledge by answering questions about athletes, teams, championships, and iconic sports moments.
    `,
    quiz_body: [
      {
        question_id: 1,
        question: "Which country won the FIFA World Cup in 2018?",
        options: [{ optionText: "", position: "C" }],
        answer: "B",
      },
      {
        question_id: 2,
        question: "Who is known as 'The Greatest' in boxing?",
        options: [{ optionText: "", position: "C" }],
        answer: "D",
      },
      {
        question_id: 3,
        question: "Which sport uses the term 'birdie'?",
        options: [{ optionText: "", position: "C" }],
        answer: "A",
      },
      {
        question_id: 4,
        question: "Which team has won the most NBA championships?",
        options: [{ optionText: "", position: "C" }],
        answer: "C",
      },
      {
        question_id: 5,
        question: "In golf, what is the term for a hole played three strokes under par?",
        options: [{ optionText: "", position: "C" }],
        answer: "B",
      },
    ],
  },
  {
    id: "nature-and-wildlife-quiz",
    title: "Nature and Wildlife Quiz",
    description: `
      Explore the natural world by answering questions about animals, ecosystems, conservation, and environmental issues.
    `,
    quiz_body: [
      { question_id: 1, question: "Which mammal can fly?", options: [{ optionText: "", position: "C" }], answer: "A" },
      {
        question_id: 2,
        question: "What is the world's largest ocean?",
        options: [{ optionText: "", position: "C" }],
        answer: "B",
      },
      {
        question_id: 3,
        question: "Which animal is a marsupial?",
        options: [{ optionText: "", position: "C" }],
        answer: "C",
      },
      {
        question_id: 4,
        question: "What is the process of a caterpillar turning into a butterfly called?",
        options: [{ optionText: "", position: "C" }],
        answer: "D",
      },
      {
        question_id: 5,
        question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
        options: [{ optionText: "", position: "C" }],
        answer: "C",
      },
    ],
  },
  {
    id: "music-mania",
    title: "Music Mania",
    description: `
      Put your musical knowledge to the test by identifying songs, artists, and genres across different decades and styles.
    `,
    quiz_body: [
      {
        question_id: 1,
        question: "Who is known as the 'King of Pop'?",
        options: [{ optionText: "", position: "C" }],
        answer: "B",
      },
      {
        question_id: 2,
        question: "Which band performed the song 'Bohemian Rhapsody'?",
        options: [{ optionText: "", position: "C" }],
        answer: "C",
      },
      {
        question_id: 3,
        question: "What instrument is Yoyo Ma famous for playing?",
        options: [{ optionText: "", position: "C" }],
        answer: "A",
      },
      {
        question_id: 4,
        question: "Which legendary guitarist is known for his iconic 'Stairway to Heaven' solo?",
        options: [{ optionText: "", position: "C" }],
        answer: "D",
      },
      {
        question_id: 5,
        question: "What is the highest male voice in classical music?",
        options: [{ optionText: "", position: "C" }],
        answer: "C",
      },
    ],
  },
  {
    id: "tech-trivia-trek",
    title: "Tech Trivia Trek",
    description: `
      Embark on a tech-savvy journey through the digital universe, answering questions about gadgets, programming languages, tech history, and innovations.
    `,
    quiz_body: [
      {
        question_id: 1,
        question: "Which company is known for its iPhones and MacBooks?",
        options: [{ optionText: "", position: "C" }],
        answer: "C",
      },
      {
        question_id: 2,
        question: "What does 'HTML' stand for?",
        options: [{ optionText: "", position: "C" }],
        answer: "A",
      },
      {
        question_id: 3,
        question: "Which scientist is credited with the invention of the World Wide Web?",
        options: [{ optionText: "", position: "C" }],
        answer: "C",
      },
      {
        question_id: 4,
        question: "What is the process of converting code into an executable program?",
        options: [{ optionText: "", position: "C" }],
        answer: "A",
      },
      {
        question_id: 5,
        question: "What is the unit of measurement for the speed of data transfer?",
        options: [{ optionText: "", position: "C" }],
        answer: "D",
      },
    ],
  },
  {
    id: "mythology-mayhem",
    title: "Mythology Mayhem",
    description: `
      Venture into the realms of gods, heroes, and mythical creatures from various cultures as you answer questions about mythology and folklore.
    `,
    quiz_body: [
      {
        question_id: 1,
        question: "Who is the Greek god of the sea?",
        options: [{ optionText: "", position: "C" }],
        answer: "D",
      },
      {
        question_id: 2,
        question: "Which Norse god wields the mighty hammer Mjölnir?",
        options: [{ optionText: "", position: "C" }],
        answer: "A",
      },
      {
        question_id: 3,
        question: "Who is the Egyptian goddess of magic and wisdom?",
        options: [{ optionText: "", position: "C" }],
        answer: "C",
      },
      {
        question_id: 4,
        question: "In Hindu mythology, who is the destroyer of evil forces?",
        options: [{ optionText: "", position: "C" }],
        answer: "B",
      },
      {
        question_id: 5,
        question: "What mythical creature is said to be half-man and half-horse?",
        options: [{ optionText: "", position: "C" }],
        answer: "A",
      },
    ],
  },
  {
    id: "health-and-wellness-wiz",
    title: "Health and Wellness Wiz",
    description: `
      Test your knowledge of health, nutrition, fitness, and wellness topics, and discover valuable insights for a healthier lifestyle along the way.
    `,
    quiz_body: [
      {
        question_id: 1,
        question: "Which nutrient is the primary source of energy for the body?",
        options: [{ optionText: "", position: "C" }],
        answer: "C",
      },
      {
        question_id: 2,
        question: "What is the recommended daily water intake for adults?",
        options: [{ optionText: "", position: "C" }],
        answer: "B",
      },
      {
        question_id: 3,
        question: "Which vitamin is known as the 'sunshine vitamin'?",
        options: [{ optionText: "", position: "C" }],
        answer: "D",
      },
      {
        question_id: 4,
        question: "What is the body's largest organ?",
        options: [{ optionText: "", position: "C" }],
        answer: "A",
      },
      {
        question_id: 5,
        question: "Which exercise helps strengthen the core muscles?",
        options: [{ optionText: "", position: "C" }],
        answer: "C",
      },
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
