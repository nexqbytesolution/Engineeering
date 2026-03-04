// components/services/ServiceBenefits.jsx
import {
  FaClock,
  FaDollarSign,
  FaShieldAlt,
  FaLeaf,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

export default function ServiceBenefits() {
  const benefits = [
    {
      icon: FaClock,
      title: "Timely Delivery",
      description:
        "We pride ourselves on completing projects on schedule without compromising quality.",
      color: "blue",
    },
    {
      icon: FaDollarSign,
      title: "Cost Effective",
      description:
        "Competitive pricing with no hidden costs, ensuring maximum value for your investment.",
      color: "green",
    },
    {
      icon: FaShieldAlt,
      title: "Quality Assured",
      description:
        "Rigorous quality control at every stage with premium materials and skilled craftsmanship.",
      color: "blue",
    },
    {
      icon: FaLeaf,
      title: "Sustainable",
      description:
        "Eco-friendly practices and sustainable materials for environmentally responsible construction.",
      color: "green",
    },
    {
      icon: FaUsers,
      title: "Expert Team",
      description:
        "Licensed engineers and experienced professionals dedicated to your project's success.",
      color: "blue",
    },
    {
      icon: FaChartLine,
      title: "Innovative Solutions",
      description:
        "Cutting-edge technology and innovative approaches for optimal results.",
      color: "green",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our <span className="text-green-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference of working with industry leaders
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className={`inline-flex p-4 rounded-xl bg-${benefit.color}-100 text-${benefit.color}-600 mb-6 group-hover:scale-110 transition-transform`}
              >
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Guarantee Badge */}
        <div className="mt-12 bg-linear-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">
            100% Satisfaction Guaranteed
          </h3>
          <p className="text-white/90">
            We don&apos;t rest until you&apos;re completely satisfied with our
            work
          </p>
        </div>
      </div>
    </section>
  );
}
