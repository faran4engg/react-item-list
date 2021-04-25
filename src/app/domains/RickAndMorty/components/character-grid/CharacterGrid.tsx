import { FC } from "react";
import CharacterDetails from "../character-details/CharacterDetails";
import CharacterThumbnail from "../character-thumbnail/CharacterThumbnail";
import NotFoundPage from "app/pages/NotFoundPage";
import { CardSkeleton } from "app/domains/Common/components/loaders";
import { ResultsAPI } from "app/kernel/rick-and-morty-api/types";

export interface CharacterGridProps {
  handleIsSidePanelOpen: (flag: boolean) => void;
  isSidePanelOpen: boolean;
  isLoading: boolean;
  data?: ResultsAPI[];
}

const CharacterGrid: FC<CharacterGridProps> = ({
  handleIsSidePanelOpen,
  isSidePanelOpen,
  isLoading,
  data,
}) => {
  const errorCls = "flex items-center justify-center mx-auto mt-8";

  return (
    <>
      {!isLoading && !data?.length ? (
        <div className={errorCls}>
          <NotFoundPage />
        </div>
      ) : isLoading && !data?.length ? (
        <CardSkeleton noOfCards={4} />
      ) : (
        data?.map(({ image, name }) => (
          <div
            key={name}
            className="flex flex-col items-center justify-center mx-auto"
          >
            <CharacterThumbnail url={image} />
            <CharacterDetails
              name={name}
              isSidePanelOpen={isSidePanelOpen}
              handleIsSidePanelOpen={handleIsSidePanelOpen}
            />
          </div>
        ))
      )}
    </>
  );
};

export default CharacterGrid;
