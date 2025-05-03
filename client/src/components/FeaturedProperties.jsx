import FeaturedPropertyCard from "./cards/FeaturedPropertyCard";
import Title from "./Title";

const FeaturedProperties = () => {
  return (
    <section className="container mx-auto">
      <Title>Latest on the Property Listing</Title>

      {/* Featured Property cards */}
      <div className="flex lg:grid lg:grid-cols-3 mx-5 lg:mx-0 mt-16 gap-8.5 pb-8 overflow-auto">
        <FeaturedPropertyCard />
        <FeaturedPropertyCard />
        <FeaturedPropertyCard />
        <FeaturedPropertyCard />
        <FeaturedPropertyCard />
        <FeaturedPropertyCard />
      </div>
    </section>
  );
};
export default FeaturedProperties;
