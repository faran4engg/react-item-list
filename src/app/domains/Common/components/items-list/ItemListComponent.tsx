/* eslint-disable jsx-a11y/anchor-is-valid */
import { ResultsAPI } from "app/kernel/rick-and-morty-api/types";

export interface ItemListComponentsProps {
  items: ResultsAPI[];
  viewSelectedItemInfo: () => void;
  setCurrentSelected: (data: object) => void;
}

const ItemListComponents: React.FC<ItemListComponentsProps> = ({
  items,
  viewSelectedItemInfo,
  setCurrentSelected,
}) => {
  return (
    <div className="flex items-center mb-8">
      <table className="w-full mx-auto overflow-hidden divide-y divide-gray-300 rounded-lg whitespace-nowrap bg-light-mode dark:bg-dark-mode">
        <tbody>
          {items.map((item) => (
            <tr
              key={item.image}
              className="border-b-2 border-gray-300 dark:border-black"
            >
              <td className="px-3 py-4 md:px-8">
                <div className="flex items-center space-x-3">
                  <div className="inline-flex w-10 h-10">
                    <img
                      loading="lazy"
                      className="object-cover w-10 h-10 rounded-full"
                      alt="User avatar"
                      src={item.image}
                    />
                  </div>
                  <div>
                    <p className="px-3 py-1 font-semibold tracking-wide text-left truncate w-28 md:w-full">
                      {item.name}
                    </p>
                    {/* <p className="text-sm tracking-wide text-gray-500">
                      {item.gender}
                    </p> */}
                  </div>
                </div>
              </td>
              <td className="px-3 py-4 text-right md:px-8">
                <a
                  className="px-2 py-1 text-xs text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded cursor-pointer dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none"
                  onClick={() => {
                    setCurrentSelected(item);
                    viewSelectedItemInfo();
                  }}
                >
                  ℹ️ More Info
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemListComponents;
