// components/services/ServiceFAQ.jsx
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
export default function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of construction projects do you handle?",
      answer:
        "We handle a wide range of projects including residential, commercial, infrastructure, industrial, and specialized construction. From custom homes to large-scale infrastructure projects, our team has the expertise to deliver excellence across all sectors.",
    },
    {
      question: "How do I get a quote for my project?",
      answer:
        "Simply contact us through our website, call us, or visit our office. We'll schedule a consultation to understand your requirements and provide a detailed, no-obligation quote within 24-48 hours.",
    },
    {
      question: "What is your project timeline typically?",
      answer:
        "Timelines vary based on project scope and complexity. During our initial consultation, we'll provide a realistic timeline based on your specific requirements, and we pride ourselves on delivering on schedule.",
    },
    {
      question: "Do you handle all necessary permits and approvals?",
      answer:
        "Yes, we manage all required permits, approvals, and compliance with local regulations. Our team ensures your project meets all legal and safety requirements.",
    },
    {
      question: "What warranties do you offer?",
      answer:
        "We offer comprehensive warranties on all our work, including structural warranties, material guarantees, and post-construction support. Specific warranty details are provided based on project scope.",
    },
    {
      question: "Do you work with architects and designers?",
      answer:
        "Absolutely! We collaborate with leading architects and designers, or we can work with your preferred professionals. Our in-house team also provides design services if needed.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about our services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <FaMinus className="h-4 w-4 text-blue-600" />
                ) : (
                  <FaPlus className="h-4 w-4 text-green-600" />
                )}
              </button>

              {openIndex === index && (
                <div className="p-6 pt-0 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <Link
            href="/contact"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            Contact our support team
            <FaArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
