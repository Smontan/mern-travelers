import { Outlet } from "react-router";

import bgPattern from "../assets/pattern-c.png";

const AuthenticationLayout = () => {
  return (
    <section className="container flex justify-center mx-auto">
      <section className="my-auto lg:pe-[212px]">
        <Outlet />
      </section>
      <figure className="hidden lg:block relative py-4 overflow-hidden h-dvh">
        <img
          className="inset-0 h-full object-cover object-center"
          src={bgPattern}
          alt=""
        />
      </figure>
    </section>
  );
};
export default AuthenticationLayout;
