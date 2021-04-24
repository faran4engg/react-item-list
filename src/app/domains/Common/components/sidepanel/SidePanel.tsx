import { SvgIcon } from "app/domains/Common/components/svg-icon";
import SidePanelOverlay from "./SidePanelOverlay";

const SidePanel = ({ children, isSidePanelOpen, handleIsSidePanelOpen }) => {
  return (
    <>
      <SidePanelOverlay
        isSidePanelOpen={isSidePanelOpen}
        handleIsSidePanelOpen={handleIsSidePanelOpen}
      />
      <div
        className={`fixed right-0 w-80 overflow-y-auto transition duration-300 ease-out transform z-30 h-full shadow-left shadow-md bg-light-mode dark:bg-dark-mode ${
          isSidePanelOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={() => handleIsSidePanelOpen(!isSidePanelOpen)}
          className="z-50 flex flex-col items-end p-2 cursor-pointer "
        >
          <SvgIcon
            className="w-8 h-8 bg-light-mode dark:bg-dark-mode"
            icon="CloseIcon"
          />
        </div>

        {children}
      </div>
    </>
  );
};

export default SidePanel;
