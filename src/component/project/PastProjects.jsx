// components/projects/PastProjects.jsx
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt, FaCalendar, FaArrowRight } from "react-icons/fa";

const pastProjects = [
  {
    id: 101,
    title: "Central Business District",
    location: "Singapore",
    year: "2023",
    type: "Commercial",
    image: "/building.avif",
    description:
      "Award-winning mixed-use development in the heart of Singapore.",
    achievements: ["Best Commercial Project 2023", "Green Mark Platinum"],
  },
  {
    id: 102,
    title: "Coastal Residences",
    location: "Miami, USA",
    year: "2022",
    type: "Residential",
    image: "/building.avif",
    description: "Luxury beachfront condominiums with panoramic ocean views.",
    achievements: ["Architecture Award 2022", "100% Sold Out"],
  },
  {
    id: 103,
    title: "High-Speed Rail Terminal",
    location: "Tokyo, Japan",
    year: "2023",
    type: "Infrastructure",
    image: "/building.avif",
    description: "Modern transportation hub serving 500,000 passengers daily.",
    achievements: ["Infrastructure Excellence", "Seismic Design Award"],
  },
];

export default function PastProjects({ limit }) {
  const displayProjects = limit ? pastProjects.slice(0, limit) : pastProjects;

  return (
    <div className="mt-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Past <span className="text-green-600">Projects</span>
        </h2>
        {limit && (
          <Link
            href="/projects?tab=past"
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
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative h-56">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {project.type}
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <div className="flex items-center text-gray-500 text-sm">
                  <FaCalendar className="h-3 w-3 mr-1" />
                  {project.year}
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-3">
                <FaMapMarkerAlt className="h-4 w-4 text-green-600 mr-1" />
                <span className="text-sm">{project.location}</span>
              </div>

              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="space-y-2 mb-4">
                {project.achievements.map((achievement, i) => (
                  <div
                    key={i}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                    {achievement}
                  </div>
                ))}
              </div>

              <Link
                href={`/projects/${project.id}`}
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium group"
              >
                View Case Study
                <FaArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
