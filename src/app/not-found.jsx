// app/not-found.jsx
"use client";

import Link from "next/link";
import { FaHome, FaArrowLeft, FaSearch, FaHardHat } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Construction Icon */}
        <div className="relative mb-8">
          <div className="inline-block p-6 bg-blue-100 rounded-full">
            <FaHardHat className="h-16 w-16 text-blue-600" />
          </div>
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-full">
            404
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-4">
          Oops!
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Looks like you&apos;ve ventured into an area under construction. The
          page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Construction Bar Animation */}
        <div className="w-48 h-2 bg-gray-200 rounded-full mx-auto mb-8 overflow-hidden">
          <div
            className="h-full bg-green-500 rounded-full animate-pulse"
            style={{ width: "60%" }}
          ></div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg group"
          >
            <FaHome className="h-5 w-5 group-hover:scale-110 transition-transform" />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg group"
          >
            <FaArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
        </div>

        {/* Search Suggestion */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 mb-4 flex items-center justify-center gap-2">
            <FaSearch className="h-4 w-4" />
            Looking for something specific?
          </p>

          <Link
            href="/contact"
            className="text-blue-600 hover:text-blue-700 font-medium underline underline-offset-4"
          >
            Contact our support team
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-8 text-sm text-gray-400">
          <span>Popular pages: </span>
          <Link href="/" className="hover:text-blue-600 transition-colors mx-1">
            Home
          </Link>
          <span>•</span>
          <Link
            href="/services"
            className="hover:text-blue-600 transition-colors mx-1"
          >
            Services
          </Link>
          <span>•</span>
          <Link
            href="/projects"
            className="hover:text-blue-600 transition-colors mx-1"
          >
            Projects
          </Link>
          <span>•</span>
          <Link
            href="/contact"
            className="hover:text-blue-600 transition-colors mx-1"
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
