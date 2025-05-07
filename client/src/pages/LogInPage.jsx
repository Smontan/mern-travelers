import { Gamepad2 } from "lucide-react";
import { Link } from "react-router";

import { Logo } from "../components";

const LogInPage = () => {
  return (
    <section className=" h-full flex-1 pt-5 ">
      {/* Logo section */}
      <div className="flex justify-between items-end">
        <Logo />
        <Link to={"/"} className="border-b capitalize text-sm font-semibold ">
          back home
        </Link>
      </div>

      <div className="mt-5 max-w-[340px]">
        <p className=" text-xs uppercase">No credit card required!</p>
        <h1 className="pt-2 font-bold text-[32px] capitalize">
          Continue to your account
        </h1>
      </div>
      <button className="inline-flex items-center gap-2 rounded-full mt-6 py-4 px-25 bg-[#CEEAF7] text-sm font-semibold">
        <Gamepad2 /> Sign up with Google
      </button>
      {/* divider */}
      <div className="flex items-center gap-2 w-full my-6  ">
        <span className="flex-1 h-0.5 bg-gray-300"></span>
        <p className="text-xs">Or use Email</p>
        <span className="flex-1 h-0.5 bg-gray-300"></span>
      </div>
      {/* Signup form */}
      <section>
        <form className="flex flex-col gap-[17px]">
          <label className="w-full rounded px-4 py-2 space-y-1 bg-white">
            <span className="block text-xs uppercase">Email</span>
            <input
              type="email"
              className="w-full focus:ring-0 focus:outline-none text-sm"
              placeholder="yourmail@email.com"
            />
          </label>
          <label className="w-full rounded px-4 py-2 space-y-1 bg-white">
            <span className="block text-xs uppercase">Password</span>
            <input
              type="password"
              className="w-full focus:ring-0 focus:outline-none text-sm"
              placeholder="***********"
            />
          </label>
          <button className="block py-4 rounded bg-black/90 font-semibold text-sm text-white uppercase shadow ">
            Continue
          </button>
        </form>
      </section>
      <div className="mt-5 text-sm text-center">
        Are you a Newbie?{" "}
        <Link to={"/signup"} className="uppercase font-bold border-b">
          Get started - it's free
        </Link>
      </div>
    </section>
  );
};
export default LogInPage;
