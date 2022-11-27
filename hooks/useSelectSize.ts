import { useState } from "react";

type useSelectReturnType = {
  size: string;
  sizeSetter: () => void;
};

const useSelectSize = () => {
  const [size, setSize] = useState<string | undefined>();

  const sizeSetter = (size: string): void => {
    setSize(size);
  };

  return { size, sizeSetter };
};

export default useSelectSize;
