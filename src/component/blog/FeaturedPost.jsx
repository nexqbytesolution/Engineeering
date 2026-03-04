// components/blog/FeaturedPost.jsx
import Image from "next/image";
import Link from "next/link";
import { FaUser, FaCalendar, FaClock, FaArrowRight } from "react-icons/fa";

export default function FeaturedPost({ post }) {
  return (
    <article className="bg-white rounded-2xl shadow-xl overflow-hidden group">
      <div className="grid lg:grid-cols-2">
        {/* Image */}
        <div className="relative h-64 lg:h-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
            Featured
          </div>
        </div>

        {/* Content */}
        <div className="p-8 lg:p-10">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center gap-1">
              <FaUser className="h-3 w-3" />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <FaCalendar className="h-3 w-3" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <FaClock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>

          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {post.title}
          </h3>

          <p className="text-gray-600 mb-6 text-lg">{post.excerpt}</p>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-900">{post.author}</p>
              <p className="text-sm text-gray-500">{post.authorRole}</p>
            </div>

            <Link
              href={`/blog/${post.id}`}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center gap-2 group"
            >
              Read Article
              <FaArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
