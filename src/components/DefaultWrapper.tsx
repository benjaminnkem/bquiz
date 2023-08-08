import { ReactNode } from "react";

const DefaultWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="mx-auto md:max-w-[1488px] w-11/12">{children}</div>
    </>
  );
};

export default DefaultWrapper;
