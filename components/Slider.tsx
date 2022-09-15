import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { GoPrimitiveDot } from "react-icons/go";
import { useState, useEffect } from "react";
import Image from "next/image";

const sliderImg = [
  "https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1582142839970-2b9e04b60f65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
];

const Slider = () => {
  const [slider, setSlider] = useState(0);

  const increaseSlider = () => {
    setSlider((prev) => {
      if (prev >= sliderImg.length - 1) {
        return 0;
      } else {
        return (prev += 1);
      }
    });
  };

  const decreaseSlider = () => {
    setSlider((prev) => {
      if (prev <= 0) {
        return sliderImg.length - 1;
      } else {
        return (prev -= 1);
      }
    });
  };

  useEffect(() => {
    setInterval(() => {
      increaseSlider();
    }, 6000);
  }, []);

  return (
    <div className="relative flex h-72 select-none items-center border border-yellow-600">
      <span className="absolute bottom-1 z-10 flex w-full items-center justify-center gap-2 text-2xl text-white">
        {sliderImg.map((x, index) => {
          if (index === slider) {
            return <GoPrimitiveDot key={x} className="text-yellow-600" />;
          } else {
            return <GoPrimitiveDot key={x} />;
          }
        })}
      </span>
      <span className="absolute left-0 z-10" onClick={() => decreaseSlider()}>
        <HiChevronLeft size={80} color="white" cursor="pointer" />
      </span>
      <Image
        layout="fill"
        objectFit="cover"
        src={sliderImg[slider]}
        className="opacity-90"
      />

      <span className="absolute right-0 z-10" onClick={() => increaseSlider()}>
        <HiChevronRight size={80} color="white" cursor="pointer" />
      </span>
    </div>
  );
};

export default Slider;
