// components/about/Achievements.jsx
import { FaTrophy, FaMedal, FaCertificate, FaAward } from "react-icons/fa";

export default function Achievements() {
  const achievements = [
    {
      icon: FaTrophy,
      title: "Best Construction Company 2024",
      organization: "Global Construction Awards",
      year: "2024",
      color: "blue",
    },
    {
      icon: FaMedal,
      title: "Safety Excellence Award",
      organization: "OSHA",
      year: "2023",
      color: "green",
    },
    {
      icon: FaCertificate,
      title: "LEED Platinum Certification",
      organization: "US Green Building Council",
      year: "2023",
      color: "blue",
    },
    {
      icon: FaAward,
      title: "Innovation in Sustainable Building",
      organization: "Green Building Council",
      year: "2022",
      color: "green",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Achievements</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognition for our commitment to excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className={`w-16 h-16 bg-${achievement.color}-100 rounded-xl flex items-center justify-center text-${achievement.color}-600 mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all`}
              >
                <achievement.icon className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {achievement.title}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                {achievement.organization}
              </p>
              <div className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                {achievement.year}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Our Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "ISO 9001:2024",
              "OSHA Certified",
              "LEED Accredited",
              "Green Building Council",
              "Safety First Certified",
              "Women's Business Enterprise",
            ].map((cert, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
