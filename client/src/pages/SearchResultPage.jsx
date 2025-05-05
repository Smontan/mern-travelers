import { SlidersHorizontal, X } from "lucide-react";
import SearchResultCard from "../components/cards/SearchResultCard";
import MapCard from "../components/cards/MapCard";

const SearchResultPage = () => {
  return (
    <section className=" mx-auto lg:ms-auto flex justify-center gap-11 relative">
      {/* Property cards */}
      <section className="mx-5 lg:mx-0 max-w-[574px]  pt-[157px] pb-40 space-y-14.5">
        <header className="flex flex-col ">
          <h3 className="font-bold text-2xl mb-3">10 results found</h3>
          <section className="flex flex-col lg:flex-row items-start justify-between lg:gap-0 bg-yellow">
            {/* Make the number of result dynamic */}
            <ul className="flex flex-wrap items-end gap-2  lg:gap-2 font-semibold">
              <li className="rounded-full px-4 py-2  inline-flex items-center gap-4 whitespace-nowrap border-2 border-border font-md text-xs">
                100 Smart Street <X size={16} />
              </li>
              <li className="rounded-full px-4 py-2  inline-flex items-center gap-4 whitespace-nowrap border-2 border-border font-md text-xs">
                12 March 2021 <X size={16} />
              </li>
              <li className="rounded-full px-4 py-2  inline-flex items-center gap-4 whitespace-nowrap border-2 border-border font-md text-xs">
                Short period <X size={16} />
              </li>
            </ul>
            <button className="w-full lg:w-fit inline-flex items-center gap-2 rounded-full font-semibold py-2 px-4 mt-4 lg:mt-0 border-2 border-border cursor-pointer ">
              <SlidersHorizontal />
              Filters
            </button>
          </section>
        </header>

        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
      </section>
      {/* Property map section  */}
      <section className=" w-full hidden lg:block max-w-[668px] relative">
        <article className="sticky top-0 h-[736px] bg-yellow-600 -z-50 ">
          {/* TODO: make this map dynamic and change the details according to the card that is being rendered */}
          <div className="w-full h-full justify-center flex items-end pb-29 ">
            <MapCard />  
          </div>
        </article>
      </section>
    </section>
  );
};
export default SearchResultPage;
