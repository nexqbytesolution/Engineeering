// components/about/Testimonials.jsx
import Image from "next/image";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Robert Anderson",
      role: "CEO, Anderson Developments",
      content:
        "Paradise Construction exceeded our expectations on every level. Their attention to detail and project management skills are outstanding. They delivered our commercial complex ahead of schedule and under budget.",
      rating: 5,
      image: "/building.avif",
      project: "Skyline Tower",
    },
    {
      name: "Jennifer Lee",
      role: "Architect, Lee & Associates",
      content:
        "Working with Paradise has been a pleasure. They understand the importance of design integrity while ensuring structural excellence. Their team is professional, responsive, and truly collaborative.",
      rating: 5,
      image: "/building.avif",
      project: "Riverside Community",
    },
    {
      name: "Michael Thompson",
      role: "Project Director, Metro Authority",
      content:
        "The infrastructure project they handled for us was complex and demanding. Paradise delivered with precision, safety, and minimal disruption to the community. Highly recommended.",
      rating: 4.5,
      image: "/building.avif",
      project: "Metro Rail Extension",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from those who&apos;ve
            worked with us
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              <FaQuoteLeft className="absolute top-6 right-6 h-12 w-12 text-blue-100" />

              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-blue-600 mt-1">
                    Project: {testimonial.project}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(testimonial.rating)
                        ? "text-yellow-400"
                        : i === 4 && testimonial.rating === 4.5
                          ? "text-yellow-400 opacity-50"
                          : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              <p className="text-gray-700 italic">{testimonial.content}</p>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <p className="text-center text-gray-600 mb-8">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="w-24 h-12 bg-gray-200 rounded-lg opacity-50 hover:opacity-100 transition-opacity"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
