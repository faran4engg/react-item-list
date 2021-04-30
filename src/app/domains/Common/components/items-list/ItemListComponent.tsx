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
    <div className="flex items-center min-h-screen">
      <table className="w-full mx-auto overflow-hidden bg-white divide-y divide-gray-300 rounded-lg whitespace-nowrap">
        <tbody className="divide-y divide-gray-200">
          {items.map((item) => (
            <tr key={item.image}>
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
                    <p className="font-semibold truncate ">{item.name}</p>
                    {/* <p className="text-sm tracking-wide text-gray-500">
                      {item.gender}
                    </p> */}
                  </div>
                </div>
              </td>
              <td className="px-3 py-4 text-right md:px-8">
                <a
                  className="text-purple-800 hover:underline"
                  onClick={() => {
                    setCurrentSelected(item);
                    viewSelectedItemInfo();
                  }}
                >
                  More Info
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
