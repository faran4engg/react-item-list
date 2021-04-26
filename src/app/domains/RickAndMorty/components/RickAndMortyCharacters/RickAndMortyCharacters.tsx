import { FC, useState } from "react";
import { ItemsList } from "app/domains/Common/components/items-list";
import { CardSkeleton } from "app/domains/Common/components/loaders";
import NotFoundPage from "app/pages/NotFoundPage";
import { RickAndMortyCharactersProps } from "./types";
import { SidePanel } from "app/domains/Common/components/sidepanel";
import SelectedCharacterInfo from "./SelectedCharacterInfo";
import { ResultsAPI } from "app/kernel/rick-and-morty-api/types";

const RickAndMortyCharacters: FC<RickAndMortyCharactersProps> = ({
  isLoading,
  characters,
  page,
  setPage,
}): any => {
  const [isSidePanelOpen, handleIsSidePanelOpen] = useState(false);
  const [currentSelected, setCurrentSelected] = useState<ResultsAPI | null>(
    null
  );

  function toggle() {
    handleIsSidePanelOpen((prevValue) => !prevValue);
  }

  if (isLoading)
    return (
      <div className="grid gap-6 mx-auto my-4 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <CardSkeleton noOfCards={4} />
      </div>
    );

  if (!isLoading && !characters) {
    return (
      <div className="flex items-center justify-center mx-auto mt-8">
        <NotFoundPage />
      </div>
    );
  }
  return (
    <>
      <SidePanel
        isSidePanelOpen={isSidePanelOpen}
        handleIsSidePanelOpen={toggle}
      >
        {currentSelected && (
          <SelectedCharacterInfo character={currentSelected} />
        )}
      </SidePanel>

      <ItemsList
        page={page}
        setPage={setPage}
        data={characters?.results || []}
        toggle={toggle}
        canSearch
        filterByField={"name"}
        viewItemInfo={setCurrentSelected}
        paginated
        info={characters?.info}
      />
    </>
  );
};

export default RickAndMortyCharacters;
