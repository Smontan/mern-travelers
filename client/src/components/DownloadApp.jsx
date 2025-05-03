import {Play, Apple} from "lucide-react"

const DownloadApp = () => {
  return (
    <section className="container mx-auto">
      <div className=" rounded-lg bg-primary mx-5 lg:mx-0 py-15 ps-5 lg:ps-10">
        <h3 className="max-w-[300px] text-4xl font-bold text-light-text leading-12 wrap-break-word capitalize">
          Download our Mobile App
        </h3>
        <p className="mt-2 text-[16px] text-light-text">
          Available for free in this platforms
          
        </p>
        <div className="space-x-3">
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
    </section>
  );
};
export default DownloadApp;
