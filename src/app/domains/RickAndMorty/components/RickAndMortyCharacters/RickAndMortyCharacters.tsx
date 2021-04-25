import { FC, useState } from "react";
import { ItemsList } from "app/domains/Common/components/items-list";
import { CardSkeleton } from "app/domains/Common/components/loaders";
import NotFoundPage from "app/pages/NotFoundPage";
import { RickAndMortyCharactersProps } from "./types";
import { SidePanel } from "app/domains/Common/components/sidepanel";

const RickAndMortyCharacters: FC<RickAndMortyCharactersProps> = ({
  isLoading,
  characters,
  page,
  setPage,
}): any => {
  const [isSidePanelOpen, handleIsSidePanelOpen] = useState(false);
  const [currentSelected, setCurrentSelected] = useState({});

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
        <div className="max-w-sm mx-auto ">
          <img
            loading="lazy"
            className="object-cover object-center w-full h-auto"
            src={currentSelected["image"]}
            alt="avatar"
          />

          <div className="px-6 py-4 ">
            <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
              ✍️ {currentSelected["name"]}
            </h1>

            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
              <h1 className="px-2 text-sm">❣️ {currentSelected["status"]}</h1>
            </div>

            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
              <h1 className="px-2 text-sm">
                🌎 {currentSelected["location"]?.name}
              </h1>
            </div>

            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
              <h1 className="px-2 text-sm">➡️ {currentSelected["gender"]}</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
              <h1 className="px-2 text-sm">🤖 {currentSelected["species"]}</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
              <h1 className="px-2 text-sm">
                🎬 Episodes - {currentSelected["episode"]?.length}
              </h1>
            </div>
          </div>
        </div>
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
