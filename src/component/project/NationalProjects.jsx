// components/projects/NationalProjects.jsx
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

const nationalProjects = [
  {
    id: 201,
    title: "Bharat Tech Hub",
    location: "Bengaluru, Karnataka",
    state: "Karnataka",
    type: "IT Park",
    image: "/building.avif",
    description: "India's largest IT campus with 5M sq ft of office space.",
    highlights: ["5M sq ft", "10,000+ Seats", "Net Zero Building"],
  },
  {
    id: 202,
    title: "Mumbai Coastal Road",
    location: "Mumbai, Maharashtra",
    state: "Maharashtra",
    type: "Infrastructure",
    image: "/building.avif",
    description: "8-lane coastal highway transforming city connectivity.",
    highlights: ["22km Length", "2 Tunnels", "₹14,000Cr Project"],
  },
  {
    id: 203,
    title: "GIFT City Towers",
    location: "Gandhinagar, Gujarat",
    state: "Gujarat",
    type: "Commercial",
    image: "/building.avif",
    description: "Twin towers in India's first smart city.",
    highlights: ["65 Stories", "Mixed-use", "LEED Certified"],
  },
];

export default function NationalProjects({ limit }) {
  const displayProjects = limit
    ? nationalProjects.slice(0, limit)
    : nationalProjects;

  return (
    <div className="mt-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            National <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-gray-600 mt-2">Iconic developments across India</p>
        </div>
        {limit && (
          <Link
            href="/projects?tab=national"
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
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-blue-600"
          >
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {project.type}
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

              <div className="grid grid-cols-3 gap-2 mb-4">
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xs font-semibold text-blue-600">
                      {highlight.split(" ")[0]}
                    </div>
                    <div className="text-xs text-gray-500">
                      {highlight.split(" ").slice(1).join(" ")}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href={`/projects/${project.id}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
              >
                Explore Project
                <FaArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
