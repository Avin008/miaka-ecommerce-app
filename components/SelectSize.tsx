import { useState } from "react";

const sizes = ["S", "M", "L", "XL"];

const SelectSize = (): React.ReactElement => {
  const [size, setSize] = useState<string | undefined>();

  return (
    <div className="absolute bottom-0 right-0 left-0 z-10 flex items-center justify-around bg-gray-300 p-2 text-sm font-medium text-gray-800 opacity-75 transition-all">
      {sizes.map((x) => (
        <span
          className={`${
            x === size && `bg-gray-800 text-white opacity-100`
          } flex items-center justify-center rounded-full border border-gray-800 p-4 transition-all`}
          onClick={(e) => setSize(e.currentTarget.innerText)}
        >
          <span className="absolute">{x}</span>
        </span>
      ))}
    </div>
  );
};

export default SelectSize;
