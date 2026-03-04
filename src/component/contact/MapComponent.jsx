// components/contact/MapComponent.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaDirections,
  FaExpand,
  FaCompress,
} from "react-icons/fa";

export default function MapComponent() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Using a static map image as placeholder (in production, use Google Maps Embed or similar)
  const mapImageUrl = "/contruction.jpg";

  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
        isFullscreen ? "fixed inset-4 z-50" : ""
      }`}
    >
      {/* Map Container */}
      <div className={`relative ${isFullscreen ? "h-full" : "h-[450px]"}`}>
        <Image
          src={mapImageUrl}
          alt="Office location map"
          fill
          className="object-cover"
        />

        {/* Map Overlay */}
        <div className="absolute inset-0 bg-blue-900/10"></div>

        {/* Location Marker */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group">
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-600 rounded-full animate-ping"></div>
            <div className="relative bg-blue-600 text-white p-3 rounded-full shadow-xl group-hover:scale-110 transition-transform">
              <FaMapMarkerAlt className="h-6 w-6" />
            </div>
          </div>

          {/* Location Tooltip */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 bg-white rounded-lg shadow-xl p-4 min-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <p className="font-semibold text-gray-900">Paradise Construction</p>
            <p className="text-sm text-gray-600">123 Construction Ave</p>
            <p className="text-sm text-gray-600">New York, NY 10001</p>
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-blue-600"
            aria-label={isFullscreen ? "Exit fullscreen" : "View fullscreen"}
          >
            {isFullscreen ? (
              <FaCompress className="h-5 w-5" />
            ) : (
              <FaExpand className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Location Info Card */}
        <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:w-80 bg-white rounded-xl shadow-xl p-4">
          <div className="flex items-start gap-3">
            <div className="bg-blue-100 p-2 rounded-lg">
              <FaMapMarkerAlt className="h-5 w-5 text-blue-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">
                Paradise Construction HQ
              </h4>
              <p className="text-sm text-gray-600 mb-2">
                123 Construction Avenue, Building District, New York, NY 10001
              </p>
              <div className="flex gap-2">
                <Link
                  href="https://maps.google.com/?q=123+Construction+Avenue+New+York"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 text-white text-sm py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-1"
                >
                  <FaDirections className="h-4 w-4" />
                  Directions
                </Link>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: "Paradise Construction",
                        text: "123 Construction Avenue, New York, NY 10001",
                        url: "https://maps.google.com/?q=123+Construction+Avenue+New+York",
                      });
                    }
                  }}
                  className="bg-gray-100 text-gray-700 text-sm py-2 px-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Attribution */}
        <div className="absolute bottom-2 left-2 text-xs text-white bg-black/50 px-2 py-1 rounded">
          Map data © 2024 Paradise Construction
        </div>
      </div>

      {/* Fullscreen Close Button */}
      {isFullscreen && (
        <button
          onClick={() => setIsFullscreen(false)}
          className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 hover:text-red-600 z-50"
        >
          <FaCompress className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
