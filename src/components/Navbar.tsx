import DefaultWrapper from "./DefaultWrapper";

const Navbar = () => {
  return (
    <>
      <DefaultWrapper>
        <div className="lock-con navbar">
          <nav>
            <ul>
              <li>Quiz</li>
              <li>Home</li>
              <li>Create Quiz</li>
            </ul>
          </nav>
        </div>
      </DefaultWrapper>
      ;
    </>
  );
};

export default Navbar;
