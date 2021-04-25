import { RickAndMortyAPI } from "app/kernel/rick-and-morty-api/types";

export interface RickAndMortyCharactersProps {
  isLoading: boolean;
  characters?: RickAndMortyAPI;
}
