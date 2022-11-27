import { MdSearch } from "react-icons/md";
import { useState } from "react";
import useSearch from "../hooks/useSearch";
import { useRouter } from "next/router";
const SearchBar = () => {
  const [searchKey, setSearchKey] = useState<null | string>(null);
  const [displaySearchBar, setDisplaySearchBar] = useState<boolean>(false);

  const { data, isLoading, isError } = useSearch(searchKey);

  const router = useRouter();

  return (
    <div className="relative">
      <div
        className="relative flex items-center rounded-md border border-gray-300 bg-[#F5F5F5] focus-within:border-secondary sm:w-64 md:w-96"
        onClick={() => setDisplaySearchBar(true)}
      >
        <input
          type="text"
          placeholder="Search for Products"
          className="w-full border-none bg-transparent p-2 px-3 outline-none ring-gray-900"
          onChange={(e) => setSearchKey(e.target.value.toLowerCase())}
          value={searchKey!}
        />
        <MdSearch size={28} className="absolute right-2 text-gray-600" />
      </div>
      {displaySearchBar && searchKey && data?.length! > 0 && (
        <div className="absolute mt-2 w-full space-y-2 rounded-md border border-gray-300 bg-gray-100 p-1 shadow-md">
          {data?.map((x) => (
            <div
              className="flex h-10 cursor-pointer items-center border px-3  font-medium text-gray-900 hover:bg-gray-200 hover:bg-opacity-75"
              onClick={() => {
                router.push(`/product/${x.id}`);
                setSearchKey(x.name.toLowerCase());
                setDisplaySearchBar(false);
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
