import { FC, useState } from "react";
import { ItemsList } from "app/domains/Common/components/items-list";
import { RickAndMortyCharactersProps } from "./types";
import { SidePanel } from "app/domains/Common/components/sidepanel";
import SelectedCharacterInfo from "./SelectedCharacterInfo";
import { ResultsAPI } from "app/kernel/rick-and-morty-api/types";
import NoResult from "../no-result/NoResult";
import CardLoader from "../card-loader/CardLoader";

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
        page={page}
        setPage={setPage}
        data={characters?.results || []}
        toggle={() => setIsSidePanelOpen((prevValue) => !prevValue)}
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
