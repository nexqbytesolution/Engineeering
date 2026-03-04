// components/about/CompanyHistory.jsx
import Image from "next/image";
import { FaCalendarAlt, FaBuilding, FaHardHat } from "react-icons/fa";

export default function CompanyHistory() {
  const milestones = [
    {
      year: "2005",
      title: "Company Founded",
      description: "Started with a small team of 5 engineers in New York",
      icon: FaHardHat,
    },
    {
      year: "2010",
      title: "First International Project",
      description: "Expanded operations to Dubai and Singapore",
      icon: FaBuilding,
    },
    {
      year: "2015",
      title: "500 Projects Milestone",
      description: "Completed 500th project with excellence",
      icon: FaBuilding,
    },
    {
      year: "2020",
      title: "Green Building Pioneer",
      description: "LEED Platinum certification for sustainable construction",
      icon: FaHardHat,
    },
    {
      year: "2024",
      title: "Global Recognition",
      description: "Named Top 10 Construction Companies Worldwide",
      icon: FaCalendarAlt,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Two decades of growth, innovation, and excellence in construction
            engineering
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-125 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/building.avif"
              alt="Company history"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-blue-900/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <h3 className="text-2xl font-bold mb-2">
                Two Decades of Excellence
              </h3>
              <p className="text-blue-100">Building trust since 2005</p>
            </div>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-4 group">
                <div className="shrink-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <milestone.icon className="h-8 w-8" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-2xl font-bold text-blue-600">
                      {milestone.year}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {milestone.title}
                    </span>
                  </div>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
