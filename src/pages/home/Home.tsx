import DefaultWrapper from "../../components/DefaultWrapper";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { MainNavbar } from "../../components/Navbar";
import "./styles/Home.css";

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
      {/* <header className="flex items-center justify-center h-screen text-white home-header">
        <div className="space-y-4 text-center">
          <h1 className="text-6xl font-extrabold uppercase">Welcome to BQuiz</h1>
          <div>
            <a href="#main">
              <button className="px-6 py-1 text-lg duration-200 bg-black border-2 border-purple-400 rounded-lg hover:bg-purple-700 bg-opacity-60">
                Start <FontAwesomeIcon icon={faAngleDown}/>
              </button>
            </a>
          </div>
        </div>
      </header> */}

      <header>
        <MainNavbar />
      </header>

      <main id="main">
        {/* <DefaultNavbar /> */}
        <DefaultWrapper>
          <section className="available">
            <h2 className="text-3xl font-extrabold">Quizzes available</h2>

            <div className="grid grid-cols-3 gap-8 py-4">
              {availableQuiz.map((quiz, idx) => (
                <div
                  className="px-8 py-4 duration-500 rounded-lg key={idx} shadow-md self-start bg-slate-700"
                  key={idx}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold">{quiz.quizName}</p>{" "}
                    <FontAwesomeIcon icon={faCheck} color="rgb(34, 197, 94)" />
                  </div>
                  <p className="mt-2">{quiz.description}</p>

                  <Link to={`/quiz/${quiz.urlPath}`}>
                    <button className="w-full py-2 mt-4 duration-200 border-2 rounded-lg border-opacity-70 border-slate-600 hover:border-slate-400 group">
                      Start{" "}
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="duration-200 group-hover:translate-x-2 group-hover:text-slate-300"
                      />
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </DefaultWrapper>
      </main>
    </>
  );
};

export default Home;
