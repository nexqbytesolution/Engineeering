// components/ServicesPage.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ServiceCard from "./ServiceCard";
import ServiceCategories from "./ServiceCategories";
import ServiceProcess from "./ServiceProcess";
import ServiceBenefits from "./ServiceBenefits";
import ServiceFAQ from "./ServiceFAQ";
import {
  FaArrowRight,
  FaHardHat,
  FaBuilding,
  FaRoad,
  FaIndustry,
} from "react-icons/fa";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const services = [
    {
      id: 1,
      title: "Residential Construction",
      category: "residential",
      icon: FaBuilding,
      description:
        "Custom homes, luxury residences, and multi-family housing developments built with precision and care.",
      longDescription:
        "From dream homes to multi-family complexes, we deliver residential spaces that combine aesthetics, functionality, and durability.",
      features: [
        "Custom Home Building",
        "Luxury Villas",
        "Apartment Complexes",
        "Townhouse Developments",
        "Renovations & Extensions",
        "Smart Home Integration",
      ],
      image: "/building.avif",
      color: "blue",
      stats: { projects: "250+", experience: "20+ years", team: "50+ experts" },
    },
    {
      id: 2,
      title: "Commercial Construction",
      category: "commercial",
      icon: FaBuilding,
      description:
        "State-of-the-art office buildings, retail spaces, and commercial complexes tailored to business needs.",
      longDescription:
        "Creating dynamic commercial spaces that enhance productivity, attract customers, and stand the test of time.",
      features: [
        "Office Buildings",
        "Shopping Malls",
        "Hotels & Resorts",
        "Restaurants",
        "Retail Stores",
        "Mixed-Use Developments",
      ],
      image: "/building.avif",
      color: "green",
      stats: { projects: "180+", experience: "18+ years", team: "40+ experts" },
    },
    {
      id: 3,
      title: "Infrastructure Projects",
      category: "infrastructure",
      icon: FaRoad,
      description:
        "Large-scale infrastructure including bridges, roads, railways, and public facilities.",
      longDescription:
        "Building the backbone of communities with durable, sustainable infrastructure projects.",
      features: [
        "Bridge Construction",
        "Highway Development",
        "Railway Systems",
        "Tunnels",
        "Airports",
        "Public Transportation",
      ],
      image: "/building.avif",
      color: "blue",
      stats: { projects: "120+", experience: "25+ years", team: "60+ experts" },
    },
    {
      id: 4,
      title: "Industrial Construction",
      category: "industrial",
      icon: FaIndustry,
      description:
        "Specialized industrial facilities including factories, warehouses, and processing plants.",
      longDescription:
        "Delivering robust industrial structures optimized for efficiency, safety, and productivity.",
      features: [
        "Factories",
        "Warehouses",
        "Processing Plants",
        "Distribution Centers",
        "Industrial Parks",
        "Storage Facilities",
      ],
      image: "/building.avif",
      color: "green",
      stats: { projects: "95+", experience: "15+ years", team: "35+ experts" },
    },
    {
      id: 5,
      title: "Sustainable Building",
      category: "specialized",
      icon: FaHardHat,
      description:
        "Eco-friendly construction with green materials and energy-efficient designs.",
      longDescription:
        "Leading the way in sustainable construction with innovative green building solutions.",
      features: [
        "LEED Certification",
        "Green Materials",
        "Energy Efficiency",
        "Solar Integration",
        "Water Conservation",
        "Waste Reduction",
      ],
      image: "/building.avif",
      color: "blue",
      stats: { projects: "75+", experience: "12+ years", team: "25+ experts" },
    },
    {
      id: 6,
      title: "Renovation & Restoration",
      category: "specialized",
      icon: FaHardHat,
      description:
        "Expert renovation and historical restoration services preserving architectural heritage.",
      longDescription:
        "Breathing new life into existing structures while preserving their character and integrity.",
      features: [
        "Historical Restoration",
        "Building Renovation",
        "Facade Restoration",
        "Interior Remodeling",
        "Structural Repairs",
        "Heritage Conservation",
      ],
      image: "/building.avif",
      color: "green",
      stats: { projects: "150+", experience: "20+ years", team: "30+ experts" },
    },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-125 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/building.avif"
            alt="Our Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-blue-900/90 via-blue-800/85 to-green-900/90"></div>
        </div>

        {/* Animated Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6">
              <FaHardHat className="h-4 w-4 text-green-400 mr-2" />
              <span className="text-sm font-medium text-white">
                Comprehensive Construction Solutions
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-green-400">Services</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              From concept to completion, we deliver excellence across every
              aspect of construction engineering
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-8 text-white">
          <div className="text-center">
            <div className="text-2xl font-bold">500+</div>
            <div className="text-sm text-blue-200">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">20+</div>
            <div className="text-sm text-blue-200">Years</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">200+</div>
            <div className="text-sm text-blue-200">Experts</div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <ServiceCategories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <ServiceProcess />

      {/* Why Choose Us Benefits */}
      <ServiceBenefits />

      {/* Service Areas Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service <span className="text-blue-600">Coverage</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver excellence across the globe with a strong presence in
              key markets
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                region: "North America",
                countries: "USA, Canada, Mexico",
                projects: "200+",
              },
              {
                region: "Europe",
                countries: "UK, Germany, France",
                projects: "150+",
              },
              {
                region: "Asia Pacific",
                countries: "Singapore, India, Japan",
                projects: "120+",
              },
              {
                region: "Middle East",
                countries: "UAE, Saudi Arabia",
                projects: "80+",
              },
            ].map((area, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {area.region}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{area.countries}</p>
                <p className="text-sm text-blue-600 font-semibold">
                  {area.projects} Projects
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <ServiceFAQ />

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
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
            Ready to Start Your <span className="text-green-400">Project?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Get a free consultation and quote from our expert team
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group"
            >
              Get Free Consultation
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
