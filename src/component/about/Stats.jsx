// components/about/Stats.jsx
import {
  FaBuilding,
  FaUsers,
  FaTrophy,
  FaClock,
  FaGlobe,
  FaHardHat,
} from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: FaBuilding,
      value: 500,
      suffix: "+",
      label: "Projects Completed",
      color: "blue",
    },
    {
      icon: FaUsers,
      value: 450,
      suffix: "+",
      label: "Happy Clients",
      color: "green",
    },
    {
      icon: FaTrophy,
      value: 25,
      suffix: "+",
      label: "Awards Won",
      color: "blue",
    },
    {
      icon: FaClock,
      value: 20,
      suffix: "+",
      label: "Years Experience",
      color: "green",
    },
    {
      icon: FaGlobe,
      value: 15,
      suffix: "+",
      label: "Countries",
      color: "blue",
    },
    {
      icon: FaHardHat,
      value: 200,
      suffix: "+",
      label: "Team Members",
      color: "green",
    },
  ];

  return (
    <div ref={ref} className="bg-white py-16 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div
                className={`inline-flex p-4 rounded-2xl bg-${stat.color}-100 text-${stat.color}-600 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
              >
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {inView ? <CountUp end={stat.value} duration={2.5} /> : 0}
                {stat.suffix}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
