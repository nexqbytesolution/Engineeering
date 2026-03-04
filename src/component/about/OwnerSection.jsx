// components/about/OwnerSection.jsx
import Image from "next/image";
import { FaQuoteLeft, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function OwnerSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our <span className="text-green-600">Founder</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The visionary behind Paradise Construction
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Owner Image */}
          <div className="relative">
            <div className="relative h-125 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/building.avif"
                alt="Founder & CEO"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-blue-900/70 to-transparent"></div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-bold">20+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>

          {/* Owner Info */}
          <div className="space-y-6">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              <span className="text-sm font-semibold">Founder & CEO</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              John <span className="text-blue-600">Mitchell</span>
            </h3>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>Civil Engineer, MIT</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span>MBA, Harvard</span>
              </div>
            </div>

            {/* Quote */}
            <div className="relative">
              <FaQuoteLeft className="h-12 w-12 text-blue-200 absolute -top-2 -left-2" />
              <p className="text-xl text-gray-700 italic pl-8 relative z-10">
                I started Paradise Construction with a simple belief: every
                building tells a story. Today, we&apos;ve helped hundreds of
                clients tell their stories through structures that stand as
                testaments to their vision and our expertise.
              </p>
            </div>

            {/* Philosophy */}
            <div className="grid grid-cols-2 gap-4 py-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Philosophy</h4>
                <p className="text-gray-600 text-sm">
                  Build with integrity, lead with innovation, serve with
                  passion.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Vision</h4>
                <p className="text-gray-600 text-sm">
                  Create sustainable infrastructure that transforms communities.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-sky-500 text-white p-3 rounded-lg hover:bg-sky-600 transition-colors"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>
            </div>

            {/* Signature */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-gray-500 font-serif text-lg">John Mitchell</p>
              <p className="text-sm text-gray-400">
                Founder & CEO, Paradise Construction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
