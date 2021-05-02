import { FC, useState } from "react";
import { ItemsList } from "app/domains/Common/components/items-list";
import { SidePanel } from "app/domains/Common/components/sidepanel";
import { ResultsAPI } from "app/kernel/rick-and-morty-api/types";
import NoResult from "../no-result/NoResult";
import CardLoader from "../card-loader/CardLoader";
import SelectedCharacterInfo from "./SelectedCharacterInfo";
import { RickAndMortyCharactersProps } from "./types";
import RickAndMortyListItems from "./RickAndMortyListItems";

const RickAndMortyCharacters: FC<RickAndMortyCharactersProps> = ({
  isLoading,
  characters,
  page,
  setPage,
}): any => {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  const [currentSelected, setCurrentSelected] = useState<ResultsAPI | null>(
    null
  );

  if (isLoading) return <CardLoader />;
  if (!isLoading && !characters) return <NoResult />;

  const renderItems = (items) => (
    <RickAndMortyListItems
      items={items}
      viewSelectedItemInfo={() => setIsSidePanelOpen((prevValue) => !prevValue)}
      setCurrentSelected={setCurrentSelected}
    />
  );

  return (
    <>
      <SidePanel
        isSidePanelOpen={isSidePanelOpen}
        handleIsSidePanelOpen={() =>
          setIsSidePanelOpen((prevValue) => !prevValue)
        }
      >
        {currentSelected && (
          <SelectedCharacterInfo character={currentSelected} />
        )}
      </SidePanel>

      <ItemsList
        renderItems={renderItems}
        data={characters?.results || []}
        viewSelectedItemInfo={() =>
          setIsSidePanelOpen((prevValue) => !prevValue)
        }
        searchBy="name"
        setCurrentSelected={setCurrentSelected}
        currentPage={page}
        setPage={setPage}
        paginationMeta={characters?.info}
      />
    </>
  );
};

export default RickAndMortyCharacters;
