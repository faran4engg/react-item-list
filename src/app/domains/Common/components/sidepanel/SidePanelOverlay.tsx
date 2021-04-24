import { FC } from "react";
import { SidePanelOverlayProps } from "./types";

const cls = {
  overlay: (isSidePanelOpen) =>
    `fixed inset-0 z-20 block bg-black transition-opacity opacity-50 transform ${
      isSidePanelOpen ? "translate-x-0" : "translate-x-full"
    } `,
};

const SidePanelOverlay: FC<SidePanelOverlayProps> = ({
  isSidePanelOpen,
  handleIsSidePanelOpen,
}) => (
  <div
    onClick={() => handleIsSidePanelOpen(false)}
    className={cls.overlay(isSidePanelOpen)}
  />
);

export default SidePanelOverlay;
