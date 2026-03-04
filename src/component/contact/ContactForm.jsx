// components/contact/ContactForm.jsx
"use client";

import { useForm } from "react-hook-form";
import { useState } from "react"; // Add this missing import

import {
  FaWhatsapp,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaDollarSign,
  FaComment,
  FaCheckCircle,
  FaExclamationCircle,
} from "react-icons/fa";
import Link from "next/link";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      message: "",
    },
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  const projectTypes = [
    "Residential Construction",
    "Commercial Building",
    "Infrastructure Project",
    "Renovation/Remodeling",
    "Industrial Facility",
    "Consultation Only",
  ];

  const budgetRanges = [
    "Under $100k",
    "$100k - $500k",
    "$500k - $1M",
    "$1M - $5M",
    "$5M - $10M",
    "Over $10M",
  ];

  const onSubmit = (data) => {
    // Format message for WhatsApp
    const whatsappMessage = `*New Project Inquiry from Paradise Construction Website*%0A%0A
*Name:* ${data.name}%0A
*Email:* ${data.email}%0A
*Phone:* ${data.phone}%0A
*Project Type:* ${data.projectType}%0A
*Budget Range:* ${data.budget}%0A
*Message:* ${data.message}`;

    // WhatsApp number (replace with your actual number)
    const whatsappNumber = "15551234567";

    // Redirect to WhatsApp
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank",
    );

    setSubmitStatus("success");

    // Reset form after successful submission
    setTimeout(() => {
      reset();
      setSubmitStatus(null);
    }, 3000);
  };

  const onError = (errors) => {
    console.log("Form errors:", errors);
    setSubmitStatus("error");
    setTimeout(() => setSubmitStatus(null), 3000);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Send Us a <span className="text-blue-600">Message</span>
        </h2>
        <p className="text-gray-600">
          Fill out the form below and we&apos;ll get back to you within 24 hours
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser
                  className={`h-5 w-5 ${errors.name ? "text-red-400" : "text-gray-400"}`}
                />
              </div>
              <input
                type="text"
                id="name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Name should only contain letters",
                  },
                })}
                className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-300 ${
                  errors.name ? "border-red-500 bg-red-50" : "border-gray-300"
                }`}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <FaExclamationCircle className="h-3 w-3" />
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope
                  className={`h-5 w-5 ${errors.email ? "text-red-400" : "text-gray-400"}`}
                />
              </div>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-300 ${
                  errors.email ? "border-red-500 bg-red-50" : "border-gray-300"
                }`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <FaExclamationCircle className="h-3 w-3" />
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaPhone
                className={`h-5 w-5 ${errors.phone ? "text-red-400" : "text-gray-400"}`}
              />
            </div>
            <input
              type="tel"
              id="phone"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value:
                    /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,5}[-\s\.]?[0-9]{1,5}$/,
                  message: "Invalid phone number format",
                },
                minLength: {
                  value: 10,
                  message: "Phone number must be at least 10 digits",
                },
              })}
              className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-300 ${
                errors.phone ? "border-red-500 bg-red-50" : "border-gray-300"
              }`}
              placeholder="+1 (555) 123-4567"
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <FaExclamationCircle className="h-3 w-3" />
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>

        {/* Project Type and Budget Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label
              htmlFor="projectType"
              className="block text-sm font-medium text-gray-700"
            >
              Project Type <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaBuilding
                  className={`h-5 w-5 ${errors.projectType ? "text-red-400" : "text-gray-400"}`}
                />
              </div>
              <select
                id="projectType"
                {...register("projectType", {
                  required: "Please select a project type",
                })}
                className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-300 appearance-none bg-white ${
                  errors.projectType
                    ? "border-red-500 bg-red-50"
                    : "border-gray-300"
                }`}
              >
                <option value="">Select project type</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {errors.projectType && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <FaExclamationCircle className="h-3 w-3" />
                  {errors.projectType.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="budget"
              className="block text-sm font-medium text-gray-700"
            >
              Budget Range <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaDollarSign
                  className={`h-5 w-5 ${errors.budget ? "text-red-400" : "text-gray-400"}`}
                />
              </div>
              <select
                id="budget"
                {...register("budget", {
                  required: "Please select a budget range",
                })}
                className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-300 appearance-none bg-white ${
                  errors.budget ? "border-red-500 bg-red-50" : "border-gray-300"
                }`}
              >
                <option value="">Select budget range</option>
                {budgetRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
              {errors.budget && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <FaExclamationCircle className="h-3 w-3" />
                  {errors.budget.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Your Message <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute top-3 left-0 pl-3 pointer-events-none">
              <FaComment
                className={`h-5 w-5 ${errors.message ? "text-red-400" : "text-gray-400"}`}
              />
            </div>
            <textarea
              id="message"
              rows="5"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
                maxLength: {
                  value: 500,
                  message: "Message must not exceed 500 characters",
                },
              })}
              className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-300 resize-none ${
                errors.message ? "border-red-500 bg-red-50" : "border-gray-300"
              }`}
              placeholder="Tell us about your project..."
            ></textarea>
            {errors.message && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <FaExclamationCircle className="h-3 w-3" />
                {errors.message.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-linear-to-r from-green-600 to-green-700 text-white py-4 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span>Sending...</span>
          ) : (
            <>
              <FaWhatsapp className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Send via WhatsApp
            </>
          )}
        </button>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2 animate-pulse">
            <FaCheckCircle className="h-5 w-5 text-green-600" />
            <span>
              Thank you! You&apos;ll be redirected to WhatsApp to complete your
              message.
            </span>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
            <FaExclamationCircle className="h-5 w-5 text-red-600" />
            <span>Please fix the errors in the form and try again.</span>
          </div>
        )}

        {/* Form Summary */}
        {Object.keys(errors).length > 0 && (
          <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg">
            <p className="text-sm font-medium mb-1">
              Please correct the following:
            </p>
            <ul className="text-xs list-disc pl-4">
              {Object.values(errors).map((error, index) => (
                <li key={index}>{error.message}</li>
              ))}
            </ul>
          </div>
        )}

        <p className="text-xs text-gray-500 text-center mt-4">
          By submitting this form, you agree to our{" "}
          <Link href="/privacy" className="text-blue-600 hover:underline">
            Privacy Policy
          </Link>{" "}
          and consent to being contacted via WhatsApp.
        </p>
      </form>
    </div>
  );
}
