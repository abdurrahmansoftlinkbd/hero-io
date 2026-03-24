import { FaStar } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import formatDownloads from "../utils/formatDownloads";
import { useNavigate } from "react-router";

const App = ({ app }) => {
  const navigate = useNavigate();
  const { id, title, image, ratingAvg, downloads } = app;
  return (
    <div
      onClick={() => navigate(`/apps/${id}`)}
      className="bg-white rounded-sm p-3 overflow-hidden shadow-sm cursor-pointer group hover:drop-shadow-2xl transition-all duration-300 ease-in-out"
    >
      {/* image */}
      <div className="relative overflow-hidden w-full h-52 sm:h-56 md:h-60 lg:h-64 xl:h-72">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-contain p-6"
        />
      </div>
      {/* info */}
      <div className="py-3">
        <p className="text-sm font-semibold text-gray-800 truncate leading-snug mb-2">
          {title}
        </p>
        <div className="flex items-center justify-between">
          {/* downloads */}
          <span className="flex items-center gap-1 text-xs font-medium rounded-sm p-2 bg-[#F1F5E8] text-[#00D390]">
            <HiDownload></HiDownload>
            {formatDownloads(downloads)}
          </span>
          {/* rating */}
          <span className="flex items-center gap-1 text-xs font-medium rounded-sm p-2 bg-[#FFF0E1] text-[#FF8811]">
            <FaStar className="text-xs"></FaStar>
            {ratingAvg}
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
