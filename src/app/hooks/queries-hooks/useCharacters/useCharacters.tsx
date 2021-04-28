import { useQuery } from "react-query";
import { getCharacters } from "app/queries";

export const useCharacters = ({ page }) =>
  useQuery(["characters", page], () => getCharacters(page), {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    keepPreviousData: true,
  });
