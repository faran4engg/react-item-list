import { FC } from "react";
import { ContentProps } from "./types";

const cls = {
  main: "h-full overflow-y-auto",
  mainWrapper: "grid",
};

const Content: FC<ContentProps> = ({ children }) => (
  <main className={cls.main}>
    <div className={cls.mainWrapper}>{children}</div>
  </main>
);

export default Content;
