// components/ProjectsPage.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CurrentProjects from "./CurrentProjects";
import PastProjects from "./PastProjects";
import NationalProjects from "./NationalProjects";
import InternationalProjects from "./InternationalProjects";
import ProjectStats from "./ProjectStats";
import ProjectCategories from "./ProjectCategories";

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All Projects" },
    { id: "current", label: "Current Projects" },
    { id: "past", label: "Past Work" },
    { id: "national", label: "National" },
    { id: "international", label: "International" },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] bg-gradient-to-r from-blue-900 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/building.avif"
            alt="Construction projects background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/90"></div>

        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-green-400">Projects</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              From towering skyscrapers to sustainable communities — explore our
              portfolio of excellence
            </p>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <ProjectStats />

      {/* Category Tabs */}
      <section className="py-12 bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === "all" && (
            <div className="space-y-16">
              <CurrentProjects limit={3} />
              <PastProjects limit={3} />
              <NationalProjects limit={3} />
              <InternationalProjects limit={3} />
              <div className="text-center">
                <ProjectCategories />
              </div>
            </div>
          )}
          {activeTab === "current" && <CurrentProjects />}
          {activeTab === "past" && <PastProjects />}
          {activeTab === "national" && <NationalProjects />}
          {activeTab === "international" && <InternationalProjects />}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-green-100 mb-10">
            Let&apos;s discuss how we can bring your vision to life
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}
