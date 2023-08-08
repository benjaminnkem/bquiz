import { useParams } from "react-router";
import { useContext, useEffect } from "react";
import { QuizContext } from "../../contexts/GlobalQuizProvider";
import DefaultWrapper from "../../components/DefaultWrapper";
import { MainNavbar } from "../../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import "./styles/quiz.css";

const QuizPage = () => {
  const { quizId } = useParams();
  const { getQuiz } = useContext(QuizContext);

  const [quiz] = getQuiz(quizId!);
  useEffect(() => console.log(quiz), []);

  return (
    <>
      {quiz ? (
        <>
          <header>
            <MainNavbar />
          </header>
          <main>
            <section className={`h-screen -mt-16 ${quizId!} flex items-center justify-center`}>
              <div className="mt-4 text-center">
                <h1 className="text-6xl font-extrabold text-shadow">
                  {quiz.title} <FontAwesomeIcon icon={faStopwatch} />
                </h1>
                <p className="max-w-2xl mx-auto text-shadow">{quiz.description}</p>

                <a href="#main">
                  <button className="px-6 py-2 mt-2 duration-200 bg-purple-600 bg-opacity-50 border-2 border-purple-600 rounded-lg shadow-md border-opacity-70 hover:border-purple-400 group">
                    Start{" "}
                    <FontAwesomeIcon
                      icon={faArrowDown}
                      className="duration-200 -translate-y-[.125rem] group-hover:translate-y-[.25rem] group-hover:text-slate-300"
                    />
                  </button>
                </a>
              </div>
            </section>

            {/* Main */}
            <div className="mx-auto md:max-w-[1488px] w-11/12" id="main">
              <section className="grid grid-cols-2 gap-4 py-10">
                <div>
                  <h2 className="text-4xl font-extrabold">{quiz.title}</h2>
                  <p className="whitespace-pre-line">{quiz.description}</p>

                  <button className="px-6 py-2 mt-2 duration-200 border-2 rounded-lg border-opacity-70 border-slate-600 hover:border-slate-400 group">
                    Start{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="duration-200 group-hover:translate-x-2 group-hover:text-slate-300"
                    />
                  </button>
                </div>
              </section>
            </div>
          </main>
        </>
      ) : (
        <DefaultWrapper>
          <h1 className="text-4xl font-extrabold">Not Implemented</h1>
        </DefaultWrapper>
      )}
    </>
  );
};

export default QuizPage;
