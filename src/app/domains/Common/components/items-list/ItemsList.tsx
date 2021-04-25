import { FC } from "react";

interface ItemsListCompound {
  Content: FC;
}
const ItemsList: FC & ItemsListCompound = ({ children }) => {
  return (
    <>
      <div className="p-4 text-2xl text-center">Search component</div>
      <div className="grid gap-6 mx-auto my-4 mb-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {children}
      </div>
    </>
  );
};

const ItemsListContent: FC = ({ children }): any => children;

ItemsList.Content = ItemsListContent;

export default ItemsList;
