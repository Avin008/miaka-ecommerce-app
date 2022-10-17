import {
  MdOutlineLocalShipping,
  MdOutlinePayments,
  MdAssignmentReturn,
} from "../icons";

const Features = () => {
  return (
    <div className="mx-auto grid h-fit grid-cols-3 items-center justify-items-center border border-gray-100 bg-[#EBD96B] p-2 text-gray-600 sm:w-full">
      <span className="flex flex-col items-center justify-center gap-1 p-2">
        <MdOutlineLocalShipping size={25} />{" "}
        <span className="text-center font-medium leading-5">
          {" "}
          Free Shipping
        </span>
      </span>
      <span className="flex flex-col items-center justify-center gap-1 p-2">
        <MdOutlinePayments size={25} />{" "}
        <span className="text-center font-medium leading-5">
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
