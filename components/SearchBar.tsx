import { MdSearch } from "react-icons/md";
const SearchBar = () => {
  return (
    <div className="relative flex w-96 items-center rounded-md border border-gray-300 bg-[#F5F5F5]">
      <input
        type="text"
        placeholder="Search for Products"
        className="w-full border-none bg-transparent p-2 px-3 outline-none ring-gray-900"
      />
      <MdSearch size={28} className="absolute right-2 text-gray-600" />
    </div>
  );
};

export default SearchBar;
