import { useState, useEffect } from "react";

type UseSliderReturn = {
  slider: number;
  increaseSlider: () => void;
  decreaseSlider: () => void;
};

const useSlider = (imgArr: string[]): UseSliderReturn => {
  const [slider, setSlider] = useState<number>(0);

  const increaseSlider = (): void => {
    setSlider((prev) => {
      if (prev >= imgArr.length - 1) {
        return 0;
      } else {
        return (prev += 1);
      }
    });
  };

  const decreaseSlider = (): void => {
    setSlider((prev) => {
      if (prev <= 0) {
        return imgArr.length - 1;
      } else {
        return (prev -= 1);
      }
    });
  };

  useEffect(() => {
    setInterval(() => {
      increaseSlider();
    }, 10000);
  }, []);

  return { slider, increaseSlider, decreaseSlider };
};

export default useSlider;
