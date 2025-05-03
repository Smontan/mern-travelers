const FindProperty = () => {
  return (
    <section className="container mx-auto">
      <div className=" rounded-lg bg-primary mx-5 lg:mx-0 py-15 ps-5 lg:ps-10">
        <h3 className="max-w-[400px] text-4xl font-bold text-light-text leading-12 wrap-break-word capitalize">
          Browse for more properties
        </h3>
        <p className="mt-2 text-[16px] text-light-text">
          Explore properties by their category or types
        </p>
        <button className="py-5 px-10 mt-8 rounded-full bg-secondary text-center text-sm font-bold shadow-lg capitalize">
          Find a property
        </button>
      </div>
    </section>
  );
};
export default FindProperty;
