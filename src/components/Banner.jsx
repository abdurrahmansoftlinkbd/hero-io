import BannerButton from "../shared/BannerButton";
import play from "../assets/app.png";
import app from "../assets/app-store.png";
import banner from "../assets/hero.png";

const Banner = () => {
  return (
    <header className="bg-[#F5F5F5] font-inter pt-12 lg:pt-20">
      <div className="container w-11/12 mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-base-content">
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

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <BannerButton
            link="https://play.google.com/store"
            img={play}
            text="Google Play"
          ></BannerButton>
          <BannerButton
            link="https://www.apple.com/app-store/"
            img={app}
            text="App Store"
          ></BannerButton>
        </div>

        <div className="mt-10 flex justify-center">
          <img
            src={banner}
            alt="banner"
            className="w-full max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"
          />
        </div>
      </div>
    </header>
  );
};

export default Banner;
