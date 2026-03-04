// components/projects/InternationalProjects.jsx
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaGlobe, FaArrowRight } from "react-icons/fa";

const internationalProjects = [
  {
    id: 301,
    title: "Dubai Creek Tower",
    location: "Dubai, UAE",
    country: "UAE",
    type: "Mixed-use",
    image: "/building.avif",
    description: "Iconic tower redefining the Dubai skyline.",
    features: ["1,000m Height", "Observation Deck", "Luxury Hotel"],
  },
  {
    id: 302,
    title: "London Crossrail",
    location: "London, UK",
    country: "United Kingdom",
    type: "Infrastructure",
    image: "/building.avif",
    description: "Europe's largest infrastructure project.",
    features: ["100km Track", "40 Stations", "£18B Project"],
  },
  {
    id: 303,
    title: "Singapore Changi T5",
    location: "Singapore",
    country: "Singapore",
    type: "Aviation",
    image: "/building.avif",
    description: "World's most advanced airport terminal.",
    features: ["50M Capacity", "Automated Systems", "Green Design"],
  },
];

export default function InternationalProjects({ limit }) {
  const displayProjects = limit
    ? internationalProjects.slice(0, limit)
    : internationalProjects;

  return (
    <div className="mt-16">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            International <span className="text-green-600">Projects</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Global excellence across continents
          </p>
        </div>
        {limit && (
          <Link
            href="/projects?tab=international"
            className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2"
          >
            View All <FaArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-l-4 border-green-600"
          >
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                <FaGlobe className="inline h-3 w-3 mr-1" />
                {project.country}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {project.title}
              </h3>

              <div className="flex items-center text-gray-600 mb-3">
                <FaMapMarkerAlt className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm">{project.location}</span>
              </div>

              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.features.map((feature, i) => (
                  <span
                    key={i}
                    className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${project.id}`}
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group"
              >
                View Project
                <FaArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
