import bgImg from "../../assets/hotels.avif"

// TODO:Create this card dynamic and add props such as img, title, category
const RentalGuideCard = () => {
  return (
    <div className="min-w-[382px] pt-2 pb-7">
      <div className="relative h-[340px] overflow-hidden rounded-lg border-border border-2">
        <img
          src={bgImg}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      <h3 className="mt-7.5 font-bold text-lg">Choose the right property!</h3>
      <p className="mb-2 text-sm font-medium">Economy</p>
    </div>
  );
};
export default RentalGuideCard;
