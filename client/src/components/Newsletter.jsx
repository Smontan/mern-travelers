import { SendHorizontal } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="w-full bg-secondary">
      <div className="container mx-auto py-13">
        <div className="flex mx-5 lg:mx-25 lg:gap-17 gap-5">
          <div className="">
            <h6 className="uppercase text-lg font-bold">Newsletter</h6>
            <p className="text-sm font-medium">Stay Up to Date</p>
          </div>
          <div className="flex-1 relative rounded-full bg-white text-sm">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full h-full rounded-full ps-6 pe-15"
            />
            <button className="absolute inline-flex justify-center items-center h-fit -right-2 -top-1 bottom-0 p-4 rounded-full bg-accent cursor-pointer hover:bg-[#ff7000] hover:shadow-md transition-all duration-200 ease-in-out">
              <SendHorizontal size={24} color="white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Newsletter;
