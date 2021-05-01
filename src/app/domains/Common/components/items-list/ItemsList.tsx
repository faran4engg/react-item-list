/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC, useState } from "react";
import { SvgIcon } from "../svg-icon";
import SearchComponent from "./SearchComponent";
import ItemListComponents from "./ItemListComponent";
import Pagination from "./Pagination";
import { ItemsListProps } from "./types";

const ItemsList: FC<ItemsListProps> = ({
  data,
  viewSelectedItemInfo,
  renderItems,
  searchBy,
  setCurrentSelected: viewItemInfo,
  currentPage,
  setPage,
  paginationMeta,
}) => {
  const [search, setSearch] = useState("");
  let filtered = searchBy
    ? data.filter((character) =>
        character[searchBy]
          .toLowerCase()
          .trim()
          .includes(search.toLowerCase().trim())
      )
    : data;

  return (
    <>
      {searchBy && <SearchComponent search={search} setSearch={setSearch} />}

      {filtered?.length < 1 ? (
        <div className="flex items-center justify-center max-w-sm mx-auto mt-8">
          <SvgIcon icon="Error404Icon" />
        </div>
      ) : renderItems ? (
        renderItems(filtered)
      ) : (
        <ItemListComponents
          items={filtered}
          viewSelectedItemInfo={viewSelectedItemInfo}
          setCurrentSelected={viewItemInfo}
        />
      )}

      {filtered?.length > 0 &&
        currentPage &&
        (paginationMeta?.next || paginationMeta?.prev) &&
        setPage && (
          <Pagination
            currentPage={currentPage}
            setPage={setPage}
            nextPage={paginationMeta.next}
            prevPage={paginationMeta.prev}
          />
        )}
    </>
  );
};

export default ItemsList;
