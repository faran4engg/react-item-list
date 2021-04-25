import { ReactNode } from "react";
import { RickAndMortyAPI } from "app/kernel/rick-and-morty-api/types";

interface ChildrenProps {
  isLoading: boolean;
  characters?: RickAndMortyAPI;
}

export interface OwnProps {}
export interface RenderProps {
  children: (props: ChildrenProps) => ReactNode;
}
