import { useParams } from "react-router";
import { useContext, useEffect } from "react";
import { QuizContext } from "../../contexts/GlobalQuizProvider";
import DefaultWrapper from "../../components/DefaultWrapper";
import { MainNavbar } from "../../components/Navbar";

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
            <div className="mx-auto md:max-w-[1488px] w-11/12">
              <section className="py-10 intro">
                <div>
                  <h1 className="text-4xl font-extrabold">{quiz.title}</h1>
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
