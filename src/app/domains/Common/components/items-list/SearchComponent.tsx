import { FC } from "react";
import { Input } from "app/domains/Common/components/input";
export interface SearchComponentProps {
  search: string;
  setSearch: (value: string) => void;
}

const SearchComponent: FC<SearchComponentProps> = ({ search, setSearch }) => {
  return (
    <div className="w-3/4 mx-auto mt-4 mb-4 md:w-2/4">
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
        className="my-1"
      />
    </div>
  );
};

export default SearchComponent;
