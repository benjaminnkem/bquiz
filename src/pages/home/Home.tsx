import DefaultWrapper from "../../components/DefaultWrapper";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { DefaultNavbar } from "../../components/Navbar";

const Home = () => {
  const [availableQuiz] = useState<{ quizName: string; description: string; urlPath: string }[]>([
    {
      quizName: "Science Whiz",
      description:
        "Dive into the world of science and answer questions about biology, chemistry, physics, and more to prove your scientific prowess.",
      urlPath: "science-whiz",
    },
    {
      quizName: "Movie Buff Challenge",
      description: "Guess the movie from quotes, posters, and scenes to prove that you're the ultimate movie buff.",
      urlPath: "movie-buzz",
    },
    {
      quizName: "Sports Fanatic",
      description:
        "Prove your sports knowledge by answering questions about athletes, teams, championships, and iconic sports moments.",
      urlPath: "sports-fanatic",
    },
    {
      quizName: "Nature and Wildlife Quiz",
      description:
        "Explore the natural world by answering questions about animals, ecosystems, conservation, and environmental issues.",
      urlPath: "nature-and-wildlife-quiz",
    },
    {
      quizName: "Music Mania",
      description:
        "Put your musical knowledge to the test by identifying songs, artists, and genres across different decades and styles.",
      urlPath: "music-mania",
    },
    {
      quizName: "Tech Trivia Trek",
      description:
        "Embark on a tech-savvy journey through the digital universe, answering questions about gadgets, programming languages, tech history, and innovations.",
      urlPath: "tech-trivia-trek",
    },
    {
      quizName: "Mythology Mayhem",
      description:
        "Venture into the realms of gods, heroes, and mythical creatures from various cultures as you answer questions about mythology and folklore.",
      urlPath: "mythology-mayhem",
    },
    {
      quizName: "Health and Wellness Wiz",
      description:
        "Test your knowledge of health, nutrition, fitness, and wellness topics, and discover valuable insights for a healthier lifestyle along the way.",
      urlPath: "health-and-wellness-wiz",
    },
  ]);

  return (
    <>
      <header className="relative flex items-center justify-center h-screen text-white home-header -z-10">
        <div className="text-center">
          <h1>Welcome to BQuiz</h1>
          <p className="text-lg">Show B' what you got!</p>
        </div>
        <img
          src="/images/backgrounds/bg5.jpg"
          alt="Header Background"
          className="absolute top-0 left-0 object-cover w-full h-full select-none -z-10 header-img"
        />
      </header>

      <main>
        <DefaultNavbar />
        <DefaultWrapper>
          <section className="available">
            <h2 className="text-3xl font-extrabold">Quizzes available</h2>

            <div className="grid grid-cols-3 gap-8 py-4">
              {availableQuiz.map((quiz, idx) => (
                <Link key={idx} to={`/quiz/${quiz.urlPath}`}>
                  <div className="px-8 py-4 duration-500 rounded-lg shadow-md cursor-pointer bg-slate-700">
                    <div className="flex items-center justify-between">
                      <p className="text-xl font-bold">{quiz.quizName}</p>{" "}
                      <FontAwesomeIcon icon={faCheck} color="rgb(34, 197, 94)" />
                    </div>
                    <p className="mt-2">{quiz.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </DefaultWrapper>
      </main>
    </>
  );
};

export default Home;
