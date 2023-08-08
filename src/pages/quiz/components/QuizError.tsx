import { faHome, faSadTear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const QuizErrPage = () => {
  return (
    <>
      <div className="absolute grid w-full h-full place-content-center">
        <div className="text-center">
          <FontAwesomeIcon icon={faSadTear} className="text-4xl" />

          <p className="mt-4">An unexpected error occurred</p>
          <Link to={"/"}>
            <button className="px-6 py-2 mt-2 duration-200 bg-purple-600 bg-opacity-50 border-2 border-purple-600 rounded-lg shadow-md border-opacity-70 hover:border-purple-400 group">
              Go Home{" "}
              <FontAwesomeIcon
                icon={faHome}
                className="duration-200 group-hover:text-slate-300"
              />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default QuizErrPage;
