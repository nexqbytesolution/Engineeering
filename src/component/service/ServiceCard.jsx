// components/services/ServiceCard.jsx
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

export default function ServiceCard({ service }) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border-t-4 ${
        service.color === "blue" ? "border-blue-600" : "border-green-600"
      }`}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <service.icon
            className={`h-4 w-4 ${service.color === "blue" ? "text-blue-600" : "text-green-600"}`}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {service.title}
        </h3>
        <p className="text-gray-600 mb-4">{service.description}</p>

        {/* Features Preview */}
        <div className="space-y-2 mb-4">
          {service.features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="flex items-center text-sm text-gray-600"
            >
              <FaCheckCircle
                className={`h-4 w-4 ${service.color === "blue" ? "text-blue-600" : "text-green-600"} mr-2 shrink-0`}
              />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 py-4 border-t border-gray-100">
          <div className="text-center">
            <div
              className={`text-sm font-bold ${service.color === "blue" ? "text-blue-600" : "text-green-600"}`}
            >
              {service.stats.projects}
            </div>
            <div className="text-xs text-gray-500">Projects</div>
          </div>
          <div className="text-center">
            <div
              className={`text-sm font-bold ${service.color === "blue" ? "text-blue-600" : "text-green-600"}`}
            >
              {service.stats.experience}
            </div>
            <div className="text-xs text-gray-500">Experience</div>
          </div>
          <div className="text-center">
            <div
              className={`text-sm font-bold ${service.color === "blue" ? "text-blue-600" : "text-green-600"}`}
            >
              {service.stats.team}
            </div>
            <div className="text-xs text-gray-500">Team</div>
          </div>
        </div>

        {/* Link */}
        <Link
          href={`/services/${service.id}`}
          className={`inline-flex items-center text-${service.color}-600 hover:text-${service.color}-700 font-medium group/link mt-2`}
        >
          Learn More
          <FaArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
