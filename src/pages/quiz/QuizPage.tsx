import { useParams } from "react-router";
import { useContext, } from "react";
import { QuizContext } from "../../contexts/GlobalQuizProvider";
import DefaultWrapper from "../../components/DefaultWrapper";
import { MainNavbar } from "../../components/Navbar";
import "./styles/science.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";

const QuizPage = () => {
  const { quizId } = useParams();
  const { getQuiz } = useContext(QuizContext);

  const [quiz] = getQuiz(quizId!);

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
              </div>
            </section>
            <div className="mx-auto md:max-w-[1488px] w-11/12">
              <section className="grid grid-cols-2 gap-4 py-10 intro">
                <div>
                  <h2 className="text-4xl font-extrabold">{quiz.title}</h2>
                  <p className="whitespace-pre-line">{quiz.description}</p>
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
