import { FC } from "react";
import RickAndMortyContainer from "app/domains/RickAndMorty/containers/rick-and-morty-container";
import { RickAndMortyCharacters } from "app/domains/RickAndMorty/components/rick-and-morty-characters";

const HomePage: FC = () => (
  <RickAndMortyContainer>
    {(props) => <RickAndMortyCharacters {...props} />}
  </RickAndMortyContainer>
);

export default HomePage;
