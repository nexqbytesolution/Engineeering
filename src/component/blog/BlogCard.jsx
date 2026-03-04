// components/blog/BlogCard.jsx
import Image from "next/image";
import Link from "next/link";
import {
  FaUser,
  FaCalendar,
  FaClock,
  FaComment,
  FaHeart,
} from "react-icons/fa";

export default function BlogCard({ post }) {
  return (
    <article className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Image */}
        <div className="relative h-48 md:h-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {post.category}
          </div>
        </div>

        {/* Content */}
        <div className="md:col-span-2 p-6">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
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

          <Link href={`/blog/${post.id}`}>
            <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
              {post.title}
            </h3>
          </Link>

          <p className="text-gray-600 mb-4">{post.excerpt}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <FaComment className="h-4 w-4" />
                {post.comments} comments
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-500">
                <FaHeart className="h-4 w-4" />
                {post.likes} likes
              </span>
            </div>

            <Link
              href={`/blog/${post.id}`}
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 group"
            >
              Read More
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
