import { Bath, Bed, Car, Circle, Dog } from "lucide-react";

import cardImg from "../../assets/hotels.avif";
import ownerImg from "../../assets/owner.png";

const SearchResultCard = () => {
  return (
    <article className="max-w-[574px] border-border border-2 rounded-2xl overflow-hidden shadow-lg">
      {/* Card image */}
      <figure className="w-full max-h-[558px] flex items-end relative bg-blue-500 ">
        <img
          className="w-full h-full object-cover object-center"
          src={cardImg}
          alt="card image"
        />
        <figcaption className="absolute inset-0 flex justify-between items-end px-7 pb-7.5 bg-gradient-to-t from-background to-transparent">
          <section className="flex space-x-5">
            <figure className=" rounded-full w-[76px] h-[76px] overflow-hidden">
              <img
                className="w-full object-cover object-center"
                src={ownerImg}
                alt="Owner img"
              />
            </figure>
            {/* Property owner and price */}
            <section className="leading-4 my-auto">
              <span className="font-md text-xs">listed by:</span>
              <h6 className="font-bold text-lg">John Doe</h6>
              <p className="font-md">For: $1000 - $5000</p>
            </section>
          </section>
          {/* image indicator */}
          <div className="flex gap-1 items-end">
            <Circle size={10} />
            <Circle size={10} />
            <Circle size={10} />
            <Circle size={10} />
          </div>
        </figcaption>
      </figure>
      <section className="py-7.5 px-6.5">
        <h5 className="font-bold text-lg">Well Furnished Apartment</h5>
        <p className="font-md text-xs">100 Smart Street, LA, USA</p>
        <ul className="flex gap-5 items-baseline mt-3">
          <li className="inline-flex gap-1.5">
            <Bed /> <span className="font-semibold">3</span>
          </li>
          <li className="inline-flex gap-1.5">
            <Bath /> <span className="font-semibold">1</span>
          </li>
          <li className="inline-flex gap-1.5">
            <Car /> <span className="font-semibold">2</span>
          </li>
          <li className="inline-flex gap-1.5">
            <Dog /> <span className="font-semibold">0</span>
          </li>
        </ul>
      </section>
      <footer className=" flex mb-4 px-6.5 divide-x divide-x-border font-semibold text-xs">
        <span className="capitalize pe-6.5">Apartment on rent</span>
        <span className="capitalize ps-6.5">For long period: 1 - 2 years</span>
      </footer>
    </article>
  );
};
export default SearchResultCard;
