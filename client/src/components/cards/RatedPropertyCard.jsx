import { Heart, Star } from "lucide-react";
import { useState } from "react";

const PropertyCard = ({ cardImg, ownerImg, title, address, ...props }) => {
  const [favorite, setFavorite] = useState(false);
  const handleClickFavorite = () => {
    setFavorite((prev) => !prev);
  };
  return (
    <div
      {...props}
      className="h-[340px] max-w-xs min-w-[279px] relative border-border border-2 rounded-lg group overflow-hidden shadow-lg"
    >
      {/* Favorite button */}
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

      {/* Property rating */}
      <div className="absolute top-6 left-6 flex gap-1.5 z-50">
        <Star size={14} fill="black"/>
        <Star size={14} fill="black"/>
        <Star size={14} fill="black"/>
        <Star size={14} fill="black"/>
        <Star size={14} fill="black"/>
      </div>

      {/* Image background */}
      <img
        src={cardImg}
        alt="Card image"
        className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-200"
      />
      {/* Card content */}
      <div className="absolute inset-0 flex flex-col pb-4 px-5 justify-end bg-gradient-to-t from-background to-transparent">
        {/* Owner image */}
        <div className="w-[70px] h-[70px] mb-3 rounded-full overflow-hidden">
          <img
            src={ownerImg}
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </div>
        <h3 className="text-overflow-ellipsis font-bold text-lg">{title}</h3>
        <p className="text-sm text-overflow-ellipsis">{address}</p>
      </div>
    </div>
  );
};
export default PropertyCard;
