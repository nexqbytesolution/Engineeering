// components/Hero.jsx
import Link from "next/link";
import Image from "next/image";
import { FaBuilding, FaHardHat, FaTrophy, FaCheckCircle } from "react-icons/fa";
import { BiBuildingHouse } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

export default function Hero() {
  return (
    <section className="relative bg-linear-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("/contruction.jpg")`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
              <FaHardHat className="h-4 w-4 text-green-400 mr-2" />
              <span className="text-sm font-medium">
                Est. 2005 • ISO Certified
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Building <span className="text-green-400">Tomorrow&apos;s</span>{" "}
              <br className="hidden sm:block" />
              Infrastructure Today
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-blue-100 max-w-xl">
              With over two decades of excellence in construction engineering,
              we deliver iconic structures that stand the test of time.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="group bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                Start Your Project
                <BsArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/products"
                className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition duration-300 backdrop-blur-sm"
              >
                View Our Work
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-bold text-green-400">500+</div>
                <div className="text-sm text-blue-200">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">50+</div>
                <div className="text-sm text-blue-200">Expert Engineers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">98%</div>
                <div className="text-sm text-blue-200">Client Satisfaction</div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 text-sm text-blue-200">
              <div className="flex items-center gap-2">
                <FaCheckCircle className="h-4 w-4 text-green-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="h-4 w-4 text-green-400" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <FaCheckCircle className="h-4 w-4 text-green-400" />
                <span>Free Consultation</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image and Cards */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-linear-to-t from-blue-900/80 via-transparent to-transparent z-10"></div>
              <Image
                src="/contruction.jpg"
                alt="Modern construction site with engineers"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />

              <div className="absolute bottom-6 right-6 z-20 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <FaTrophy className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Award Winning</div>
                    <div className="font-semibold text-gray-900">
                      Best Builder 2024
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 -left-10 z-20 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">
                      Expert Team
                    </div>
                    <div className="text-xs text-gray-500">50+ Engineers</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Pills */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
              <div className="bg-white text-gray-900 px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                <FaBuilding className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium">Commercial</span>
              </div>
              <div className="bg-white text-gray-900 px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                <FaBuilding className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">Residential</span>
              </div>
              <div className="bg-white text-gray-900 px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                <FaBuilding className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium">Industrial</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
