const Banner = () => {
  return (
    <header className="bg-[#F5F5F5] py-12 lg:py-20">
      <div className="container w-11/12 mx-auto text-center">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight text-base-content">
          We Build
          <br />
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-black">
            Productive
          </span>{" "}
          Apps
        </h1>

        <p className="mt-4 text-sm md:text-base lg:text-lg text-[#627382] max-w-4xl mx-auto">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6"></div>
      </div>
    </header>
  );
};

export default Banner;
