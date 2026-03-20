import { FaStar } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const App = ({ app }) => {
  const { title, image, ratingAvg, downloads } = app;
  return (
    <div className="bg-white rounded-sm p-3 overflow-hidden shadow-sm cursor-pointer group">
      {/* image */}
      <div className="relative overflow-hidden w-full h-72">
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
            {downloads}
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
