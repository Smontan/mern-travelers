import { Outlet } from "react-router";

import { Footer, Navbar, Newsletter } from "../components";

const Layout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      {/* <Newsletter />
      <Footer /> */}
    </main>
  );
};
export default Layout;
