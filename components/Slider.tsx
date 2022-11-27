import Image from "next/image";
import { useSlider } from "../hooks";
import { GoPrimitiveDot, HiChevronLeft, HiChevronRight } from "../icons";

const sliderImg = [
  "https://images.unsplash.com/photo-1545535408-2b4d520cbd88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHNhbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
  "https://images.unsplash.com/photo-1582142839970-2b9e04b60f65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGNsb3RoZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
];

const Slider = () => {
  const { slider, increaseSlider, decreaseSlider } = useSlider(sliderImg);

  return (
    <div className="relative mx-auto flex h-72 select-none items-center rounded-lg border border-yellow-600 shadow-lg">
      <span className="absolute bottom-1 z-10 flex w-full items-center justify-center gap-2 text-2xl text-white">
        {sliderImg.map((x, index) => {
          if (index === slider) {
            return <GoPrimitiveDot key={index} className="text-yellow-600" />;
          } else {
            return <GoPrimitiveDot key={index} />;
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
        className="rounded-lg opacity-90"
        alt="slider"
      />

      <span className="absolute right-0 z-10" onClick={() => increaseSlider()}>
        <HiChevronRight size={80} color="white" cursor="pointer" />
      </span>
    </div>
  );
};

export default Slider;
