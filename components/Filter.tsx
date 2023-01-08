import { useFilterStore } from "../lib/store";
import { ProductData } from "../types";
import removeDuplicateCategories from "../utility/removeDuplicateCategories";

const filterInitialState = {
  ratings: [4, 3, 2, 1],
  sortBy: ["High to Low", "Low to High"],
};

const Filter = ({
  productData,
}: {
  productData: ProductData[];
}): React.ReactElement => {
  const category = useFilterStore(
    (state) => state.category
  );
  const selectCategory = useFilterStore(
    (state) => state.selectCategory
  );
  const ratings = useFilterStore(
    (state) => state.ratings
  );
  const selectRatings = useFilterStore(
    (state) => state.selectRatings
  );
  const sortBy = useFilterStore(
    (state) => state.sort_by
  );
  const selectSortBy = useFilterStore(
    (state) => state.selectSortBy
  );
  const clearAllFilters = useFilterStore(
    (state) => state.clearAllFilters
  );
  const price = useFilterStore(
    (state) => state.price
  );
  const selectPrice = useFilterStore(
    (state) => state.selectPrice
  );

  return (
    <div className="sticky top-20 h-fit space-y-5 rounded-md text-gray-700 sm:w-52 sm:px-2 lg:w-full lg:px-0">
      <div className="">
        <span className="flex items-center justify-between border-b border-black pb-3">
          <h1 className="text-lg font-medium">
            Filter
          </h1>
          <h1
            className="text-sm font-medium hover:cursor-pointer"
            onClick={clearAllFilters}
          >
            Clear
          </h1>
        </span>
        <div className="">
          <span className="">
            <h1 className="p-2 font-medium">
              Price
            </h1>
            <span className="flex justify-between pl-2 text-sm">
              <span>Rs.1,000</span>{" "}
              <span className="sm:hidden lg:visible">
                2,000
              </span>{" "}
              <span className="sm: lg: visible hidden">
                3,000
              </span>{" "}
              <span className="">Rs.4,000</span>
            </span>
            <span className="px-2">
              <input
                type="range"
                name=""
                id=""
                min={1000}
                max={4000}
                step={1000}
                value={price}
                className="h-1 w-11/12 cursor-pointer appearance-none bg-gray-300"
                onChange={(e) =>
                  selectPrice(
                    parseInt(e.target.value)
                  )
                }
              />
            </span>
          </span>
          <span>
            <h1 className="p-2 font-medium">
              Category
            </h1>
            <span className="border-y border-gray-600 text-sm">
              <ul className="flex flex-col gap-1 px-3">
                {removeDuplicateCategories(
                  productData
                ).map((x) => (
                  <li
                    key={x}
                    className="flex gap-2"
                  >
                    {}
                    <input
                      className="cursor-pointer selection:text-gray-900"
                      type="checkbox"
                      name={x}
                      id={x}
                      checked={category.includes(
                        x
                      )}
                      onChange={() =>
                        selectCategory(x)
                      }
                    />
                    {x}
                  </li>
                ))}
              </ul>
            </span>
          </span>
          <span>
            <h1 className="p-2 font-medium">
              Ratings
            </h1>
            <span className="border-y border-gray-600 text-sm">
              <ul className="flex flex-col gap-1 px-3">
                {filterInitialState.ratings.map(
                  (x) => (
                    <li
                      key={x}
                      className="flex gap-2"
                    >
                      <input
                        type="radio"
                        name="ratings"
                        id=""
                        onChange={() =>
                          selectRatings(x)
                        }
                        checked={ratings === x}
                        className="cursor-pointer"
                      />
                      {x} star & above
                    </li>
                  )
                )}
              </ul>
            </span>
          </span>
          <span>
            <h1 className="p-2 font-medium">
              Sort By
            </h1>
            <span className="border-y border-gray-600 text-sm">
              <ul className="flex flex-col gap-1 px-3">
                {filterInitialState.sortBy.map(
                  (x) => (
                    <li
                      key={x}
                      className="flex gap-2"
                    >
                      <input
                        type="radio"
                        name="sort_by"
                        id=""
                        checked={sortBy === x}
                        onChange={() =>
                          selectSortBy(x)
                        }
                        className="cursor-pointer"
                      />{" "}
                      {x}
                    </li>
                  )
                )}
              </ul>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Filter;
