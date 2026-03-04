// components/WhyChooseUs.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
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
import { BsArrowRight } from "react-icons/bs";

export default function WhyChooseUs() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Sticky Background */}
      <section className="relative h-[60vh] min-h-125">
        {/* Sticky Background Image */}
        <div className="fixed inset-0 -z-10">
          <Image
            src="/building.avif"
            alt="Modern skyscraper construction"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 via-blue-800/80 to-green-900/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6">
              <FaAward className="h-4 w-4 text-green-400 mr-2" />
              <span className="text-sm font-medium">
                Over 500+ Projects Completed
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Why Choose <span className="text-green-400">Paradise</span>{" "}
              Construction?
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Excellence, innovation, and unwavering commitment to quality —
              discover what makes us the preferred choice in construction
              engineering.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Content Sections - These will scroll over the sticky background */}
      <div className="relative bg-white">
        {/* Stats Section */}
        <section className="py-20 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  icon: FaBuilding,
                  label: "Projects",
                  value: "500+",
                  color: "blue",
                },
                {
                  icon: FaUsers,
                  label: "Happy Clients",
                  value: "450+",
                  color: "green",
                },
                {
                  icon: FaClock,
                  label: "Years Experience",
                  value: "20+",
                  color: "blue",
                },
                {
                  icon: FaTrophy,
                  label: "Awards Won",
                  value: "25+",
                  color: "green",
                },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div
                    className={`inline-flex p-4 rounded-2xl bg-${stat.color}-100 text-${stat.color}-600 mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-linear-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: "60px 60px",
              }}
            ></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your{" "}
              <span className="text-green-400">Project?</span>
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Let&apos;s bring your vision to life with our expertise and
              dedication.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group"
              >
                Get a Free Consultation
                <BsArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/products"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
