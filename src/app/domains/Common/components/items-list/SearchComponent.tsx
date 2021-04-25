import Input from "app/domains/Common/components/input/Input";
export interface SearchComponentProps {
  search: string;
  setSearch: (value: string) => void;
}

const SearchComponent: React.SFC<SearchComponentProps> = ({
  search,
  setSearch,
}) => {
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
};

export default SearchComponent;
