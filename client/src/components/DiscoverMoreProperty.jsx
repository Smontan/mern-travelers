import { Link } from "react-router";

import Title from "./Title";

const DiscoverMoreProperty = () => {
  return (
    <section className="container mx-auto">
      <Title>Latest on the Property Listing</Title>
      <p className="inline-block max-w-[690px] mx-5 lg:mx-0 mt-16 mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque harum
        dolorum consequatur. Veniam vitae commodi fuga consectetur culpa, esse
        dolores maiores ipsa quae? Deleniti quas eos dolore ad, nulla vero
        tempora ratione numquam hic magnam ipsa assumenda ipsum consequuntur
        deserunt?
      </p>
      {/* Latest Property cards */}
      <div className="flex flex-col gap-9  mx-5 lg:mx-0 pb-8">
        <div className="space-x-6">
          <Link className="capitalize font-bold text-sm">Ask a question</Link>
          <Link className="capitalize font-bold text-sm">Find a property</Link>
        </div>
        <button className="w-fit rounded-full bg-primary text-light-text capitalize font-bold text-sm py-5 px-14">
          Discover more
        </button>
      </div>
    </section>
  );
};
export default DiscoverMoreProperty;
