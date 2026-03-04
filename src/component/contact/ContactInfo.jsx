// components/contact/ContactInfo.jsx
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

export default function ContactInfo() {
  const contactDetails = [
    {
      icon: HiOutlineLocationMarker,
      title: "Visit Us",
      details: [
        "123 Construction Avenue",
        "Building District",
        "New York, NY 10001",
        "United States",
      ],
      color: "blue",
      action: "Get Directions",
      link: "https://maps.google.com/?q=123+Construction+Avenue+New+York",
    },
    {
      icon: HiOutlinePhone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
      color: "green",
      action: "Call Now",
      link: "tel:+15551234567",
    },
    {
      icon: HiOutlineMail,
      title: "Email Us",
      details: ["info@paradiseland.com", "projects@paradiseland.com"],
      color: "blue",
      action: "Send Email",
      link: "mailto:info@paradiseland.com",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Main Contact Cards */}
      {contactDetails.map((item, index) => (
        <div
          key={index}
          className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 ${
            item.color === "blue" ? "border-blue-600" : "border-green-600"
          }`}
        >
          <div className="flex items-start gap-4">
            <div
              className={`p-3 rounded-xl bg-${item.color}-100 text-${item.color}-600`}
            >
              <item.icon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              {item.details.map((detail, i) => (
                <p key={i} className="text-gray-600 text-sm">
                  {detail}
                </p>
              ))}
              <Link
                href={item.link}
                className={`inline-flex items-center mt-3 text-sm font-medium text-${item.color}-600 hover:text-${item.color}-700 group`}
                target={item.title === "Visit Us" ? "_blank" : undefined}
              >
                {item.action}
                <svg
                  className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Social Media Links */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Connect With Us
        </h3>
        <div className="flex flex-wrap gap-3">
          {[
            {
              icon: FaFacebookF,
              href: "#",
              bg: "bg-blue-600",
              hover: "hover:bg-blue-700",
              label: "Facebook",
            },
            {
              icon: FaTwitter,
              href: "#",
              bg: "bg-sky-500",
              hover: "hover:bg-sky-600",
              label: "Twitter",
            },
            {
              icon: FaLinkedinIn,
              href: "#",
              bg: "bg-blue-700",
              hover: "hover:bg-blue-800",
              label: "LinkedIn",
            },
            {
              icon: FaInstagram,
              href: "#",
              bg: "bg-pink-600",
              hover: "hover:bg-pink-700",
              label: "Instagram",
            },
            {
              icon: FaYoutube,
              href: "#",
              bg: "bg-red-600",
              hover: "hover:bg-red-700",
              label: "YouTube",
            },
          ].map((social, index) => (
            <Link
              key={index}
              href={social.href}
              className={`${social.bg} ${social.hover} text-white p-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
