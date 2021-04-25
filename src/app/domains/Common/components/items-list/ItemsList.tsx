/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState, ReactNode } from "react";
import { ResultsAPI, InfoAPI } from "app/kernel/rick-and-morty-api/types";
import SearchComponent from "./SearchComponent";
import ItemListComponents from "./ItemListComponent";
import ItemListRoot from "./ItemListRoot";
import Pagination from "./Pagination";
import { SvgIcon } from "../svg-icon";

interface ItemsListProps {
  data: ResultsAPI[];
  canSearch: boolean;
  toggle: () => void;
  renderItems?: (data: ReactNode) => void;
  filterByField: string;
  viewItemInfo: (data: any) => void;
  page?: number;
  setPage?: (page: number) => void;
  paginated?: boolean;
  info?: InfoAPI;
}
const ItemsList: FC<ItemsListProps> = ({
  data,
  canSearch,
  page,
  toggle,
  renderItems,
  filterByField,
  viewItemInfo,
  setPage,
  paginated,
  info,
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
      ) : filtered?.length < 1 ? (
        <div className="flex items-center justify-center max-w-sm mx-auto mt-8">
          <SvgIcon icon="Error404Icon" />
        </div>
      ) : (
        <ItemListComponents
          items={filtered}
          toggle={toggle}
          setCurrentSelected={viewItemInfo}
        />
      )}
      {paginated && filtered?.length > 1 && (
        <Pagination page={page} setPage={setPage} next={info?.next} />
      )}
    </ItemListRoot>
  );
};

export default ItemsList;
