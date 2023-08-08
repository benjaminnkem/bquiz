import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DefaultWrapper from "./DefaultWrapper";
import { faCoffee, faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const DefaultNavbar = () => {
  return (
    <>
      <DefaultWrapper>
          <nav>
            <ul className="flex items-center justify-center py-4 space-x-6 font-semibold">
              <li>Home</li>
              <li>Report A Bug</li>
            </ul>
          </nav>
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
            <li>
              <Link to={"/"}>
                Home <FontAwesomeIcon icon={faHome} />
              </Link>{" "}
            </li>
            <li>
              Buy Me A Coffee <FontAwesomeIcon icon={faCoffee} />{" "}
            </li>
          </ul>
        </nav>
      </DefaultWrapper>
    </>
  );
};
