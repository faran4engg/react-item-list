import { SidePanel } from "app/domains/Common/components/sidepanel";
import { FC, useState } from "react";
import RickAndMortyContainer from "app/domains/RickAndMorty/containers/RickAndMortyContainer";
import { RickAndMortyCharacters } from "app/domains/RickAndMorty/components/RickAndMortyCharacters";

const HomePage: FC = () => {
  const [isSidePanelOpen, handleIsSidePanelOpen] = useState(false);
  function toggle() {
    handleIsSidePanelOpen((prevValue) => !prevValue);
  }
  return (
    <>
      <RickAndMortyContainer>
        {({ isLoading, characters, setPage, page }) => (
          <RickAndMortyCharacters
            isLoading={isLoading}
            characters={characters}
            toggle={toggle}
            setPage={setPage}
            page={page}
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
