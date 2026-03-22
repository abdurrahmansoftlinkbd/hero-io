import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router";

const AppDetails = () => {
  const app = useLoaderData();
  const { title, image, companyName } = app;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <section className="bg-[#F5F5F5] font-inter py-20">
        <div className="container w-11/12 mx-auto space-y-10">
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
              <p className="text-[#627382] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                Developed by{" "}
                <span className="font-semibold text-[#632EE3]">
                  {companyName}
                </span>
              </p>
            </div>
            {/* stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mt-3 pb-4 border-b border-gray-100"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppDetails;
