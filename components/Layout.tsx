import { Navbar } from "../components";
import { Layout } from "../types";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }: Layout) => {
  return (
    <div>
      <Navbar />
      <div className="">{children}</div>
      <Toaster />
    </div>
  );
};

export default Layout;
