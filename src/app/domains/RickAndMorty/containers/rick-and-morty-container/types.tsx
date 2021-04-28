import { ReactNode } from "react";
import { RickAndMortyAPI } from "app/kernel/rick-and-morty-api/types";

interface ChildrenProps {
  isLoading: boolean;
  characters?: RickAndMortyAPI;
  setPage: (page: number) => void;
  page: number;
}

export interface RenderProps {
  children: (props: ChildrenProps) => ReactNode;
}
