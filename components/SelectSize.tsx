import { SelectSizeProps } from "../types";

const SelectSize = ({ data }: SelectSizeProps): React.ReactElement => {
  return (
    <div className="absolute bottom-0 right-0 left-0 z-10 flex flex-col items-center justify-around gap-1 bg-gray-300 bg-opacity-75 p-2 text-sm font-medium text-gray-800 transition-all">
      {!data.size && (
        <span className="text-red-800 transition-all">Please select Size:</span>
      )}
      <span className="flex w-full justify-evenly">
        {data.sizes.map((x) => (
          <span
            key={x}
            className={`${
              x === data.size && `bg-gray-800 text-white`
            } flex items-center justify-center rounded-full border border-gray-800 p-4 opacity-90 transition-all`}
            onClick={(e) => data.sizeSetter(e.currentTarget.innerText)}
          >
            <span className="absolute opacity-90">{x}</span>
          </span>
        ))}
      </span>
    </div>
  );
};

export default SelectSize;
