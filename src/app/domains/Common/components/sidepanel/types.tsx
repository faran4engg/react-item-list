import { ReactNode } from "react";

export type SidePanelProps = {
  handleIsSidePanelOpen: () => void;
  isSidePanelOpen: boolean;
  children: ReactNode;
};

export type SidePanelOverlayProps = Omit<SidePanelProps, "children">;
