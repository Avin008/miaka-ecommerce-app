import { Navbar } from "../components";
import { Layout } from "../types";

const Layout = ({ children }: Layout) => {
  return (
    <div>
      <Navbar />
      <div className="">{children}</div>
    </div>
  );
};

export default Layout;
