import { Plus } from "lucide-react";

import ownerImg from "../assets/owner.png";

const ShareStoriesPage = () => {
  return (
    // TODO: MAKE IT RESPONSIVE
    <section className="container flex mx-auto gap-10 mt-[70px] pt-12 mb-20">
      {/* Stories list */}
      <div className="">
        <header>
          <h1 className="text-[38px] font-extrabold">Stories</h1>
          <div className="flex gap-4 mt-2">
            <button className="p-4 justify-center rounded-full text-white bg-primary ">
              <Plus size={32} />
            </button>
            <div>
              <h6 className="capitalize font-bold text-lg">Add your story</h6>
              <p classname="font-medium text-sm">
                Share your moments experiences
              </p>
            </div>
          </div>
        </header>
        <div className="mt-10 space-y-4">
          <h6 className="font-bold text-2xl">All Stories</h6>
          <div className="flex gap-4 items-center">
            <figure className="rounded-full w-[70px] h-[70px] overflow-hidden">
              <img
                src={ownerImg}
                className="inset-0 object-center object-cover "
                alt=""
              />
            </figure>
            <div>
              <h6 className="font-bold text-lg">John Doe</h6>
              <p className="font-medium text-sm">Shared on March 2021</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <figure className="rounded-full w-[70px] h-[70px] overflow-hidden">
              <img
                src={ownerImg}
                className="inset-0 object-center object-cover "
                alt=""
              />
            </figure>
            <div>
              <h6 className="font-bold text-lg">John Doe</h6>
              <p className="font-medium text-sm">Shared on March 2021</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <figure className="rounded-full w-[70px] h-[70px] overflow-hidden">
              <img
                src={ownerImg}
                className="inset-0 object-center object-cover "
                alt=""
              />
            </figure>
            <div>
              <h6 className="font-bold text-lg">John Doe</h6>
              <p className="font-medium text-sm">Shared on March 2021</p>
            </div>
          </div>
        </div>
      </div>
      {/* View story */}
      <div className="flex-1 h-[520px] rounded-2xl bg-gray"></div>
    </section>
  );
};
export default ShareStoriesPage;
