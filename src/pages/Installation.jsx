import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { getInstalledApps, uninstallApp } from "../utils/installedAppsStorage";
import toast from "react-hot-toast";

const Installation = () => {
  const [apps, setApps] = useState(() => getInstalledApps());
  const [sortBy, setSortBy] = useState("default");

  const handleUninstall = (app) => {
    uninstallApp(app.id);
    setApps(getInstalledApps());
    toast.success(`${app.title} uninstalled.`);
  };

  const SORT_OPTIONS = [
    { label: "Sort By Size", value: "default" },
    { label: "High - Low", value: "high-low" },
    { label: "Low - High", value: "low-high" },
  ];

  const sorted = useMemo(() => {
    const copy = [...apps];
    if (sortBy === "high-low")
      return copy.sort((a, b) => b.downloads - a.downloads);
    if (sortBy === "low-high")
      return copy.sort((a, b) => a.downloads - b.downloads);
    return copy;
  }, [apps, sortBy]);

  return (
    <>
      <Helmet>
        <title>Installation</title>
      </Helmet>

      <section className="bg-[#F5F5F5] font-inter py-20">
        <div className="container w-11/12 mx-auto">
          {/* heading */}
          <div className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001931] tracking-tight">
              Your Installed Apps
            </h1>
            <p className="mt-3 text-sm sm:text-base md:text-xl text-[#627382]">
              Explore All Trending Apps on the Market developed by us
            </p>
          </div>

          {/* toolbar */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-2xl font-semibold text-[#001931]">
              ({sorted.length}) Apps Found
            </p>
            {/* dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="select text-[#627382] border-[#D2D2D2] w-32"
            >
              {SORT_OPTIONS.map((opt) => (
                <option
                  className="text-[#627382]"
                  key={opt.value}
                  value={opt.value}
                >
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>
    </>
  );
};

export default Installation;
