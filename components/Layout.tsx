import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      <div className="mt-20 px-4">{children}</div>
    </div>
  );
};

export default Layout;
