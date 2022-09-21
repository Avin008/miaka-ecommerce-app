const Filter = (): React.ReactElement => {
  return (
    <div className="sticky top-20 h-fit w-full space-y-5 rounded-md text-gray-700">
      <div className="">
        <span className="flex items-center justify-between border-b border-black pb-2">
          <h1 className="text-lg font-medium">Filter</h1>
          <h1 className="text-sm font-medium hover:cursor-pointer">Clear</h1>
        </span>
        <div className="">
          <span>
            <h1 className="p-2 font-medium">Category</h1>
            <span className="border-y border-gray-600 text-sm">
              <ul className="flex flex-col gap-1 px-3">
                <li className="flex gap-2">
                  <input
                    className="selection:text-gray-900"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  Jacket
                </li>
                <li className="flex gap-2">
                  <input
                    className="selection:text-gray-900"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  Tshirt
                </li>
                <li className="flex gap-2">
                  <input
                    className="selection:text-gray-900"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  Watches
                </li>
                <li className="flex gap-2">
                  <input
                    className="selection:text-gray-900"
                    type="checkbox"
                    name=""
                    id=""
                  />
                  Shoes
                </li>
              </ul>
            </span>
          </span>
          <span>
            <h1 className="p-2 font-medium">Ratings</h1>
            <span className="border-y border-gray-600 text-sm">
              <ul className="flex flex-col gap-1 px-3">
                <li className="flex gap-2">
                  <input type="radio" name="ratings" id="" />4 star & above
                </li>
                <li className="flex gap-2">
                  <input type="radio" name="ratings" id="" />3 star & above
                </li>
                <li className="flex gap-2">
                  <input type="radio" name="ratings" id="" />2 star & above
                </li>
                <li className="flex gap-2">
                  <input type="radio" name="ratings" id="" />1 star & above
                </li>
              </ul>
            </span>
          </span>
          <span>
            <h1 className="p-2 font-medium">Sort By</h1>
            <span className="border-y border-gray-600 text-sm">
              <ul className="flex flex-col gap-1 px-3">
                <li className="flex gap-2">
                  <input type="radio" name="ratings" id="" /> High to Low
                </li>
                <li className="flex gap-2">
                  <input type="radio" name="ratings" id="" /> Low to High
                </li>
              </ul>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Filter;
