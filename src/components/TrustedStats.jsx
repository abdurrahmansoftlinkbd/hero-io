import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    label: "Total Downloads",
    value: 29.6,
    suffix: "M",
    decimals: 1,
    note: "21% More Than Last Month",
  },
  {
    label: "Total Reviews",
    value: 906,
    suffix: "K",
    decimals: 0,
    note: "46% More Than Last Month",
  },
  {
    label: "Active Apps",
    value: 132,
    suffix: "+",
    decimals: 0,
    note: "31 More Will Launch",
  },
];

const TrustedStats = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <section
      ref={ref}
      className="bg-[linear-gradient(80deg,#632EE3,#9F62F2)] font-inter py-16 lg:py-20"
    >
      <div className="container w-11/12 mx-auto">
        <h2 className="text-white text-center font-bold text-3xl sm:text-4xl lg:text-5xl mb-10 tracking-tight">
          Trusted by Millions, Built for You
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 text-center text-white">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <p className="text-sm sm:text-base opacity-80 tracking-wide md:mb-4">
                {stat.label}
              </p>
              <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-none">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                    useEasing={true}
                  ></CountUp>
                ) : (
                  `0${stat.suffix}`
                )}
              </p>
              <p className="text-sm sm:text-base opacity-80 md:mt-4">
                {stat.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedStats;
