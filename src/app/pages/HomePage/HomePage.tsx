import { FC } from "react";
import RickAndMortyContainer from "app/domains/RickAndMorty/containers/RickAndMortyContainer";
import { RickAndMortyCharacters } from "app/domains/RickAndMorty/components/RickAndMortyCharacters";

const HomePage: FC = () => {
  return (
    <>
      <RickAndMortyContainer>
        {({ isLoading, characters, setPage, page }) => (
          <RickAndMortyCharacters
            isLoading={isLoading}
            characters={characters}
            setPage={setPage}
            page={page}
          />
        )}
      </RickAndMortyContainer>
    </>
  );
};

export default HomePage;
