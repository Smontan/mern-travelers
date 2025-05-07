import { Bed } from "lucide-react";

const AmenityCard = () => {
  return (
    <article className="flex flex-col bg-secondary w-fit items-center lg:min-w-[176px] p-3 lg:pt-11.5 lg:px-10 lg:pb-10 rounded-lg gap-2 lg:gap-0 overflow-ellipsis">
      <Bed className=" lg:w-[43px] lg:h-[32px]" />
      <p className="text-xs lg:text-base font-semibold whitespace-nowrap">
        {/* TODO: make this count dynamic */}
        3 Bedrooms
      </p>
    </article>
  );
};
export default AmenityCard;
