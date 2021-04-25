import { FC } from "react";
import { ItemsList } from "app/domains/Common/components/items-list";
import { CardSkeleton } from "app/domains/Common/components/loaders";
import NotFoundPage from "app/pages/NotFoundPage";
import { RickAndMortyCharactersProps } from "./types";

const RickAndMortyCharacters: FC<RickAndMortyCharactersProps> = ({
  isLoading,
  characters,
  toggle,
  page,
  setPage,
}): any => {
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

  function BeautifulListContainer(items) {
    return (
      <>
        <div className="grid gap-6 mx-auto my-4 mb-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items?.map(({ image, name }, i) => (
            <div
              key={image}
              className="flex flex-col items-center justify-center mx-auto"
            >
              <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
                <img
                  loading="lazy"
                  src={image}
                  alt="avatar"
                  className="w-full bg-gray-300 bg-center bg-auto rounded-lg shadow-md"
                />
              </div>
              <div className="w-56 mt-1 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                  {name}
                </h3>

                <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                  <span className="font-bold text-gray-800 dark:text-gray-200">
                    some info
                  </span>
                  <button
                    onClick={toggle}
                    className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                  >
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="flex-none float-right w-full px-6 py-3 text-lg font-semibold leading-6 text-white transition-colors duration-200 bg-gray-900 border border-transparent sm:w-auto hover:bg-gray-700 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none"
          onClick={() => setPage(page + 1)}
          disabled={!characters?.info.next}
        >
          Next
        </button>
        <button
          className="flex-none float-right w-full px-6 py-3 text-lg font-semibold leading-6 text-white transition-colors duration-200 bg-gray-900 border border-transparent sm:w-auto hover:bg-gray-700 rounded-xl focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>
      </>
    );
  }

  return (
    <ItemsList
      renderItems={BeautifulListContainer}
      data={characters?.results}
      toggle={toggle}
      canSearch
      filterByField={"name"}
    />
  );
};

export default RickAndMortyCharacters;
