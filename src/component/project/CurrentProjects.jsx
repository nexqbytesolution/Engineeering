// components/projects/CurrentProjects.jsx
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaClock, FaArrowRight } from "react-icons/fa";

const currentProjects = [
  {
    id: 1,
    title: "Skyline Tower",
    location: "New York, USA",
    progress: 75,
    completion: "Q4 2024",
    type: "Commercial",
    image: "/building.avif",
    description:
      "A 45-story mixed-use skyscraper with luxury residences and office spaces.",
    features: ["45 Stories", "LEED Platinum", "$450M Value"],
  },
  {
    id: 2,
    title: "Riverside Community",
    location: "London, UK",
    progress: 60,
    completion: "Q2 2025",
    type: "Residential",
    image: "/building.avif",
    description:
      "Sustainable residential community with 500+ eco-friendly homes.",
    features: ["500+ Homes", "Green Spaces", "£200M Value"],
  },
  {
    id: 3,
    title: "Metro Rail Extension",
    location: "Mumbai, India",
    progress: 85,
    completion: "Q1 2024",
    type: "Infrastructure",
    image: "/building.avif",
    description:
      "12km metro rail extension connecting major business districts.",
    features: ["12km Track", "8 Stations", "₹1500Cr Value"],
  },
  {
    id: 4,
    title: "Desert Pearl Hotel",
    location: "Dubai, UAE",
    progress: 45,
    completion: "Q3 2025",
    type: "Hospitality",
    image: "/building.avif",
    description: "Luxury 7-star hotel with innovative sustainable design.",
    features: ["350 Rooms", "7-Star", "$300M Value"],
  },
  {
    id: 5,
    title: "Tech Park Phase 3",
    location: "Bangalore, India",
    progress: 90,
    completion: "Q2 2024",
    type: "Commercial",
    image: "/building.avif",
    description: "State-of-the-art IT campus with 2M sq ft office space.",
    features: ["2M sq ft", "Smart Building", "₹800Cr Value"],
  },
  {
    id: 6,
    title: "Harbor Bridge",
    location: "Sydney, Australia",
    progress: 30,
    completion: "Q1 2026",
    type: "Infrastructure",
    image: "/building.avif",
    description: "Modern cable-stayed bridge improving city connectivity.",
    features: ["1.5km Length", "6 Lanes", "$500M Value"],
  },
];

export default function CurrentProjects({ limit }) {
  const displayProjects = limit
    ? currentProjects.slice(0, limit)
    : currentProjects;

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Current <span className="text-blue-600">Projects</span>
        </h2>
        {limit && (
          <Link
            href="/projects?tab=current"
            className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2"
          >
            View All <FaArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
          >
            <div className="relative h-64">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {project.type}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <div className="text-white font-semibold">
                  {project.completion}
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {project.title}
              </h3>
              <div className="flex items-center text-gray-600 mb-3">
                <FaMapMarkerAlt className="h-4 w-4 text-blue-600 mr-1" />
                <span className="text-sm">{project.location}</span>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-semibold text-blue-600">
                    {project.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.features.map((feature, i) => (
                  <span
                    key={i}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${project.id}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
              >
                View Details
                <FaArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
