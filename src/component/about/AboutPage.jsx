// components/AboutPage.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import CompanyHistory from "./CompanyHistory";
import MissionVision from "./MissionVision";
import CoreValues from "./CoreValues";
import TeamSection from "./TeamSection";
import OwnerSection from "./OwnerSection";
import Testimonials from "./Testimonials";
import Achievements from "./Achievements";
import Stats from "./Stats";
import { FaArrowRight } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/building.avif"
            alt="About Paradise Construction"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-green-900/90"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6">
              <span className="text-sm font-medium text-white">
                Est. 2005 • Two Decades of Excellence
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Building Dreams, Creating
              <span className="text-green-400"> Legacies</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Discover the story behind Paradise Construction — a journey of
              passion, innovation, and unwavering commitment to excellence.
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Company History */}
      <CompanyHistory />

      {/* Mission & Vision */}
      <MissionVision />

      {/* Core Values */}
      <CoreValues />

      {/* Owner Section */}
      <OwnerSection />

      {/* Team Section */}
      <TeamSection />

      {/* Achievements */}
      <Achievements />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
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
            Ready to Work with{" "}
            <span className="text-green-400">Industry Leaders?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Join hundreds of satisfied clients who trusted us with their vision
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group"
            >
              Start Your Project
              <FaArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
