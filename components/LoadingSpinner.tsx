import { ClipLoader } from "react-spinners";
const LoadingSpinner = () => {
  return (
    <div className="absoluteute flex h-screen items-center justify-center">
      <ClipLoader color="black" size={25} />
    </div>
  );
};

export default LoadingSpinner;
