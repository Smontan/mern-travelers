import { Star } from "lucide-react";

const NearbyServicesCard = () => {
  return (
    <article className="rounded-lg p-6 pt-4.5 shadow">
      <h6 className="font-bold">Grill Resto & Bar</h6>
      <p className="text-sm">100 meters away</p>
      <div className="flex gap-2 mt-2">
        <Star size={14}/>
        <Star size={14}/>
        <Star size={14}/>
        <Star size={14}/>
        <Star size={14}/>
      </div>
    </article>
  );
};
export default NearbyServicesCard;
