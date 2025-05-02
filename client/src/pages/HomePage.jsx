import {
  DiscoverMoreProperty,
  DownloadApp,
  FeaturedProperties,
  FindProperty,
  Hero,
  HostInvitation,
  LatestProperty,
  NearbyProperties,
  RentalGuides,
  TopRatedProperties,
} from "../components";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <main className="py-21 flex flex-col items-center gap-16">
        <LatestProperty />
        <NearbyProperties />
        <TopRatedProperties />
        <HostInvitation />
        <FeaturedProperties />
        <FindProperty />
        <RentalGuides />
        <DownloadApp />
        <DiscoverMoreProperty />
      </main>
    </div>
  );
};
export default HomePage;
