// components/projects/ProjectCategories.jsx
import Link from "next/link";
import {
  FaBuilding,
  FaRoad,
  FaHotel,
  FaIndustry,
  FaHospital,
  FaUniversity,
} from "react-icons/fa";

const categories = [
  { icon: FaBuilding, name: "Commercial", count: 150, color: "blue" },
  { icon: FaHotel, name: "Residential", count: 200, color: "green" },
  { icon: FaRoad, name: "Infrastructure", count: 75, color: "blue" },
  { icon: FaIndustry, name: "Industrial", count: 45, color: "green" },
  { icon: FaHospital, name: "Healthcare", count: 30, color: "blue" },
  { icon: FaUniversity, name: "Educational", count: 40, color: "green" },
];

export default function ProjectCategories() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Explore by <span className="text-blue-600">Category</span>
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={`/projects/category/${category.name.toLowerCase()}`}
            className={`group text-center p-4 rounded-xl hover:shadow-md transition-all duration-300 ${
              category.color === "blue"
                ? "hover:bg-blue-50"
                : "hover:bg-green-50"
            }`}
          >
            <div
              className={`inline-flex p-3 rounded-full bg-${category.color}-100 text-${category.color}-600 mb-3 group-hover:scale-110 transition-transform`}
            >
              <category.icon className="h-6 w-6" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">
              {category.name}
            </h4>
            <p className={`text-sm text-${category.color}-600`}>
              {category.count}+ Projects
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
