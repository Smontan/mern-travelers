import { SlidersHorizontal } from "lucide-react";

import FeaturedPropertyCard from "../components/cards/FeaturedPropertyCard";

const PropertyPage = () => {
  return (
    <section className="container mx-auto mt-[70px] pt-12 pb-40 lg:pt-24 lg:pb-85">
      {/* Property page header included property category and filter */}
      <header className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 mx-5 lg:mx-0 mb-6 lg:mb-8">
        <ul className="flex gap-4 lg:gap-9 font-semibold">
          <li className="underline-border">Apartments</li>
          <li className="underline-border">Houses</li>
          <li className="underline-border">Villas</li>
          <li className="underline-border">Homestays</li>
          <li className="underline-border">More</li>
        </ul>
        <button className="w-full lg:w-fit inline-flex items-center gap-2 rounded-full font-semibold py-4 px-8 border-2 border-border cursor-pointer">
          <SlidersHorizontal />
          Filters
        </button>
      </header>
      {/* Properties card */}
      <article className="flex flex-col lg:grid lg:grid-cols-3 mx-5 lg:mx-0 gap-7.5">
        <FeaturedPropertyCard />
        <FeaturedPropertyCard />
        <FeaturedPropertyCard />
        <FeaturedPropertyCard />
        <FeaturedPropertyCard />
        <FeaturedPropertyCard />
        {/* TODO: make a pagination for this cards */}
      </article>
    </section>
  );
};
export default PropertyPage;
