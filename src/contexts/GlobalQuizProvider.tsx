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
          { optionText: "Femur", position: "A" },
          { optionText: "Stapes", position: "C" },
          { optionText: "Radius", position: "D" },
          { optionText: "Tibia", position: "B" },
        ],
        answer: "C",
      },
      {
        question_id: 5,
        question: "Which planet is known as the Red Planet?",
        options: [
          { optionText: "Venus", position: "A" },
          { optionText: "Earth", position: "B" },
          { optionText: "Mars", position: "C" },
          { optionText: "Uranus", position: "D" },
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
        options: [
          { optionText: "Star Wars: Episode IV - A New Hope", position: "A" },
          { optionText: "E.T. the Extra-Terrestrial", position: "B" },
          { optionText: "Avatar", position: "C" },
          { optionText: "Indiana Jones and the Last Crusade", position: "D" },
        ],
        answer: "A",
      },
      {
        question_id: 2,
        question: "Which actor played the role of Tony Stark in the Marvel Cinematic Universe?",
        options: [
          { optionText: "Chris Evans", position: "A" },
          { optionText: "Mark Ruffalo", position: "B" },
          { optionText: "Robert Downey Jr.", position: "C" },
          { optionText: "Chris Hemsworth", position: "D" },
        ],
        answer: "C",
      },
      {
        question_id: 3,
        question: "In which year was the first Jurassic Park movie released?",
        options: [
          { optionText: "1993", position: "A" },
          { optionText: "1996", position: "B" },
          { optionText: "1990", position: "C" },
          { optionText: "2001", position: "D" },
        ],
        answer: "A",
      },
      {
        question_id: 4,
        question: "Which movie features a giant ape climbing the Empire State Building?",
        options: [
          { optionText: "Godzilla", position: "A" },
          { optionText: "King Kong (1933)", position: "B" },
          { optionText: "Pacific Rim", position: "C" },
          { optionText: "Kong: Skull Island", position: "D" },
        ],
        answer: "B",
      },
      {
        question_id: 5,
        question: "Who directed the 1994 film 'Pulp Fiction'?",
        options: [
          { optionText: "Quentin Tarantino", position: "A" },
          { optionText: "Martin Scorsese", position: "B" },
          { optionText: "Steven Spielberg", position: "C" },
          { optionText: "Francis Ford Coppola", position: "D" },
        ],
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
        options: [
          { optionText: "France", position: "A" },
          { optionText: "Croatia", position: "B" },
          { optionText: "Brazil", position: "C" },
          { optionText: "Germany", position: "D" },
        ],
        answer: "B",
      },
      {
        question_id: 2,
        question: "Who is known as 'The Greatest' in boxing?",
        options: [
          { optionText: "Mike Tyson", position: "A" },
          { optionText: "Sugar Ray Leonard", position: "B" },
          { optionText: "Muhammad Ali", position: "C" },
          { optionText: "Floyd Mayweather Jr.", position: "D" },
        ],
        answer: "C",
      },
      {
        question_id: 3,
        question: "Which sport uses the term 'birdie'?",
        options: [
          { optionText: "Golf", position: "A" },
          { optionText: "Tennis", position: "B" },
          { optionText: "Cricket", position: "C" },
          { optionText: "Soccer", position: "D" },
        ],
        answer: "A",
      },
      {
        question_id: 4,
        question: "Which team has won the most NBA championships?",
        options: [
          { optionText: "Los Angeles Lakers", position: "A" },
          { optionText: "Chicago Bulls", position: "B" },
          { optionText: "Boston Celtics", position: "C" },
          { optionText: "Golden State Warriors", position: "D" },
        ],
        answer: "C",
      },
      {
        question_id: 5,
        question: "In golf, what is the term for a hole played three strokes under par?",
        options: [
          { optionText: "Bogey", position: "A" },
          { optionText: "Eagle", position: "B" },
          { optionText: "Albatross", position: "C" },
          { optionText: "Birdie", position: "D" },
        ],
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
      {
        question_id: 1,
        question: "Which mammal can fly?",
        options: [
          { optionText: "Bat", position: "A" },
          { optionText: "Dolphin", position: "B" },
          { optionText: "Elephant", position: "C" },
          { optionText: "Giraffe", position: "D" },
        ],
        answer: "A",
      },
      {
        question_id: 2,
        question: "What is the world's largest ocean?",
        options: [
          { optionText: "Atlantic Ocean", position: "A" },
          { optionText: "Pacific Ocean", position: "B" },
          { optionText: "Indian Ocean", position: "C" },
          { optionText: "Arctic Ocean", position: "D" },
        ],
        answer: "B",
      },
      {
        question_id: 3,
        question: "Which animal is a marsupial?",
        options: [
          { optionText: "Kangaroo", position: "A" },
          { optionText: "Lion", position: "B" },
          { optionText: "Tiger", position: "C" },
          { optionText: "Giraffe", position: "D" },
        ],
        answer: "A",
      },
      {
        question_id: 4,
        question: "What is the process of a caterpillar turning into a butterfly called?",
        options: [
          { optionText: "Evolution", position: "A" },
          { optionText: "Metamorphosis", position: "B" },
          { optionText: "Mutation", position: "C" },
          { optionText: "Adaptation", position: "D" },
        ],
        answer: "B",
      },
      {
        question_id: 5,
        question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
        options: [
          { optionText: "Nitrogen", position: "A" },
          { optionText: "Oxygen", position: "B" },
          { optionText: "Carbon Dioxide", position: "C" },
          { optionText: "Hydrogen", position: "D" },
        ],
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
        options: [
          { optionText: "Michael Jackson", position: "A" },
          { optionText: "Elvis Presley", position: "B" },
          { optionText: "Frank Sinatra", position: "C" },
          { optionText: "Justin Timberlake", position: "D" },
        ],
        answer: "B",
      },
      {
        question_id: 2,
        question: "Which band performed the song 'Bohemian Rhapsody'?",
        options: [
          { optionText: "The Rolling Stones", position: "A" },
          { optionText: "The Beatles", position: "B" },
          { optionText: "Queen", position: "C" },
          { optionText: "Led Zeppelin", position: "D" },
        ],
        answer: "C",
      },
      {
        question_id: 3,
        question: "What instrument is Yo-Yo Ma famous for playing?",
        options: [
          { optionText: "Cello", position: "A" },
          { optionText: "Violin", position: "B" },
          { optionText: "Piano", position: "C" },
          { optionText: "Flute", position: "D" },
        ],
        answer: "A",
      },
      {
        question_id: 4,
        question: "Which legendary guitarist is known for his iconic 'Stairway to Heaven' solo?",
        options: [
          { optionText: "Eric Clapton", position: "A" },
          { optionText: "Jimi Hendrix", position: "B" },
          { optionText: "Jimmy Page", position: "C" },
          { optionText: "Carlos Santana", position: "D" },
        ],
        answer: "C",
      },
      {
        question_id: 5,
        question: "What is the highest male voice in classical music?",
        options: [
          { optionText: "Baritone", position: "A" },
          { optionText: "Tenor", position: "B" },
          { optionText: "Countertenor", position: "C" },
          { optionText: "Bass", position: "D" },
        ],
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
        options: [
          { optionText: "Microsoft", position: "A" },
          { optionText: "Dell", position: "B" },
          { optionText: "Apple", position: "C" },
          { optionText: "Google", position: "D" },
        ],
        answer: "C",
      },
      {
        question_id: 2,
        question: "What does 'HTML' stand for?",
        options: [
          { optionText: "Hypertext Markup Language", position: "A" },
          { optionText: "Hyper Transfer Mode Language", position: "B" },
          { optionText: "High Tech Management Logic", position: "C" },
          { optionText: "Home Tool Making Lab", position: "D" },
        ],
        answer: "A",
      },
      {
        question_id: 3,
        question: "Which scientist is credited with the invention of the World Wide Web?",
        options: [
          { optionText: "Bill Gates", position: "A" },
          { optionText: "Steve Jobs", position: "B" },
          { optionText: "Tim Berners-Lee", position: "C" },
          { optionText: "Elon Musk", position: "D" },
        ],
        answer: "C",
      },
      {
        question_id: 4,
        question: "What is the process of converting code into an executable program?",
        options: [
          { optionText: "Compilation", position: "A" },
          { optionText: "Decryption", position: "B" },
          { optionText: "Integration", position: "C" },
          { optionText: "Optimization", position: "D" },
        ],
        answer: "A",
      },
      {
        question_id: 5,
        question: "What is the unit of measurement for the speed of data transfer?",
        options: [
          { optionText: "Bytes per Second", position: "A" },
          { optionText: "Hertz", position: "B" },
          { optionText: "Gigahertz", position: "C" },
          { optionText: "Bits per Second", position: "D" },
        ],
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
        options: [
          { optionText: "Hades", position: "A" },
          { optionText: "Zeus", position: "B" },
          { optionText: "Apollo", position: "C" },
          { optionText: "Poseidon", position: "D" },
        ],
        answer: "D",
      },
      {
        question_id: 2,
        question: "Which Norse god wields the mighty hammer Mjölnir?",
        options: [
          { optionText: "Odin", position: "A" },
          { optionText: "Thor", position: "B" },
          { optionText: "Loki", position: "C" },
          { optionText: "Freyr", position: "D" },
        ],
        answer: "A",
      },
      {
        question_id: 3,
        question: "Who is the Egyptian goddess of magic and wisdom?",
        options: [
          { optionText: "Isis", position: "A" },
          { optionText: "Hathor", position: "B" },
          { optionText: "Ma'at", position: "C" },
          { optionText: "Anubis", position: "D" },
        ],
        answer: "C",
      },
      {
        question_id: 4,
        question: "In Hindu mythology, who is the destroyer of evil forces?",
        options: [
          { optionText: "Brahma", position: "A" },
          { optionText: "Shiva", position: "B" },
          { optionText: "Vishnu", position: "C" },
          { optionText: "Indra", position: "D" },
        ],
        answer: "B",
      },
      {
        question_id: 5,
        question: "What mythical creature is said to be half-man and half-horse?",
        options: [
          { optionText: "Centaur", position: "A" },
          { optionText: "Minotaur", position: "B" },
          { optionText: "Siren", position: "C" },
          { optionText: "Griffin", position: "D" },
        ],
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
        options: [
          { optionText: "Protein", position: "A" },
          { optionText: "Vitamin C", position: "B" },
          { optionText: "Carbohydrates", position: "C" },
          { optionText: "Calcium", position: "D" },
        ],
        answer: "C",
      },
      {
        question_id: 2,
        question: "What is the recommended daily water intake for adults?",
        options: [
          { optionText: "1 liter", position: "A" },
          { optionText: "2 liters", position: "B" },
          { optionText: "3 liters", position: "C" },
          { optionText: "4 liters", position: "D" },
        ],
        answer: "B",
      },
      {
        question_id: 3,
        question: "Which vitamin is known as the 'sunshine vitamin'?",
        options: [
          { optionText: "Vitamin A", position: "A" },
          { optionText: "Vitamin B", position: "B" },
          { optionText: "Vitamin C", position: "C" },
          { optionText: "Vitamin D", position: "D" },
        ],
        answer: "D",
      },
      {
        question_id: 4,
        question: "What is the body's largest organ?",
        options: [
          { optionText: "Heart", position: "A" },
          { optionText: "Liver", position: "B" },
          { optionText: "Skin", position: "C" },
          { optionText: "Lungs", position: "D" },
        ],
        answer: "C",
      },
      {
        question_id: 5,
        question: "Which exercise helps strengthen the core muscles?",
        options: [
          { optionText: "Bicep Curls", position: "A" },
          { optionText: "Running", position: "B" },
          { optionText: "Plank", position: "C" },
          { optionText: "Leg Press", position: "D" },
        ],
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
