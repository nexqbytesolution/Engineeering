// components/about/CoreValues.jsx
import {
  FaShieldAlt,
  FaLeaf,
  FaHandshake,
  FaLightbulb,
  FaUsers,
  FaAward,
} from "react-icons/fa";

export default function CoreValues() {
  const values = [
    {
      icon: FaShieldAlt,
      title: "Integrity",
      description:
        "We conduct business with honesty, transparency, and unwavering ethical standards.",
      color: "blue",
    },
    {
      icon: FaAward,
      title: "Excellence",
      description:
        "We strive for perfection in every detail, delivering superior quality in all projects.",
      color: "green",
    },
    {
      icon: FaLeaf,
      title: "Sustainability",
      description:
        "We're committed to environmentally responsible construction practices.",
      color: "blue",
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description:
        "We embrace new technologies and methods to build better, smarter, and faster.",
      color: "green",
    },
    {
      icon: FaUsers,
      title: "Collaboration",
      description:
        "We work closely with clients, partners, and communities to achieve shared success.",
      color: "blue",
    },
    {
      icon: FaHandshake,
      title: "Safety First",
      description:
        "The well-being of our team and stakeholders is our top priority.",
      color: "green",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core <span className="text-blue-600">Values</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 ${
                value.color === "blue" ? "border-blue-600" : "border-green-600"
              } group`}
            >
              <div
                className={`inline-flex p-4 rounded-xl bg-${value.color}-100 text-${value.color}-600 mb-6 group-hover:scale-110 transition-transform`}
              >
                <value.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
