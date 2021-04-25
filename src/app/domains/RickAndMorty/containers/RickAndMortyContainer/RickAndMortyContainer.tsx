import { FC, useState } from "react";
import { OwnProps, RenderProps } from "./types";
import { useCharacters } from "app/hooks/queries-hooks/useCharacters/useCharacters";

const RickAndMortyContainer: FC<OwnProps & RenderProps> = ({ children }) => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useCharacters({ page });
  return (
    <div className="text-gray-600 dark:text-gray-400">
      {children({
        isLoading: isLoading,
        characters: data?.data,
        setPage,
        page,
      })}
    </div>
  );
};

export default RickAndMortyContainer;
