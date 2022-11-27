import { Navbar } from "../components";
import { Layout } from "../types";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }: Layout) => {
  return (
    <div className="sm:pb-20 tab:pb-5">
      <Navbar />
      <div className="">{children}</div>
      <Toaster position="bottom-center" />
    </div>
  );
};

export default Layout;
