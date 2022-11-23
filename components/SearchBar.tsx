import { MdSearch } from "react-icons/md";
import { useState } from "react";
import useSearch from "../hooks/useSearch";
import { useRouter } from "next/router";
const SearchBar = () => {
  const [searchKey, setSearchKey] = useState<null | string>(null);

  const { data, isLoading, isError } = useSearch(searchKey);

  const router = useRouter();

  return (
    <div className="relative">
      <div className="relative flex w-96 items-center rounded-md border border-gray-300 bg-[#F5F5F5]">
        <input
          type="text"
          placeholder="Search for Products"
          className="w-full border-none bg-transparent p-2 px-3 outline-none ring-gray-900"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <MdSearch size={28} className="absolute right-2 text-gray-600" />
      </div>
      {searchKey && (
        <div className="absolute mt-2 w-full space-y-2 rounded-md border border-gray-300 bg-slate-100 p-1">
          {data?.map((x) => (
            <div
              className="h-10 cursor-pointer border border-gray-400"
              onClick={() => {
                router.push(`/product/${x.id}`);
              }}
              key={x.id}
            >
              {x.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
