import { RickAndMortyAPI } from "app/kernel/rick-and-morty-api/types";

export interface RickAndMortyCharactersProps {
  isLoading: boolean;
  characters?: RickAndMortyAPI;
  toggle: () => void;
  setPage: (page: number) => void;
  page: number;
}
