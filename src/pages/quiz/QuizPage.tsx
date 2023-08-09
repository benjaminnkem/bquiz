import { useParams } from "react-router";
import { useContext, useEffect, useState } from "react";
import { QuizContext } from "../../contexts/GlobalQuizProvider";
import DefaultWrapper from "../../components/DefaultWrapper";
import { MainNavbar } from "../../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowRight, faReceipt, faStopwatch } from "@fortawesome/free-solid-svg-icons";
import "./styles/quiz.css";

const QuizPage = () => {
  const { quizId } = useParams();
  const { getQuiz } = useContext(QuizContext);

  const [quiz] = getQuiz(quizId!);
  const [currentQuestionIndex, setQuestionIndex] = useState<number>(0);
  const [letterOptions] = useState<string[]>(["A", "B", "C", "D"]);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  type StatusManager = {
    nextText: string;
    isLastQuestion: boolean;
    finished: boolean;
    pickedMessages: { curIndex: number; selectedLetter: string }[];
  };

  const [statusManager, setStatusManager] = useState<StatusManager>({
    nextText: "Next",
    isLastQuestion: false,
    finished: false,
    pickedMessages: [],
  });

  const checkFinish = () => {
    if (quiz.quiz_body.length === currentQuestionIndex + 1) {
      setStatusManager({ ...statusManager, isLastQuestion: true, nextText: "Check Result" });
      return;
    }
  };

  const pickAnswer = (idx: number) => {
    setSelectedAnswer(letterOptions[idx]);
    checkFinish();
  };

  useEffect(() => {
    document.title = `${quiz.title} - BQuiz`;
  }, [quiz.title]);

  const nextFunc = () => {
    // Collect SelectedIndex
    setStatusManager({
      ...statusManager,
      pickedMessages: [
        ...statusManager.pickedMessages,
        { curIndex: currentQuestionIndex, selectedLetter: selectedAnswer },
      ],
    });

    if (quiz.quiz_body.length === currentQuestionIndex + 1) {
      setStatusManager({
        ...statusManager,
        isLastQuestion: true,
        nextText: "Check Result",
        finished: true,
        pickedMessages: [
          ...statusManager.pickedMessages,
          { curIndex: currentQuestionIndex, selectedLetter: selectedAnswer },
        ],
      });
      return;
    }

    setQuestionIndex(currentQuestionIndex + 1);
    setSelectedAnswer("");
  };

  return (
    <>
      {quiz ? (
        <>
          <header>
            <MainNavbar />
            <div className="w-[20%] w-[40%] w-[60%] w-[80%] w-[100%]"></div>
          </header>
          <main>
            <section className={`h-screen -mt-16 ${quizId!} flex items-center justify-center`}>
              <div className="mt-4 text-center">
                <h1 className="text-6xl font-extrabold text-shadow">
                  {quiz.title} <FontAwesomeIcon icon={faStopwatch} />
                </h1>
                <p className="max-w-2xl mx-auto my-2 text-shadow">{quiz.description}</p>

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
            <div className="mx-auto md:max-w-[1488px] w-11/12 my-10 h-screen grid place-content-center" id="main">
              {!statusManager.finished ? (
                <section className="max-w-2xl lg:min-w-[32rem] md:min-w-[24rem] min-w-[20rem] p-2 mx-auto duration-200 rounded-md">
                  <div className="w-full h-4 mb-2 overflow-hidden rounded-md bg-slate-600 bg-opacity-20">
                    <div
                      className={`w-[${
                        ((currentQuestionIndex + 1) / quiz.quiz_body.length) * 100
                      }%] h-full duration-200 bg-purple-500`}
                    ></div>
                  </div>
                  <p className="text-sm font-bold text-right text-slate-400">
                    {`${currentQuestionIndex + 1} / ${quiz.quiz_body.length}`}
                  </p>

                  <div className="space-y-3">
                    <h2 className="text-4xl font-extrabold">Question {currentQuestionIndex + 1}.</h2>
                    <p className="inline-block text-lg duration-200 border-b border-purple-100 border-opacity-30 hover:border-opacity-50">
                      {quiz.quiz_body[currentQuestionIndex].question}
                    </p>

                    <h3 className="text-xl font-bold">Options:</h3>
                    <div className="space-y-3">
                      {quiz.quiz_body[currentQuestionIndex].options.map((opt, idx) => (
                        <div
                          key={idx}
                          className={`p-2 duration-200 rounded-md cursor-pointer bg-slate-800 hover:bg-slate-700 border-2 ${
                            selectedAnswer === letterOptions[idx] ? "border-purple-500" : "border-transparent"
                          }`}
                          onClick={() => pickAnswer(idx)}
                        >
                          <p>
                            {letterOptions[idx]}: <span className="ml-4">{opt.optionText}</span>
                          </p>
                        </div>
                      ))}
                    </div>

                    {selectedAnswer && (
                      <button
                        className="w-full py-2 mt-4 duration-200 border-2 rounded-lg border-opacity-70 border-slate-600 hover:border-slate-400 group"
                        onClick={() => nextFunc()}
                      >
                        {statusManager.nextText}{" "}
                        {!statusManager.isLastQuestion ? (
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="duration-200 group-hover:translate-x-2 group-hover:text-slate-300"
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={faReceipt}
                            className="duration-200 group-hover:translate-x-2 group-hover:text-slate-300"
                          />
                        )}
                      </button>
                    )}
                  </div>
                </section>
              ) : (
                <section className="max-w-2xl border-2 border-slate-800 lg:min-w-[32rem] md:min-w-[24rem] min-w-[20rem] p-5 bg-slate-950 mx-auto duration-200 rounded-md">
                  <div className="rounded-md">
                    <h2 className="text-4xl font-extrabold text-center">Results</h2>
                    <div className="mt-4 space-y-2">
                      {quiz.quiz_body.map((quest, idx) => (
                        <div
                          key={idx}
                          className="p-3 duration-200 border-b-2 rounded-lg border-slate-700 bg-slate-800 hover:bg-slate-700"
                        >
                          <h4 className="text-lg font-bold">Question {idx + 1}</h4>
                          <p>{quest.question}</p>
                          {/* <p className="font-mono">Ans: { quest.options.filter(ans => ans.position === quest.answer)[0] }</p> */}
                          {quest.options
                            .filter((ans) => ans.position === quest.answer)
                            .map((q) => (
                              <p className="font-mono">
                                Ans: {q.optionText} ({quest.answer})
                              </p>
                            ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}
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
