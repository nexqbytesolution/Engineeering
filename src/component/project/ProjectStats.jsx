// components/projects/ProjectStats.jsx
import { FaBuilding, FaGlobe, FaHardHat, FaTrophy } from "react-icons/fa";

export default function ProjectStats() {
  const stats = [
    { icon: FaBuilding, label: "Total Projects", value: "500+", color: "blue" },
    { icon: FaGlobe, label: "International", value: "50+", color: "green" },
    { icon: FaHardHat, label: "Current Projects", value: "25", color: "blue" },
    { icon: FaTrophy, label: "Award Winning", value: "35+", color: "green" },
  ];

  return (
    <div className="bg-white py-12 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div
                className={`inline-flex p-4 rounded-2xl bg-${stat.color}-100 text-${stat.color}-600 mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
