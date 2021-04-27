import { ResultsAPI } from "app/kernel/rick-and-morty-api/types";
export interface ItemListComponentsProps {
  items: ResultsAPI[];
  toggle: () => void;
  setCurrentSelected: (data: object) => void;
}

const ItemListComponents: React.FC<ItemListComponentsProps> = ({
  items,
  toggle,
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
            <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md">
              <img
                loading="lazy"
                src={item.image}
                alt="avatar"
                className="w-full bg-gray-300 bg-center bg-auto rounded-lg shadow-md"
              />
            </div>
            <div className="w-56 overflow-hidden bg-white rounded-lg shadow-lg md:mt-1 lg:mt-1 xl:mt-1 xs:-mt-2 sm:-mt-2 md:w-64 dark:bg-gray-800">
              <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                {item.name}
              </h3>

              <div className="flex items-center justify-between px-3 py-2 text-sm font-semibold bg-gray-200 dark:bg-gray-700">
                <span className="text-gray-800 dark:text-gray-200">
                  {item.gender === "Male" ? "🙋‍♂️" : "🙋‍♀️"} {item.gender}
                </span>
                <button
                  onClick={() => {
                    toggle();
                    setCurrentSelected(item);
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

export default ItemListComponents;
