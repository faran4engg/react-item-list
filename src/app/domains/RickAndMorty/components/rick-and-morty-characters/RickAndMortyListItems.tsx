import { ProgressiveImage } from "app/domains/Common/components/progressive-image";
import { ResultsAPI } from "app/kernel/rick-and-morty-api/types";

import placeHolderImage from "assets/images/placeholder.jpg";
import { FC } from "react";
export interface RickAndMortyListItemsProps {
  items: ResultsAPI[];
  viewSelectedItemInfo: () => void;
  setCurrentSelected: (data: any) => void;
}

const RickAndMortyListItems: FC<RickAndMortyListItemsProps> = ({
  items,
  viewSelectedItemInfo,
  setCurrentSelected,
}) => {
  return (
    <>
      <div className="grid gap-6 mx-auto my-4 mb-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items?.map((item) => (
          <div
            key={item.image}
            className="flex flex-col items-center justify-center mx-auto"
          >
            <div className="w-full h-auto bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
              <ProgressiveImage
                placeholderImg={placeHolderImage}
                src={item.image}
                alt={item.name}
                className="w-full bg-gray-300 bg-center bg-auto rounded-lg shadow-md"
              />
            </div>
            <div className="w-56 -mt-8 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
              <h3 className="py-1 font-semibold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                {item.name}
              </h3>

              <div className="flex items-center justify-between px-3 py-1 text-sm font-medium bg-gray-200 dark:bg-gray-700">
                <span className="text-gray-800 dark:text-gray-200">
                  {item.gender === "Male" ? "🙋‍♂️" : "🙋‍♀️"} {item.gender}
                </span>
                <button
                  onClick={() => {
                    setCurrentSelected(item);
                    viewSelectedItemInfo();
                  }}
                  className="px-2 py-1 text-xs text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                >
                  ℹ️ More Info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RickAndMortyListItems;
