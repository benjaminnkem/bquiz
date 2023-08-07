import { ReactNode } from "react";

const DefaultWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="wrap">{children}</div>
    </>
  );
};

export default DefaultWrapper;
