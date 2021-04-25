import { FC, useState, ReactNode } from "react";
import { ResultsAPI } from "app/kernel/rick-and-morty-api/types";
import Input from "./../input/Input";

interface ItemsListProps {
  data?: ResultsAPI[];
  canSearch: boolean;
  toggle: () => void;
  renderItems?: (data: ReactNode) => void;
  filterByField: string;
}
const ItemsList: FC<ItemsListProps> = ({
  data,
  canSearch,
  toggle,
  renderItems,
  filterByField,
}) => {
  const [search, setSearch] = useState("");
  const filtered = data?.filter((character) =>
    character[filterByField]
      .toLowerCase()
      .trim()
      .includes(search.toLowerCase().trim())
  );
  return (
    <ItemListRoot>
      {canSearch && <SearchComponent search={search} setSearch={setSearch} />}
      {renderItems ? (
        renderItems(filtered)
      ) : (
        <ItemListComponent items={filtered} toggle={toggle} />
      )}
    </ItemListRoot>
  );
};

export default ItemsList;

function ItemListRoot({ children, ...rest }) {
  return <div {...rest}>{children}</div>;
}

function SearchComponent({ search, setSearch }) {
  return (
    <div className="w-full mx-auto mt-4 mb-4 md:w-2/4">
      <Input
        autocomplete="off"
        name="searhVideo"
        type="text"
        value={search}
        onChange={(e) => {
          const val = e.target.value;
          setSearch(val);
        }}
        placeholder={`Search`}
        withIcon
        icon={<span className="w-5 h-5 mx-auto ">🔍</span>}
        className="mt-1"
      />
    </div>
  );
}

function ItemListComponent({ items, toggle }) {
  return <>lol</>;
}
