import hotelImg from "../assets/hotel4.jpg";
import HostingGuides from "../components/HostingGuides";

const HostPage = () => {
  return (
    <>
      {/* Hero section with a call to action to become a host */}
      <section
        className="relative h-dvh w-full bg-cover bg-left md:bg-center bg-no-repeat flex items-end text-white 
    bg-[url('./assets/hero-bg.png')] ps-20 pb-5 lg:pb-15
    "
      >
        {/* Call to action button to become a host */}
        <div className="space-y-5">
          <h1 className="capitalize font-bold text-5xl">try Hosting with us</h1>
          <p className="max-w-[690px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            enim aperiam veritatis molestias porro voluptates commodi cupiditate
            voluptatem officiis illum.
          </p>
          <button className="capitalize bg-primary rounded-full py-4 px-12 font-semibold txt-sm">
            Lets get started
          </button>
        </div>
      </section>

      {/* Brief description to becoming a host */}
      <section className="flex container mx-auto py-26 gap-11 ">
        <figure className="max-h-[450px] rounded-2xl overflow-hidden">
          <img src={hotelImg} className="inset-0" alt="" />
        </figure>
        <div className="pt-5">
          <h5 className="font-bold text-[46px] capitalize">Some title here</h5>
          <p className="max-w-[588px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            deleniti ipsa dolorem aperiam fugiat facere laborum adipisci sequi,
            commodi delectus explicabo non quibusdam totam, quidem nam est quae
            ex tenetur atque. Repellat provident unde perspiciatis fuga, sint
            dolor sit sequi beatae pariatur, eveniet commodi ipsum laboriosam
            doloribus eius aut adipisci mollitia atque suscipit ea saepe
            voluptatem similique minima quos quod? Ea, quod. Aspernatur maiores
            vero, hic, atque recusandae quis veritatis libero consequuntur
            nesciunt corporis maxime excepturi
          </p>
        </div>
      </section>
      
      {/* Hosting guides */}

      <section className="mb-[197px]">
      <HostingGuides />
      </section>
    </>
  );
};
export default HostPage;
