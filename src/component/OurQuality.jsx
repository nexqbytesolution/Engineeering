import React from "react";
import {
  FaHardHat,
  FaTrophy,
  FaUsers,
  FaClock,
  FaLeaf,
  FaShieldAlt,
  FaCheckCircle,
  FaAward,
  FaRuler,
  FaHandshake,
  FaChartLine,
  FaBuilding,
} from "react-icons/fa";

const OurQuality = () => {
  return (
    <div>
      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Sets Us <span className="text-blue-600">Apart</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver
              exceptional results
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaHardHat,
                title: "Expert Engineering Team",
                description:
                  "Our team consists of licensed engineers with decades of combined experience in diverse construction projects.",
                color: "blue",
                features: [
                  "PE Licensed",
                  "Industry Certified",
                  "Continuous Training",
                ],
              },
              {
                icon: FaShieldAlt,
                title: "Uncompromising Quality",
                description:
                  "We maintain the highest standards of quality control throughout every phase of construction.",
                color: "green",
                features: [
                  "ISO Certified",
                  "Strict QA/QC",
                  "Premium Materials",
                ],
              },
              {
                icon: FaClock,
                title: "Timely Delivery",
                description:
                  "We pride ourselves on completing projects on schedule without compromising on quality.",
                color: "blue",
                features: [
                  "Project Planning",
                  "Milestone Tracking",
                  "On-time Guarantee",
                ],
              },
              {
                icon: FaLeaf,
                title: "Sustainable Practices",
                description:
                  "Committed to environmentally responsible construction methods and materials.",
                color: "green",
                features: ["LEED Accredited", "Green Building", "Eco-friendly"],
              },
              {
                icon: FaChartLine,
                title: "Cost Effective",
                description:
                  "We deliver exceptional value through efficient resource management and innovative solutions.",
                color: "blue",
                features: [
                  "Competitive Pricing",
                  "Value Engineering",
                  "No Hidden Costs",
                ],
              },
              {
                icon: FaHandshake,
                title: "Client-Centric Approach",
                description:
                  "Your vision is our priority. We work closely with you at every step of the journey.",
                color: "green",
                features: [
                  "24/7 Support",
                  "Regular Updates",
                  "Flexible Solutions",
                ],
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-t-4 ${
                  feature.color === "blue"
                    ? "border-blue-600"
                    : "border-green-600"
                } group`}
              >
                <div className="p-8">
                  <div
                    className={`inline-flex p-4 rounded-xl bg-${feature.color}-100 text-${feature.color}-600 mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <FaCheckCircle
                          className={`h-4 w-4 text-${feature.color}-600 mr-2 shrink-0`}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurQuality;
