// components/blog/BlogSidebar.jsx
import Link from "next/link";
import Image from "next/image";
import { FaSearch, FaTag, FaArrowRight } from "react-icons/fa";

export default function BlogSidebar({ posts, categories }) {
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="space-y-8">
      {/* About Card */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-blue-600 rounded-full"></span>
          About Our Blog
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Welcome to the Paradise Construction blog, where we share insights,
          expertise, and updates from the world of construction engineering.
          Stay informed with our latest articles.
        </p>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-green-600 rounded-full"></span>
          Categories
        </h3>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                href={`/blog/category/${category.toLowerCase()}`}
                className="flex items-center justify-between text-gray-600 hover:text-blue-600 transition-colors group"
              >
                <span className="flex items-center gap-2">
                  <FaTag className="h-3 w-3" />
                  {category}
                </span>
                <span className="text-sm text-gray-400 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-blue-600 rounded-full"></span>
          Recent Posts
        </h3>
        <div className="space-y-4">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="flex gap-3 group"
            >
              <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{post.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-green-600 rounded-full"></span>
          Popular Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Construction",
            "Sustainability",
            "Safety",
            "Innovation",
            "Design",
            "Engineering",
            "Green Building",
            "Technology",
          ].map((tag, index) => (
            <Link
              key={index}
              href={`/blog/tag/${tag.toLowerCase()}`}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-blue-600 hover:text-white transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-linear-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
        <h3 className="text-lg font-bold mb-2">Newsletter</h3>
        <p className="text-sm text-blue-100 mb-4">
          Get the latest articles directly in your inbox
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 text-sm"
          />
          <button className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 text-sm">
            Subscribe
            <FaArrowRight className="h-3 w-3" />
          </button>
        </form>
      </div>
    </div>
  );
}
