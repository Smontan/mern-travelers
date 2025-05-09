import { Title } from "../components";
import RentalGuideCard from "./cards/RentalGuideCard";

const HostingGuides = () => {
  return (
    <section className="container mx-auto">
      <Title>Hosting Guides and Tips</Title>
      <div className="flex lg:grid lg:grid-cols-3 mx-5 lg:mx-0 mt-16 gap-8.5 pb-4.5 overflow-auto">
        <RentalGuideCard />
        <RentalGuideCard />
        <RentalGuideCard />
        <div className="lg:col-span-3 flex justify-center items-center w-full mt-5">
          <button className=" py-5 px-14  rounded-full capitalize font-bold bg-primary text-light-text">
            View all Guides
          </button>
        </div>
      </div>
    </section>
  );
};
export default HostingGuides;
