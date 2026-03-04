// components/ContactPage.jsx
"use client";

// import { useState } from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import MapComponent from "./MapComponent";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-75 bg-linear-to-r from-blue-900 via-blue-800 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 mb-6">
              <FaWhatsapp className="h-4 w-4 text-green-400 mr-2" />
              <span className="text-sm font-medium">
                Available 24/7 on WhatsApp
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let&apos;s <span className="text-green-400">Build</span> Together
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Have a project in mind? We&apos;re just a message away. Reach out
              to us for consultations, inquiries, or collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <ContactInfo />

              {/* WhatsApp Quick Connect */}
              <div className="bg-linear-to-br from-green-600 to-green-700 rounded-2xl p-6 text-white shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <FaWhatsapp className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Quick Connect</h3>
                    <p className="text-green-100">Reply within minutes</p>
                  </div>
                </div>
                <p className="text-green-100 mb-4">
                  Get instant responses on WhatsApp. Our team is available 24/7
                  to assist you.
                </p>
                <Link
                  href="https://wa.me/15551234567?text=Hello%20Paradise%20Construction%2C%20I'm%20interested%20in%20discussing%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-green-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 w-full"
                >
                  <FaWhatsapp className="h-5 w-5" />
                  Chat on WhatsApp
                </Link>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-blue-600"></span>
                  Business Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-semibold text-gray-900">
                      8:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-semibold text-gray-900">
                      9:00 AM - 4:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-semibold text-red-600">Closed</span>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      *Emergency support available 24/7 via WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our <span className="text-blue-600">Headquarters</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Come meet us at our state-of-the-art office. We&apos;d love to
              discuss your project in person.
            </p>
          </div>

          <MapComponent />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-green-600">Questions</span>
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common inquiries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                q: "How quickly can you respond to inquiries?",
                a: "We typically respond within 2-4 hours during business hours. For urgent matters, use our WhatsApp chat for instant responses.",
              },
              {
                q: "Do you offer free consultations?",
                a: "Yes! We offer free initial consultations for all project types. Contact us to schedule a meeting.",
              },
              {
                q: "What information should I provide for a quote?",
                a: "Project type, estimated size, location, and any specific requirements. Our team will guide you through the process.",
              },
              {
                q: "Can you handle international projects?",
                a: "Absolutely! We have experience with projects across multiple countries and continents.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="text-blue-600">Q:</span>
                  {faq.q}
                </h3>
                <p className="text-gray-600 flex items-start gap-2">
                  <span className="text-green-600">A:</span>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Get a free consultation and quote within 24 hours
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group"
            >
              <FaWhatsapp className="h-5 w-5" />
              WhatsApp Us Now
              <FaArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="tel:+15551234567"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300"
            >
              Call Us Directly
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
