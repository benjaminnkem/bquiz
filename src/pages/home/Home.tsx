import DefaultWrapper from "../../components/DefaultWrapper";
import Navbar from "../../components/Navbar";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const [availableQuiz, setAvailableQuiz] = useState<{ quizName: string; description: string }[]>([
    {
      quizName: "Science Whiz",
      description:
        "Dive into the world of science and answer questions about biology, chemistry, physics, and more to prove your scientific prowess.",
    },
    {
      quizName: "Movie Buff Challenge",
      description: "Guess the movie from quotes, posters, and scenes to prove that you're the ultimate movie buff.",
    },
    {
      quizName: "Sports Fanatic",
      description:
        "Prove your sports knowledge by answering questions about athletes, teams, championships, and iconic sports moments.",
    },
    {
      quizName: "Nature and Wildlife Quiz",
      description:
        "Explore the natural world by answering questions about animals, ecosystems, conservation, and environmental issues.",
    },
    {
      quizName: "Music Mania",
      description:
        "Put your musical knowledge to the test by identifying songs, artists, and genres across different decades and styles.",
    },
    {
      quizName: "Tech Trivia Trek",
      description:
        "Embark on a tech-savvy journey through the digital universe, answering questions about gadgets, programming languages, tech history, and innovations.",
    },
    {
      quizName: "Mythology Mayhem",
      description:
        "Venture into the realms of gods, heroes, and mythical creatures from various cultures as you answer questions about mythology and folklore.",
    },
    {
      quizName: "Health and Wellness Wiz",
      description:
        "Test your knowledge of health, nutrition, fitness, and wellness topics, and discover valuable insights for a healthier lifestyle along the way.",
    },
  ]);

  return (
    <>
      <div className="wrapper bg-slate-900">
        <header className="home-header h-screen relative flex text-white justify-center items-center -z-10">
          <div className="text-center">
            <h1>Welcome to BQuiz</h1>
            <p className="text-lg">Show B' what you got!</p>
          </div>
          <img
            src="/images/backgrounds/bg5.jpg"
            alt="Header Background"
            className="absolute w-full h-full object-cover top-0 left-0 -z-10 select-none header-img"
          />
        </header>

        <main className="bg-slate-900">
          <Navbar />
          <DefaultWrapper>
            <section className="available">
              <h2 className="text-3xl font-extrabold">Quizzes available</h2>

              <div className="grid gap-8 grid-cols-3 py-4">
                {availableQuiz.map((quiz, idx) => (
                  <div key={idx} className="cursor-pointer px-8 py-4 rounded-lg duration-500 shadow-md bg-slate-700">
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-xl">{quiz.quizName}</p> <FontAwesomeIcon icon={faCheck} color="rgb(34, 197, 94)" />
                    </div>
                    <p className="mt-2">{quiz.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </DefaultWrapper>
        </main>
      </div>
    </>
  );
};

export default Home;
