// components/Footer.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaHardHat,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import { BsFillBuildingFill } from "react-icons/bs";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-900 text-gray-300">
      {/* Top Decorative Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-green-500 to-blue-600"></div>

      {/* Main Footer Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src={"/logo.png"}
                  alt="Paradise Land"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Paradise</h3>
                <p className="text-sm text-green-500">Construction Pvt Ltd</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Building excellence through innovation and dedication in
              construction engineering since 2005.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {[
                {
                  icon: FaFacebookF,
                  href: "#",
                  bg: "bg-blue-600",
                  hover: "hover:bg-blue-700",
                },
                {
                  icon: FaTwitter,
                  href: "#",
                  bg: "bg-sky-500",
                  hover: "hover:bg-sky-600",
                },
                {
                  icon: FaLinkedinIn,
                  href: "#",
                  bg: "bg-blue-700",
                  hover: "hover:bg-blue-800",
                },
                {
                  icon: FaInstagram,
                  href: "#",
                  bg: "bg-pink-600",
                  hover: "hover:bg-pink-700",
                },
                {
                  icon: FaYoutube,
                  href: "#",
                  bg: "bg-red-600",
                  hover: "hover:bg-red-700",
                },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className={`${social.bg} ${social.hover} text-white p-3 rounded-lg transition duration-300 transform hover:-translate-y-1`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-green-500"></span>
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Our Products", href: "/products" },
                { name: "Contact Us", href: "/contact" },
                { name: "About Us", href: "/about" },
                { name: "Get Credit", href: "/credit" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-500 transition duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:scale-150 transition-transform"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-blue-500"></span>
              Our Services
            </h4>
            <ul className="space-y-4">
              {[
                "Construction Management",
                "Engineering Design",
                "Project Consulting",
                "Equipment Rental",
                "Quality Assurance",
                "Sustainable Building",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-blue-500 transition duration-300 flex items-center gap-2 group"
                  >
                    <BsFillBuildingFill className="h-3 w-3 text-blue-500 group-hover:scale-110 transition-transform" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-green-500"></span>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  123 Construction Avenue,
                  <br />
                  Building District, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="h-5 w-5 text-blue-500 flex-shrink-0" />
                <Link
                  href="tel:+15551234567"
                  className="text-gray-400 hover:text-green-500 transition"
                >
                  +1 (555) 123-4567
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="h-5 w-5 text-green-500 flex-shrink-0" />
                <Link
                  href="mailto:info@paradiseland.com"
                  className="text-gray-400 hover:text-blue-500 transition"
                >
                  info@paradiseland.com
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <FaClock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 4:00 PM</p>
                  <p className="text-green-500">Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} Paradise Construction Pvt Ltd. All rights
              reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-green-500 transition"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-blue-500 transition"
              >
                Terms of Service
              </Link>
              <span className="text-gray-600">|</span>
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-green-500 transition"
              >
                Sitemap
              </Link>
            </div>
          </div>

          {/* Certification Badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <FaHardHat className="h-4 w-4 text-blue-500" />
              <span>ISO 9001:2024 Certified</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <FaHardHat className="h-4 w-4 text-green-500" />
              <span>OSHA Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <FaHardHat className="h-4 w-4 text-blue-500" />
              <span>LEED Accredited</span>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-8 -top-5 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition duration-300 hover:-translate-y-1"
        aria-label="Back to top"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
}
