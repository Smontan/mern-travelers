import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <section
      className="relative h-dvh w-full bg-cover bg-left md:bg-center bg-no-repeat flex items-end justify-center text-white font-bold text-3xl
      bg-[url('./assets/hero-bg.png')] pb-5 lg:pb-15
      "
    >
      {/* Searcbar component */}
      <SearchBar />
    </section>
  );
};
export default Hero;
