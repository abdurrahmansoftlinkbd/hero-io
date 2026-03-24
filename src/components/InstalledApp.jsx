import { useNavigate } from "react-router";
import formatDownloads from "../utils/formatDownloads";
import { FaStar } from "react-icons/fa";
import formatSize from "../utils/formatSize";
import { FiDownload } from "react-icons/fi";

const InstalledApp = ({ app, handleUninstall }) => {
  const navigate = useNavigate();
  const { id, title, image, size, ratingAvg, downloads } = app;
  return (
    <li className="list-row items-center bg-white rounded-sm">
      <div className="size-14 sm:size-16 md:size-20 cursor-pointer">
        <img
          onClick={() => navigate(`/apps/${id}`)}
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* info */}
      <div className="list-col-grow">
        <h4 className="font-medium text-[#001931] truncate text-sm sm:text-base md:text-lg lg:text-xl">
          {title}
        </h4>
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <span className="flex items-center gap-1 text-xs sm:text-sm md:text-base font-medium text-[#00D390]">
            <FiDownload />
            {formatDownloads(downloads)}
          </span>
          <span className="flex items-center gap-1 text-xs sm:text-sm md:text-base font-medium text-[#FF8811]">
            <FaStar></FaStar>
            {ratingAvg}
          </span>
          <span className="text-xs sm:text-sm md:text-base text-[#627382]">
            {formatSize(size)}
          </span>
        </div>
      </div>

      {/* btn */}
      <button
        onClick={() => handleUninstall(app)}
        className="btn border-none bg-[#00D390] text-white rounded-sm font-semibold"
      >
        Uninstall
      </button>
    </li>
  );
};

export default InstalledApp;
