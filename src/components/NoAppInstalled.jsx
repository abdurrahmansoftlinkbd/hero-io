import { useNavigate } from "react-router";
import error from "../assets/error.webp";

const NoAppInstalled = () => {
  const navigate = useNavigate();

  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
      {/* image */}
      <div className="w-52">
        <img className="w-full" src={error} alt="app-error" />
      </div>

      {/* text */}
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-[#001931] tracking-wide mt-4 mb-2">
        You haven't installed any apps yet.
      </h3>
      <p className="text-xl text-[#627382]">
        Browse the store and install your favorites.
      </p>

      {/* button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => navigate("/apps")}
          className="btn rounded-sm font-semibold px-10 py-3 text-white border-none bg-[linear-gradient(140deg,#632EE3,#9F62F2)]"
        >
          Browse Apps
        </button>
      </div>
    </div>
  );
};

export default NoAppInstalled;
