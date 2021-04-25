import { FC } from "react";

export interface CharacterDetailsProps {
  handleIsSidePanelOpen?: (data: boolean) => void;
  isSidePanelOpen?: boolean;
  name: string;
}

const CharacterDetails: FC<CharacterDetailsProps> = ({
  handleIsSidePanelOpen,
  isSidePanelOpen,
  name,
}) => {
  return (
    <div className="w-56 mt-1 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
      <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
        {name}
      </h3>

      <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
        <span className="font-bold text-gray-800 dark:text-gray-200">$129</span>
        <button
          className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
          // onClick={() => handleIsSidePanelOpen(!isSidePanelOpen)}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default CharacterDetails;
