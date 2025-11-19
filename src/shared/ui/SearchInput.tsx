import { Dispatch, SetStateAction } from "react";
import SearchSvg from "@icons/search.svg";
import { Input } from "./Input";

export const SearchInput = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="relative">
      <SearchSvg className="w-6 h-6 absolute left-2 top-1/2 transform -translate-y-1/2" />
      <Input
        className="pl-10"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Поиск"
      />
    </div>
  );
};
