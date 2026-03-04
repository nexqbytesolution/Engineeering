// components/about/TeamSection.jsx
import Image from "next/image";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function TeamSection() {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Chief Operating Officer",
      experience: "15+ years",
      image: "/building.avif",
      expertise: "Project Management",
      color: "blue",
    },
    {
      name: "Michael Chen",
      role: "Head of Engineering",
      experience: "12+ years",
      image: "/building.avif",
      expertise: "Structural Engineering",
      color: "green",
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director",
      experience: "10+ years",
      image: "/building.avif",
      expertise: "Sustainable Design",
      color: "blue",
    },
    {
      name: "David Kim",
      role: "Projects Director",
      experience: "18+ years",
      image: "/building.avif",
      expertise: "Infrastructure",
      color: "green",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Leadership <span className="text-blue-600">Team</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the experts driving our success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="group">
              <div className="relative h-80 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Social Links */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0">
                  <a
                    href="#"
                    className="bg-white text-blue-600 p-2 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <FaLinkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="bg-white text-gray-700 p-2 rounded-full hover:bg-gray-700 hover:text-white transition-colors"
                  >
                    <FaEnvelope className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className={`text-${member.color}-600 font-medium mb-2`}>
                {member.role}
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="px-2 py-1 bg-gray-100 rounded-full">
                  {member.experience}
                </span>
                <span className="px-2 py-1 bg-gray-100 rounded-full">
                  {member.expertise}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">And 200+ dedicated professionals</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Engineers",
              "Architects",
              "Project Managers",
              "Site Supervisors",
              "Safety Officers",
              "Support Staff",
            ].map((role, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
