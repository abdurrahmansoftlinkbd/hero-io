import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import Skeleton from "../components/Skeleton";
import App from "../components/App";
import NoAppFound from "./NoAppFound";

const Apps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchApps = async () => {
      try {
        const res = await axios.get("/apps.json");
        setApps(res.data);
      } catch (err) {
        toast.error("Failed to fetch apps. ", err);
      } finally {
        setLoading(false);
      }
    };
    fetchApps();
  }, []);

  const filtered = useMemo(
    () =>
      apps.filter((app) =>
        app.title.toLowerCase().includes(query.toLowerCase()),
      ),
    [apps, query],
  );

  return (
    <section className="bg-[#F5F5F5] font-inter py-20">
      <div className="container w-11/12 mx-auto">
        {/* heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001931] tracking-tight">
            Our All Applications
          </h1>
          <p className="mt-3 text-sm sm:text-base md:text-xl text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        {/* toolbar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <p className="text-2xl font-semibold text-[#001931]">
            {loading ? (
              <span className="skeleton inline-block w-48 h-6 rounded-sm" />
            ) : (
              <span>({filtered.length}) Apps Found</span>
            )}
          </p>

          {/* search bar */}
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              placeholder="Search Apps"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
        </div>

        {/* grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {loading ? (
            Array.from({ length: 8 }).map(() => <Skeleton></Skeleton>)
          ) : filtered.length > 0 ? (
            filtered.map((app) => <App key={app.id} app={app}></App>)
          ) : (
            <NoAppFound></NoAppFound>
          )}
        </div>
      </div>
    </section>
  );
};

export default Apps;
