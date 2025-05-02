import bgImg from "../assets/hotels.avif";
import hostImg from "../assets/owner.png";
import RatedPropertyCard from "../components/cards/RatedPropertyCard";
import Title from "./Title";

const TopRatedProperties = () => {
  const latestProperties = [
    {
      title: "Well Furnished Appartment",
      address: "100 Smart street, LA, USA",
      cardImg: bgImg,
      ownerImg: hostImg,
    },
    {
      title: "Well Furnished Appartment",
      address: "100 Smart street, LA, USA",
      cardImg: bgImg,
      ownerImg: hostImg,
    },
    {
      title: "Well Furnished Appartment",
      address: "100 Smart street, LA, USA",
      cardImg: bgImg,
      ownerImg: hostImg,
    },
    {
      title: "Well Furnished Appartment",
      address: "100 Smart street, LA, USA",
      cardImg: bgImg,
      ownerImg: hostImg,
    },
  ];
  return (
    <section className="container mx-auto overflow-x-auto">
      <Title>Latest on the Property Listing</Title>
      {/* Latest Property cards */}
      <div className="flex mt-16 gap-7.5  mx-5 lg:mx-0 pb-8">
        {latestProperties?.map(
          ({ title, address, cardImg, ownerImg }, index) => (
            <RatedPropertyCard
              title={title}
              address={address}
              ownerImg={ownerImg}
              cardImg={cardImg}
              key={index}
            />
          )
        )}
      </div>
    </section>
  );
};
export default TopRatedProperties;
