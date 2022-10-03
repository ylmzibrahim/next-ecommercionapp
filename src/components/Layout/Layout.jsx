import { useRouter } from "next/router";

const Layout = ({ children }) => {

  return (
    <div className="bg-slate-50 dark:bg-slate-700 min-h-screen flex flex-col ">
      {/* <NavBar /> */}
      <div>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
