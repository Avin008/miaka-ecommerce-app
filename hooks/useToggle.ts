import { useState } from "react";

type Props = {
  toggle: boolean;
  toggleBtn: () => void;
  toggleTrue: () => void;
  toggleFalse: () => void;
};

const useToggle = (): Props => {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleBtn = () => {
    setToggle((prev) => !prev);
  };

  const toggleTrue = () => {
    setToggle(true);
  };

  const toggleFalse = () => {
    setToggle(false);
  };

  return { toggle, toggleBtn, toggleTrue, toggleFalse };
};

export default useToggle;
