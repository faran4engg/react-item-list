import { SidePanel } from "app/domains/Common/components/sidepanel";
import { FC, useState } from "react";
import RickAndMortyContainer from "app/domains/RickAndMorty/containers/RickAndMortyContainer";
import { RickAndMortyCharacters } from "app/domains/RickAndMorty/components/RickAndMortyCharacters";

const HomePage: FC = () => {
  const [isSidePanelOpen, handleIsSidePanelOpen] = useState(false);

  return (
    <>
      <RickAndMortyContainer>
        {({ isLoading, characters }) => (
          <RickAndMortyCharacters
            isLoading={isLoading}
            characters={characters}
          />
        )}
      </RickAndMortyContainer>

      <SidePanel
        isSidePanelOpen={isSidePanelOpen}
        handleIsSidePanelOpen={handleIsSidePanelOpen}
      >
        {Array(10)
          .fill("-")
          .map(() => (
            <h1>Nav Item</h1>
          ))}
      </SidePanel>
    </>
  );
};

export default HomePage;
