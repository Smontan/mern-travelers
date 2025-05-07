import {
  AirVentIcon,
  Building2,
  ClipboardCheck,
  ForkKnife,
  Heart,
  Phone,
  Share2,
  Star,
  Tv2,
  WashingMachine,
  Wifi,
} from "lucide-react";
import { AmenityCard, NearbyServicesCard } from "../components/cards";

import bgImg from "../assets/hero-bg.png";
import hotel1 from "../assets/hotel1.jpg";
import hotel2 from "../assets/hotel2.jpg";
import hotel3 from "../assets/hotel3.jpg";
import hotel4 from "../assets/hotel4.jpg";
import hotel5 from "../assets/hotel5.jpg";
import hotel6 from "../assets/hotel6.jpg";
import hotel7 from "../assets/hotel7.jpg";
import hotel8 from "../assets/hotel8.jpg";
import hotel9 from "../assets/hotel9.jpg";
import PropertyGallery from "../components/PropertyGallery";

const HotelDetailsPage = () => {
  const hotelImg = [
    hotel1,
    hotel2,
    hotel3,
    hotel4,
    hotel5,
    hotel6,
    hotel7,
    hotel8,
    hotel9,
  ];
  return (
    <section className="container mx-auto mt-35 ">
      {/* Photo gallery */}
      <PropertyGallery photos={hotelImg} />
      {/* Section hotel info and a card for call to action for hotel reservation */}
      <section className="flex flex-row lg:flex-col mt-16 px-5 gap-20">
        {/* Hotel detail */}
        <section className="flex-1 pb-[250px] space-y-9">
          <header className="flex ">
            <div className="flex-1">
              <h1 className="font-bold text-[28px]">
                Well furnished Apartment
              </h1>
              <p className="font-medium">100 Smart Street, LA, USA</p>
            </div>
            <div className="flex gap-2 items-end">
              <Heart size={32} />
              <Share2 size={32} />
            </div>
          </header>
          {/* Amenity cards */}
          <div className="flex gap-3.5 mb-10.5 mt-9">
            <AmenityCard />
            <AmenityCard />
            <AmenityCard />
            <AmenityCard />
          </div>
          {/* Hotel description */}
          <div className="space-y-3.5">
            <h6 className="font-bold text-[22px] capitalize">
              Apartment Description
            </h6>
            <p className="text-[15px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
              sit rem commodi tempora totam exercitationem, velit molestias
              cupiditate ullam necessitatibus facere nam hic beatae nihil quis
              dignissimos ipsam pariatur! Accusamus eius nam nemo laudantium eum
              iure, facere magnam dolorem nihil repellendus saepe, et nobis
              pariatur voluptatem fuga commodi rem cupiditate tenetur repellat
              neque autem minus officiis ex officia. Ratione, officiis ex
              minima, excepturi cupiditate rerum quaerat nemo facere, libero quo
              maxime dolorum. Reiciendis distinctio mollitia, soluta aliquid sit
              nisi non iusto sed natus nihil amet vero esse expedita totam
              blanditiis delectus dignissimos deleniti ex illum ullam! Velit
              ipsa deleniti dolore!
            </p>
          </div>
          {/* Offered Amenities */}
          <div>
            <h5 className="font-bold text-[22px] mb-6">Offered Amenities</h5>
            <ul className="grid grid-cols-2 space-y-5">
              <li className="inline-flex gap-4.5">
                <ForkKnife /> Kitchen
              </li>
              <li className="inline-flex gap-4.5">
                <Tv2 /> Television with Netflix
              </li>
              <li className="inline-flex gap-4.5">
                <AirVentIcon /> Aircon
              </li>
              <li className="inline-flex gap-4.5">
                <Wifi /> Free wireless internet
              </li>
              <li className="inline-flex gap-4.5">
                <WashingMachine /> Washer
              </li>
            </ul>
            <button className="mt-10 capitalize rounded border border-border py-5.5 px-9 font-semibold text-[15px]">
              Show all amenities
            </button>
          </div>
          {/* Safety and hygiene */}
          <div>
            <h5 className="font-bold text-[22px] mb-6">Safty and Hygiene</h5>
            <ul className="grid grid-cols-2 space-y-5">
              <li className="inline-flex gap-4.5">
                <ClipboardCheck /> Daily Cleaning
              </li>
              <li className="inline-flex gap-4.5">
                <ClipboardCheck /> Fire Extinguishers
              </li>
              <li className="inline-flex gap-4.5">
                <ClipboardCheck /> Disinfections and Sterilization
              </li>
              <li className="inline-flex gap-4.5">
                <ClipboardCheck /> Smoke Detectors
              </li>
            </ul>
          </div>
          {/* Hotel location */}
          <div className="h-[447px] w-full bg-yellow-500 flex"></div>
          {/* Nearby services */}
          <div>
            <h6 className="font-bold text-[22px] capitalize mb-9">
              Nearby Services
            </h6>
            {/* Nearby services cards */}
            <div className="flex gap-3.5">
              <NearbyServicesCard />
              <NearbyServicesCard />
              <NearbyServicesCard />
            </div>
            <button className="mt-10 py-4.5 px-8 rounded-full capitalize font-bold text-[15px] bg-secondary ">
              Show on Map
            </button>
          </div>
          {/* Reviews  */}
          <div>
            <h6 className="inline-flex gap-2 mb-9 items-center font-bold text-[22px] capitalize ">
              Reviews
              <Star />
              5.0
            </h6>
            {/* Ratings */}
            <ul className="grid grid-cols-2 space-x-[45px] space-y-[15px] ">
              <li className="flex items-center w-fit gap-2">
                <span className="w-[194px]">Amenities</span>
                <span className="inline-block h-1 w-[100px] flex-1 rounded-full bg-brown" />
                <span className="font-semibold">5.0</span>
              </li>
              <li className="flex items-center w-fit gap-2">
                <span className="w-[194px]">Hygiene</span>
                <span className="inline-block h-1 w-[100px] flex-1 rounded-full bg-brown" />
                <span className="font-semibold">5.0</span>
              </li>
              <li className="flex items-center w-fit gap-2">
                <span className="w-[194px]">Communication</span>
                <span className="inline-block h-1 w-[100px] flex-1 rounded-full bg-brown" />
                <span className="font-semibold">5.0</span>
              </li>
              <li className="flex items-center w-fit gap-2">
                <span className="w-[194px]">Location of Property</span>
                <span className="inline-block h-1 w-[100px] flex-1 rounded-full bg-brown" />
                <span className="font-semibold">5.0</span>
              </li>
              <li className="flex items-center w-fit gap-2">
                <span className="w-[194px]">Value of money</span>
                <span className="inline-block h-1 w-[100px] flex-1 rounded-full bg-brown" />
                <span className="font-semibold">5.0</span>
              </li>
            </ul>
          </div>
          {/* Reviews */}
          <ul className="grid grid-cols-2 space-y-8">
            <li className="space-y-5">
              <div className="flex gap-4">
                <figure className="w-[70px] h-[70px] rounded-full overflow-hidden">
                  <img
                    src={bgImg}
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </figure>
                <div className="flex flex-col justify-center">
                  <h6 className="font-bold">John Doe</h6>
                  <p className="text-sm font-medium">March 12, 2020</p>
                </div>
              </div>
              <p className="text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                soluta odit ipsam, sed laborum vitae eveniet qui culpa illo
              </p>
            </li>
            <li className="space-y-5">
              <div className="flex gap-4">
                <figure className="w-[70px] h-[70px] rounded-full overflow-hidden">
                  <img
                    src={bgImg}
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </figure>
                <div className="flex flex-col justify-center">
                  <h6 className="font-bold">John Doe</h6>
                  <p className="text-sm font-medium">March 12, 2020</p>
                </div>
              </div>
              <p className="text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                soluta odit ipsam, sed laborum vitae eveniet qui culpa illo
              </p>
            </li>
            <li className="space-y-5">
              <div className="flex gap-4">
                <figure className="w-[70px] h-[70px] rounded-full overflow-hidden">
                  <img
                    src={bgImg}
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </figure>
                <div className="flex flex-col justify-center">
                  <h6 className="font-bold">John Doe</h6>
                  <p className="text-sm font-medium">March 12, 2020</p>
                </div>
              </div>
              <p className="text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                soluta odit ipsam, sed laborum vitae eveniet qui culpa illo
              </p>
            </li>
            <li className="space-y-5">
              <div className="flex gap-4">
                <figure className="w-[70px] h-[70px] rounded-full overflow-hidden">
                  <img
                    src={bgImg}
                    alt=""
                    className="w-full h-full object-center object-cover"
                  />
                </figure>
                <div className="flex flex-col justify-center">
                  <h6 className="font-bold">John Doe</h6>
                  <p className="text-sm font-medium">March 12, 2020</p>
                </div>
              </div>
              <p className="text-[15px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                soluta odit ipsam, sed laborum vitae eveniet qui culpa illo
              </p>
            </li>
          </ul>
          <button className="capitalize rounded border border-border py-5.5 px-9 font-semibold text-[15px]">
            Show all 100 reviews
          </button>
        </section>

        {/* Card for hotel reservation */}
        <section className="pb-[250px]">
          <article className="sticky top-[140px] pt-9 px-8 border-2 border-border rounded-lg shadow-lg">
            {/* Price */}
            <header className="mb-12">
              <h6 className="font-bold text-[22px] bg-9 border-b border-border">
                $ 1000 - 2000
              </h6>
            </header>
            {/* Hotel detail */}
            <div className="space-y-1">
              <p className="font-medium">Short Perod: $1000</p>
              <p className="font-medium">Medium Perod: $2000</p>
              <p className="font-medium">Long Perod: $3000</p>
            </div>
            <button className="mt-8 py-3.5 px-29 bg-accent shadow mb-11 rounded-full font-bold text-white text-[15px] whitespace-nowrap">
              Reserve now
            </button>
            <footer className="flex justify-between pb-14.5">
              {/* Property owner links */}
              <div className="inline-flex gap-2 items-center font-semibold text-[15px]">
                <Building2 /> Property Inquiry
              </div>
              <div className="inline-flex gap-2 items-center font-semibold text-[15px]">
                <Phone /> Contact Host
              </div>
            </footer>
          </article>
        </section>
      </section>
    </section>
  );
};
export default HotelDetailsPage;
