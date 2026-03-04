// components/services/ServiceProcess.jsx
import {
  FaSearch,
  FaDraftingCompass,
  FaHardHat,
  FaCheckCircle,
} from "react-icons/fa";

export default function ServiceProcess() {
  const steps = [
    {
      icon: FaSearch,
      title: "Discovery & Consultation",
      description:
        "We begin by understanding your vision, requirements, and budget through detailed consultations.",
      details: [
        "Site Assessment",
        "Requirements Analysis",
        "Budget Planning",
        "Timeline Discussion",
      ],
      color: "blue",
    },
    {
      icon: FaDraftingCompass,
      title: "Design & Planning",
      description:
        "Our experts create comprehensive designs and detailed project plans tailored to your needs.",
      details: [
        "Architectural Design",
        "Structural Engineering",
        "Material Selection",
        "Permit Acquisition",
      ],
      color: "green",
    },
    {
      icon: FaHardHat,
      title: "Construction & Execution",
      description:
        "Skilled professionals bring your project to life with precision and attention to detail.",
      details: [
        "Site Preparation",
        "Foundation Work",
        "Structure Building",
        "Quality Control",
      ],
      color: "blue",
    },
    {
      icon: FaCheckCircle,
      title: "Handover & Support",
      description:
        "We ensure everything is perfect and provide ongoing support after project completion.",
      details: [
        "Final Inspection",
        "Client Walkthrough",
        "Documentation",
        "Warranty Support",
      ],
      color: "green",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Process</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A systematic approach ensuring quality and excellence at every stage
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-linear-to-r from-blue-600 via-green-600 to-blue-600 hidden lg:block"></div>

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-2 border-blue-600 rounded-full flex items-center justify-center text-blue-600 font-bold z-10">
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className={`w-24 h-24 mx-auto bg-${step.color}-100 rounded-2xl flex items-center justify-center text-${step.color}-600 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  <step.icon className="h-12 w-12" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4">{step.description}</p>

                {/* Details */}
                <ul className="space-y-2 text-sm">
                  {step.details.map((detail, i) => (
                    <li
                      key={i}
                      className="text-gray-500 flex items-center justify-center gap-2"
                    >
                      <span
                        className={`w-1 h-1 bg-${step.color}-600 rounded-full`}
                      ></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
