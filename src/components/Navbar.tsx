import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DefaultWrapper from "./DefaultWrapper";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const DefaultNavbar = () => {
  return (
    <>
      <DefaultWrapper>
        <div className="lock-con navbar">
          <nav>
            <ul>
              <li>Home</li>
              <li>Report A Bug</li>
            </ul>
          </nav>
        </div>
      </DefaultWrapper>
      ;
    </>
  );
};

export const MainNavbar = () => {
  return (
    <>
      <DefaultWrapper>
        <nav className="flex items-center justify-between py-4">
          <Link to={"/"}>
            <span className="text-2xl font-extrabold text-purple-200 border-b border-purple-600">BQuiz</span>
          </Link>

          <ul className="flex items-center justify-between space-x-4 font-semibold">
            <li>Home</li>
            <li>
              Buy Me A Coffee <FontAwesomeIcon icon={faCoffee} />{" "}
            </li>
          </ul>
        </nav>
      </DefaultWrapper>
    </>
  );
};
