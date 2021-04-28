import { FC } from "react";

const cls = {
  main: "h-full overflow-y-auto",
  mainWrapper: "container grid px-4 lg:px-4 mx-auto",
};

const Content: FC = ({ children }) => (
  <main className={cls.main}>
    <div className={cls.mainWrapper}>{children}</div>
  </main>
);

export default Content;
