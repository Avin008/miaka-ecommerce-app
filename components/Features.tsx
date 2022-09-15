import {
  MdOutlineLocalShipping,
  MdOutlinePayments,
  MdAssignmentReturn,
} from "react-icons/md";
const Features = () => {
  return (
    <div className="mx-auto grid h-fit grid-cols-3  items-center justify-items-center rounded-md border border-gray-100 bg-[#f6f6f6] p-5 text-gray-600 sm:w-full md:w-3/4">
      <span className="flex flex-col items-center justify-center gap-1 p-2">
        <MdOutlineLocalShipping size={25} />{" "}
        <span className="font-base text-center leading-5"> Free Shipping</span>
      </span>
      <span className="flex flex-col items-center justify-center gap-1 p-2">
        <MdOutlinePayments size={25} />{" "}
        <span className="font-base text-center leading-5">
          {" "}
          Secure Payment{" "}
        </span>
      </span>
      <span className="flex flex-col items-center justify-center gap-1 p-2">
        <MdAssignmentReturn size={25} />{" "}
        <span className="text-center text-base font-medium leading-5">
          14-Day Returns
        </span>
      </span>
    </div>
  );
};

export default Features;
