import ownerImg from "../assets/owner.png";

const PropertyGallery = ({ photos }) => {
  return (
    <figure className="grid grid-cols-4 gap-2 lg:gap-4 px-5 lg:px-0 w-full lg:max-h-[540px] overflow-hidden">
      <div className="relative rounded lg:rounded-lg overflow-hidden col-span-4 row-span-4 lg:col-span-2 lg:row-span-2">
        <img
          className="w-full h-full object-cover object-center"
          src={photos[0]}
          alt=""
        />
        <section className="absolute inset-0\ flex items-end p-8 lg:p-12 space-x-5 bg-gradient-to-t from-background to-transparent">
          <figure className=" rounded-full w-[76px] h-[76px] overflow-hidden">
            <img
              className="w-full object-cover object-center"
              src={ownerImg}
              alt="Owner img"
            />
          </figure>
          {/* Property owner and price */}
          <section className="leading-4">
            <span className="font-medium text-xs">listed by:</span>
            <h6 className="font-bold text-lg">John Doe</h6>
            <p className="font-medium">For: $1000 - $5000</p>
          </section>
        </section>
      </div>
      <div className="rounded lg:rounded-lg lg:h-[260px] overflow-hidden ">
        <img
          className="w-full h-full object-cover object-center"
          src={photos[1]}
          alt=""
        />
      </div>
      <div className="rounded lg:rounded-lg lg:h-[260px] overflow-hidden ">
        <img
          className="w-full h-full object-cover object-center"
          src={photos[2]}
          alt=""
        />
      </div>
      <div className="rounded lg:rounded-lg lg:h-[260px] overflow-hidden ">
        <img
          className="w-full h-full object-cover object-center"
          src={photos[3]}
          alt=""
        />
      </div>
      <div className="relative rounded lg:rounded-lg lg:h-[260px] overflow-hidden ">
        <img
          className="w-full h-full object-cover object-center"
          src={photos[4]}
          alt=""
        />
        {photos?.length > 5 && (
          <div className="absolute inset-0 bg-black/50 flex justify-center items-center gap-4 text-white">
            <span className="font-bold text-lg lg:text-5xl">
              +{photos.length - 5}
            </span>
            <div className="hidden lg:block">
              <span className="block font-semibold text-sm">More</span>{" "}
              <span className="font-bold text-lg">Photos</span>
            </div>
          </div>
        )}
      </div>
    </figure>
  );
};
export default PropertyGallery;
