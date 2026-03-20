import { useNavigate } from "react-router";
import appError from "../assets/App-Error.png";

const NoAppFound = () => {
  const navigate = useNavigate();

  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
      {/* image */}
      <div className="w-sm">
        <img className="w-full" src={appError} alt="app-error" />
      </div>

      {/* text */}
      <h3 className="text-5xl font-semibold text-[#001931] tracking-wide mt-4 mb-2">
        OPPS!! APP NOT FOUND
      </h3>
      <p className="text-xl text-[#627382]">
        The App you are requesting is not found on our system. please try
        another apps
      </p>

      {/* button */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => navigate(-1)}
          className="btn rounded-sm font-semibold px-10 py-3 text-white border-none bg-[linear-gradient(140deg,#632EE3,#9F62F2)]"
        >
          Go Back!
        </button>
      </div>
    </div>
  );
};

export default NoAppFound;
