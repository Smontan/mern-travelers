import { Bath, Bed, Car, Circle, Dog, Heart } from "lucide-react";
import { useState } from "react";
import bgImg from "../../assets/hotels.avif";

const FeaturedPropertyCard = () => {
  const [favorite, setFavorite] = useState(false);

  const handleClickFavorite = () => {
    setFavorite((prev) => !prev);
  };
  return (
    <div className="min-w-[382px] pt-2 pb-7">
      <div className="relative h-[340px] overflow-hidden rounded-lg border-border border-2">
        <img
          src={bgImg}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <button className="absolute top-4 right-4 z-50 p-1 rounded w-fit">
          <Heart
            onClick={handleClickFavorite}
            width={26}
            height={23}
            color="white"
            fill={favorite ? "#ff7043" : "transparent"}
            className="cursor-pointer"
          />
        </button>
        <div className="absolute inset-0 flex items-end p-5.5 bg-gradient-to-t from-background to-transparent">
          <div className="flex justify-between items-center w-full">
            {/* Amount */}
            <p className="font-semibold text-4.5">$1000 - 5000 USD</p>
            <div className="flex gap-1 items-center">
              <Circle size={10} />
              <Circle size={10} />
              <Circle size={10} />
              <Circle size={10} />
            </div>
          </div>
        </div>
      </div>
      <h3 className="mt-7.5 font-bold text-lg">Well Furnished Apartment</h3>
      <p className="mb-2 text-sm font-medium">100 Smart Street, LA, USA</p>
      <div className="flex gap-5 items-baseline">
        <span className="inline-flex gap-1.5">
          <Bed /> <span className="font-semibold">3</span>
        </span>
        <span className="inline-flex gap-1.5">
          <Bath /> <span className="font-semibold">1</span>
        </span>
        <span className="inline-flex gap-1.5">
          <Car /> <span className="font-semibold">2</span>
        </span>
        <span className="inline-flex gap-1.5">
          <Dog /> <span className="font-semibold">0</span>
        </span>
      </div>
    </div>
  );
};
export default FeaturedPropertyCard;
