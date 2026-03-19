const TrendingApps = () => {
  return (
    <section className="bg-[#F5F5F5] font-inter py-20">
      <div className="container w-11/12 mx-auto">
        {/* heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001931] tracking-tight">
            Trending Apps
          </h2>
          <p className="mt-3 text-sm sm:text-base">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"></div>
      </div>
    </section>
  );
};

export default TrendingApps;
