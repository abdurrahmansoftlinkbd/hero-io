const Stat = ({ img, label, value }) => {
  return (
    <div className="flex flex-col items-center sm:items-start gap-2">
      <div className="w-10 h-10">
        <img src={img} alt="" className="w-full h-full" />
      </div>
      <span className="text-xs sm:text-sm md:text-base text-[#001931] tracking-wide">
        {label}
      </span>
      <span className="text-2xl font-extrabold text-gray-800">{value}</span>
    </div>
  );
};

export default Stat;
