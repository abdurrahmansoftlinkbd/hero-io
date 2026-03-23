import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router";
import Stat from "../components/Stat";
import download from "../assets/icon-downloads.png";
import ratings from "../assets/icon-ratings.png";
import review from "../assets/icon-review.png";
import formatDownloads from "../utils/formatDownloads";
import { useState } from "react";
import toast from "react-hot-toast";
import formatSize from "../utils/formatSize";

const AppDetails = () => {
  const [installed, setInstalled] = useState(false);

  const app = useLoaderData();
  const { title, image, companyName, size, reviews, ratingAvg, downloads } =
    app;

  const handleInstall = () => {
    setInstalled(true);
    toast.success(`${title} installed successfully.`);
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <section className="bg-[#F5F5F5] font-inter py-20">
        <div className="container w-11/12 mx-auto">
          {/* app info */}
          <div className="card md:card-side gap-10">
            {/* image */}
            <figure className="lg:w-80 shrink-0">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-contain"
              />
            </figure>
            {/* text */}
            <div className="card-body p-0 text-center md:text-left">
              <h1 className="card-title justify-center lg:justify-start text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#001931] leading-tight">
                {title}
              </h1>
              <div>
                <span className="text-[#627382] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                  Developed by{" "}
                  <span className="font-semibold text-[#632EE3]">
                    {companyName}
                  </span>
                </span>
              </div>
              <div className="divider"></div>
              {/* stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-16">
                <Stat
                  img={download}
                  label="Downloads"
                  value={formatDownloads(downloads)}
                ></Stat>
                <Stat
                  img={ratings}
                  label="Average Ratings"
                  value={ratingAvg}
                ></Stat>
                <Stat
                  img={review}
                  label="Total Reviews"
                  value={formatDownloads(reviews)}
                ></Stat>
              </div>
              {/* button */}
              <div className="card-actions justify-center lg:justify-start mt-5">
                <button
                  onClick={handleInstall}
                  disabled={installed}
                  className="btn btn-block sm:w-auto inline-flex border-none text-white items-center justify-center gap-2 px-5 py-7 rounded-sm text-sm sm:text-base md:text-lg lg:text-xl font-semibold shadow transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    background: installed ? "#6b7280" : "#00D390",
                  }}
                >
                  {installed
                    ? "Installed"
                    : `Install Now (${formatSize(size)})`}
                </button>
              </div>
            </div>
          </div>
          <div className="divider my-6"></div>
        </div>
      </section>
    </>
  );
};

export default AppDetails;
