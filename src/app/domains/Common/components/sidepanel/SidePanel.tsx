import { useLayoutEffect, useState } from "react";

const SidePanel = ({ width, height, children }) => {
  const [xPosition, setX] = useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  useLayoutEffect(() => {
    setX(0);
  }, []);
  return (
    <>
      <div
        className="flex flex-col h-full duration-700 ease-in-out bg-white border-r border-solid rounded-none"
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height,
        }}
      >
        <button
          onClick={() => toggleMenu()}
          className="toggle-menu"
          style={{
            transform: `translate(${width}px, 20vh)`,
          }}
        >
          .
        </button>
        <div className="content">{children}</div>
      </div>
    </>
  );
};

export default SidePanel;
