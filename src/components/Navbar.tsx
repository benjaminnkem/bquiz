import DefaultWrapper from "./DefaultWrapper";

const Navbar = () => {
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

export default Navbar;
