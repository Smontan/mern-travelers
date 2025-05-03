import {
  Apple,
  Facebook,
  Instagram,
  Linkedin,
  Play,
  Twitter,
} from "lucide-react";
import { Link } from "react-router";
import Logo from "./Logo";

const Footer = () => {
  return (
    <section className="w-full bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between gap-6 lg:gap-12 mx-5 lg:mx-0 pt-18 pb-30 text-light-text">
          {/* Footer Header */}
          <div>
            <Logo color="text-light-text" />
            <p className="text-sm max-w-[382px] my-8 text-light-text">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
              sunt et mollitia aperiam tempora, magni, sit quidem nulla repellat
              voluptatibus odio temporibus iste velit dolorem molestiae nobis
              aliquid. Iure quam minima aperiam ducimus sed facilis distinctio
              quae magni itaque porro?
            </p>
            <div className="space-x-3.5 text-dark-text">
              <button className="inline-flex items-center gap-2 py-4.5 px-7 mt-8 rounded-lg bg-secondary text-center text-sm font-bold shadow-lg">
                <Play />
                PlayStore
              </button>
              <button className="inline-flex items-center gap-2 py-4.5 px-7 mt-8 rounded-lg bg-secondary text-center text-sm font-bold shadow-lg">
                <Apple />
                AppleStore
              </button>
            </div>
          </div>
          {/* Footer Company */}
          <div className="pt-3.5 ">
            <h6 className="mb-5 font-bold txt-lg">Company</h6>
            <ul className="space-y-1">
              <li>
                <Link className="capitalize text-sm">About Us</Link>
              </li>
              <li>
                <Link className="capitalize text-sm">Legal information</Link>
              </li>
              <li>
                <Link className="capitalize text-sm">Contact us</Link>
              </li>
              <li>
                <Link className="capitalize text-sm">Blogs</Link>
              </li>
            </ul>
          </div>
          {/* Footer Help Center */}
          <div className="pt-3.5 ">
            <h6 className="mb-5 font-bold txt-lg">Help Center</h6>
            <ul className="space-y-1">
              <li>
                <Link className="capitalize text-sm">Find a property</Link>
              </li>
              <li>
                <Link className="capitalize text-sm">How to host?</Link>
              </li>
              <li>
                <Link className="capitalize text-sm">Why us?</Link>
              </li>
              <li>
                <Link className="capitalize text-sm">FAQs</Link>
              </li>
              <li>
                <Link className="capitalize text-sm">Rental guides</Link>
              </li>
            </ul>
          </div>

          {/* Footer Help Contact info */}
          <div className="pt-3.5 ">
            <h6 className="mb-4 font-bold txt-lg">Contact info</h6>
            <ul className="space-y-1">
              <li>
                <Link className="capitalize text-sm">Phone: 1234567890</Link>
              </li>
              <li>
                <Link className="capitalize text-sm">
                  Email: company@email.com
                </Link>
              </li>
              <li>
                <Link className="capitalize text-sm">
                  Location: 100 Smart Street, LA, USA
                </Link>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <Link className="cursor-pointer rounded p-2 hover:bg-accent transition-color duration-200 ease-in-out">
                <Facebook />
              </Link>
              <Link className="cursor-pointer rounded p-2 hover:bg-accent transition-color duration-200 ease-in-out">
                <Twitter />
              </Link>
              <Link className="cursor-pointer rounded p-2 hover:bg-accent transition-color duration-200 ease-in-out">
                <Instagram />
              </Link>
              <Link className="cursor-pointer rounded p-2 hover:bg-accent transition-color duration-200 ease-in-out">
                <Linkedin />
              </Link>
            </div>
          </div>

          {/* Footer Help Contact info */}
        </div>
      </div>
      <div className="py-4 lg:py-10.5 border-t-1 border-border">
        {/* Footer bottom */}
        <div className="container px-5 lg:px-0 mx-auto flex flex-col lg:flex-row justify-between gap-2 lg:gap-0 text-light-text">
          <span className="block font-semibold">
            &copy; 2025 dev-sherwin.netlify.app | All rights reserved
          </span>
          <span className="block">
            Created with love by{" "}
            <span className="font-semibold">dev-sherwin</span>
          </span>
        </div>
      </div>
    </section>
  );
};
export default Footer;
