import { FC } from "react";
import { SidePanelOverlayProps } from "./types";

const SidePanelOverlay: FC<SidePanelOverlayProps> = ({
  isSidePanelOpen,
  handleIsSidePanelOpen,
}) => (
  <div
    onClick={handleIsSidePanelOpen}
    className={`fixed inset-0 z-20 block bg-black transition-opacity opacity-90 transform ${
      isSidePanelOpen ? "translate-x-0" : "translate-x-full"
    }`}
  />
);

export default SidePanelOverlay;
