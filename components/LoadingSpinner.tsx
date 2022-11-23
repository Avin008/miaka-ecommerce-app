import { ClipLoader } from "react-spinners";
const LoadingSpinner = () => {
  return (
    <div className="left-0 right-0 top-0 bottom-0 flex h-screen items-center justify-center">
      <ClipLoader color="black" size={25} />
    </div>
  );
};

export default LoadingSpinner;
