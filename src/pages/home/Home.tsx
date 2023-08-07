import DefaultWrapper from "../../components/DefaultWrapper";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="wrapper bg-slate-900">
        <header className="home-header">
          <h1>Welcome to BQuiz</h1>
          <img src="/images/backgrounds/bg4.jpg" alt="Header Background" className="header-img" />
        </header>

        <main>
          <Navbar />
          <DefaultWrapper>
            <section className="available">
              <h2>Quizzes available</h2>

              <div className="quiz-avail-con">
                <div className="quiz-self">
                  <p>Javascript Questions</p>
                </div>
                <div className="quiz-self">
                  <p>Game Dev</p>
                </div>
                <div className="quiz-self">
                  <p>Statistics</p>
                </div>
                <div className="quiz-self">
                  <p>Mathematics</p>
                </div>
              </div>
            </section>
          </DefaultWrapper>
        </main>
      </div>
    </>
  );
};

export default Home;
