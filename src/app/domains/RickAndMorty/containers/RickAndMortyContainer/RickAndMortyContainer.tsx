import { FC } from "react";
import { OwnProps, RenderProps } from "./types";
import { useCharacters } from "app/hooks/queries-hooks/useCharacters/useCharacters";

const RickAndMortyContainer: FC<OwnProps & RenderProps> = ({ children }) => {
  const { data, isLoading } = useCharacters();
  return (
    <div className="text-gray-600 dark:text-gray-400">
      {children({
        isLoading: isLoading,
        characters: data?.data,
      })}
    </div>
  );
};

export default RickAndMortyContainer;
