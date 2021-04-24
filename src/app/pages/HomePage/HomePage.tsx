import { SidePanel } from "app/domains/Common/components/sidepanel";
import { FC, useState } from "react";

const HomePage: FC = () => {
  const [isSidePanelOpen, handleIsSidePanelOpen] = useState(false);
  return (
    <div className="flex h-screen text-gray-500 bg-light-mode-content-bg dark:bg-dark-mode-content-bg dark:text-gray-200">
      <div className="flex flex-col flex-1 w-full">
        <div className="grid gap-6 mx-auto my-4 mb-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {Array(100)
            .fill("-")
            .map(() => (
              <div className="flex max-w-md mt-5 overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <div className="w-1/3 bg-cover"></div>

                <div className="w-2/3 p-4 md:p-4">
                  <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Backpack
                  </h1>

                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit In
                    odit
                  </p>

                  <div className="flex mt-2 item-center">
                    <svg
                      className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>

                    <svg
                      className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>

                    <svg
                      className="w-5 h-5 text-gray-700 fill-current dark:text-gray-300"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>

                    <svg
                      className="w-5 h-5 text-gray-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>

                    <svg
                      className="w-5 h-5 text-gray-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  </div>

                  <div className="flex justify-between mt-3 item-center">
                    <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">
                      $220
                    </h1>
                    <button
                      className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600"
                      onClick={() => handleIsSidePanelOpen(!isSidePanelOpen)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <SidePanel
        isSidePanelOpen={isSidePanelOpen}
        handleIsSidePanelOpen={handleIsSidePanelOpen}
      >
        {Array(10)
          .fill("-")
          .map(() => (
            <h1>Nav Item</h1>
          ))}
      </SidePanel>
    </div>
  );
};

export default HomePage;
