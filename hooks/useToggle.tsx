import { useState } from "react";

type Props = {
  toggle: boolean;
  toggleBtn: () => void;
};

const useToggle = (): Props => {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleBtn = () => {
    setToggle((prev) => !prev);
  };

  return { toggle, toggleBtn };
};

export { useToggle };
