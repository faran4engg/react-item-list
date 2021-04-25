import { useQuery } from "react-query";
import { getCharacters } from "app/queries";

export const useCharacters = () =>
  useQuery(`characters`, () => getCharacters(), {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
