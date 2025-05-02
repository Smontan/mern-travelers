import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex flex-col gap-4 text-white ">
      {/* Search filter */}
      <div className="flex items-start gap-5 ps-4 lg:ps-10">
        <h2 className="uppercase font-bold text-5xl">Find</h2>
        <ul className="flex gap-4 lg:gap-8 text-[16px] py-2">
          <li className="underline-border">Rooms</li>
          <li className="underline-border">Flats</li>
          <li className="underline-border">Hotels</li>
          <li className="underline-border">Villas</li>
        </ul>
      </div>
      {/* Search bar */}
      <div className="flex rounded-lg mx-2 py-2 lg:py-0 lg:mx-0 lg:rounded-full bg-white border-[8px] border-white text-text">
        <form className="exclude-second-last-border grid grid-cols-2 lg:flex lg:items-center space-y-4 lg:space-y-0 lg:ps-5 font-semibold lg:divide-x lg:divide-border">
          <label className="inline-flex flex-col ps-3 pe-8 gap-1 text-xs ">
            Location
            <input
              type="text"
              className="text-sm focus:ring-none outline-0 focus:border-0"
              placeholder="Which city do you prefer?"
            />
          </label>
          <label className="inline-flex flex-col ps-3 pe-8 gap-1 text-xs">
            Check In
            <input
              type="date"
              className="text-sm focus:ring-none outline-0 focus:border-0"
              placeholder="Add dates"
            />
          </label>
          <label className="col-start-2 row-start-2 inline-flex flex-col ps-3 pe-8 gap-1 text-xs">
            Check Out
            <input
              type="date"
              className="text-sm focus:ring-none outline-0 focus:border-0"
              placeholder="Add dates"
            />
          </label>
          <label className="inline-flex flex-col ps-3 gap-1 text-xs">
            Guests
            <input
              type="number"
              className="text-sm focus:ring-none outline-0 focus:border-0"
              placeholder="Add guests"
              min={1}
            />
          </label>
          <button className="col-span-2 inline-flex items-center justify-center gap-2 py-2 lg:py-0 mx-2 lg:mx-0 lg:h-[54px] lg:w-[54px] rounded-full bg-text text-white  hover:bg-[#897773] transition-color duration-300 ease-in-out cursor-pointer">
            <span className="lg:hidden text-lg">Search</span>
            <Search size={20} strokeWidth={4} />
          </button>
        </form>
      </div>
    </div>
  );
};
export default SearchBar;
