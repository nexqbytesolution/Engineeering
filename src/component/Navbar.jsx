// components/Navbar.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Our Project", href: "/project" },
  { name: "Contact us", href: "/contact" },
  { name: "About us", href: "/about" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg relative z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 justify-between items-center">
          <div className="flex items-center gap-3">
            <Link href="/" className="relative w-32 h-14">
              <Image
                src={"/logo.png"}
                alt="Paradise Land"
                fill
                className="object-contain object-left"
                priority
              />
            </Link>
            <div className="flex flex-col">
              <span className="text-blue-600 font-bold text-lg leading-tight">
                Paradise Construction
              </span>
              <span className="text-green-600 font-semibold text-sm">
                Pvt Ltd
              </span>
            </div>
          </div>

          {/* Desktop Navigation - 30% White background with black text */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition duration-300 border-b-2 border-transparent hover:border-blue-600"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Get Credit Button - 30% Green */}
          <div className="hidden md:block">
            <Link
              href="/credit"
              className="bg-green-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition duration-300 shadow-md hover:shadow-lg"
            >
              Get Credit
            </Link>
          </div>

          {/* Mobile menu button - 10% Black */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 bg-gray-100 hover:bg-gray-200 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <HiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <HiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/credit"
              className="block px-3 py-2 text-base font-medium bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Credit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
