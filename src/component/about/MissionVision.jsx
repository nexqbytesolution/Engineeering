// components/about/MissionVision.jsx
import { FaBullseye, FaEye, FaHeart, FaHandshake } from "react-icons/fa";

export default function MissionVision() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <FaBullseye className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To deliver exceptional construction solutions that exceed client
              expectations, while maintaining the highest standards of quality,
              safety, and sustainability. We strive to create structures that
              not only stand tall but also stand the test of time.
            </p>
            <ul className="space-y-3">
              {[
                "Deliver excellence in every project",
                "Maintain uncompromising quality standards",
                "Ensure complete client satisfaction",
                "Promote sustainable construction practices",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
            <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
              <FaEye className="h-10 w-10" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              To be the global leader in construction engineering, recognized
              for innovation, integrity, and our positive impact on communities.
              We envision a future where our buildings inspire and our
              infrastructure connects.
            </p>
            <ul className="space-y-3">
              {[
                "Global recognition in construction",
                "Pioneer in innovative building techniques",
                "Leader in sustainable development",
                "Create lasting community impact",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Values Banner */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <FaHeart className="h-12 w-12 text-white/80" />
              <div>
                <h4 className="text-xl font-bold mb-1">Driven by Passion</h4>
                <p className="text-white/80">
                  Every project is a labor of love
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaHandshake className="h-12 w-12 text-white/80" />
              <div>
                <h4 className="text-xl font-bold mb-1">Built on Trust</h4>
                <p className="text-white/80">Long-term relationships matter</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
