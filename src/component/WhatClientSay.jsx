import React from "react";
import { BsArrowRight, BsStarFill, BsStarHalf } from "react-icons/bs";
import Image from "next/image";
const WhatClientSay = () => {
  return (
    <div>
      {" "}
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-green-600">Clients Say</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don&apos;t just take our word for it — hear from our satisfied
              clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "John Anderson",
                role: "CEO, Anderson Developments",
                content:
                  "Paradise Construction exceeded our expectations. Their attention to detail and project management skills are outstanding.",
                rating: 5,
                image: "/person.jpg",
              },
              {
                name: "Sarah Mitchell",
                role: "Project Director, Mitchell Group",
                content:
                  "The team's expertise and commitment to quality made our complex project seamless. Highly recommended!",
                rating: 5,
                image: "/person.jpg",
              },
              {
                name: "Robert Chen",
                role: "Architect, Chen & Associates",
                content:
                  "Working with Paradise Construction has been a pleasure. They truly understand the importance of design integrity.",
                rating: 4.5,
                image: "/person.jpg",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
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
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) =>
                    i < Math.floor(testimonial.rating) ? (
                      <BsStarFill key={i} className="h-5 w-5 text-yellow-400" />
                    ) : i === 4 && testimonial.rating === 4.5 ? (
                      <BsStarHalf key={i} className="h-5 w-5 text-yellow-400" />
                    ) : (
                      <BsStarFill key={i} className="h-5 w-5 text-gray-300" />
                    ),
                  )}
                </div>
                <p className="text-gray-700 italic">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatClientSay;
