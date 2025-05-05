import {Bed,Bath, Dog, Car} from "lucide-react"

import cardImg from "../../assets/hotels.avif";

const MapCard = () => {
  return (
    <article className="w-fit h-fit rounded-lg flex bg-white border-border border-2 shadow overflow-hidden">
      <figure className="max-w-40">
        <img
          src={cardImg}
          className="w-full h-full object-cover object-center"
          alt="card image"
        />
      </figure>
      <section className="pt-6.5 pb-11 ps-4.5 pe-9">
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
    </article>
  );
};
export default MapCard;
