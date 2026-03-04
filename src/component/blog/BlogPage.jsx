// components/BlogPage.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BlogCard from "./BlogCard";
import BlogSidebar from "./BlogSidebar";
import FeaturedPost from "./FeaturedPost";
import { FaSearch, FaArrowRight } from "react-icons/fa";

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "Sustainable Building Materials: The Future of Construction",
      excerpt:
        "Discover how eco-friendly materials are revolutionizing the construction industry and reducing environmental impact.",
      content: "Full content here...",
      author: "Sarah Johnson",
      authorRole: "Sustainability Expert",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Sustainability",
      image: "/building.avif",
      featured: true,
      comments: 12,
      likes: 45,
    },
    {
      id: 2,
      title: "Innovations in High-Rise Construction Technology",
      excerpt:
        "From smart materials to advanced safety systems, explore the latest innovations shaping skyscraper construction.",
      content: "Full content here...",
      author: "Michael Chen",
      authorRole: "Structural Engineer",
      date: "March 12, 2024",
      readTime: "4 min read",
      category: "Technology",
      image: "/building.avif",
      featured: false,
      comments: 8,
      likes: 32,
    },
    {
      id: 3,
      title: "Safety First: New OSHA Guidelines for 2024",
      excerpt:
        "Stay compliant with our comprehensive guide to the latest OSHA regulations and workplace safety standards.",
      content: "Full content here...",
      author: "David Kim",
      authorRole: "Safety Director",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Safety",
      image: "/building.avif",
      featured: false,
      comments: 15,
      likes: 67,
    },
    {
      id: 4,
      title: "The Rise of Modular Construction in Urban Areas",
      excerpt:
        "How prefabrication and modular building techniques are transforming urban development projects.",
      content: "Full content here...",
      author: "Emily Rodriguez",
      authorRole: "Design Director",
      date: "March 8, 2024",
      readTime: "4 min read",
      category: "Innovation",
      image: "/building.avif",
      featured: false,
      comments: 6,
      likes: 28,
    },
    {
      id: 5,
      title: "Green Building Certification: A Complete Guide",
      excerpt:
        "Everything you need to know about LEED, BREEAM, and other green building certification programs.",
      content: "Full content here...",
      author: "Jennifer Lee",
      authorRole: "Green Building Consultant",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Sustainability",
      image: "/building.avif",
      featured: false,
      comments: 21,
      likes: 89,
    },
    {
      id: 6,
      title: "Construction Project Management Best Practices",
      excerpt:
        "Expert tips and strategies for successful construction project management in 2024.",
      content: "Full content here...",
      author: "Robert Anderson",
      authorRole: "Project Manager",
      date: "March 3, 2024",
      readTime: "5 min read",
      category: "Management",
      image: "/building.avif",
      featured: false,
      comments: 9,
      likes: 41,
    },
  ];

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  // Filter posts based on search and category
  const filteredPosts = regularPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    "all",
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-75 bg-linear-to-r from-blue-900 to-blue-800 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/building.avif"
            alt="Blog"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-green-400">Blog</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Insights, news, and updates from the world of construction
              engineering
            </p>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pr-12 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            />
            <FaSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category === "all" ? "All Posts" : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Blog Posts */}
            <div className="lg:col-span-2 space-y-12">
              {/* Featured Post */}
              {featuredPost &&
                searchTerm === "" &&
                selectedCategory === "all" && (
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <span className="w-1 h-6 bg-blue-600 rounded-full mr-3"></span>
                      Featured Post
                    </h2>
                    <FeaturedPost post={featuredPost} />
                  </div>
                )}

              {/* Regular Posts */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-1 h-6 bg-green-600 rounded-full mr-3"></span>
                  Latest Articles
                </h2>
                {filteredPosts.length > 0 ? (
                  <div className="space-y-8">
                    {filteredPosts.map((post) => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-white rounded-2xl">
                    <p className="text-gray-500">
                      No articles found matching your criteria.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar posts={blogPosts} categories={categories.slice(1)} />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subscribe to Our <span className="text-green-400">Newsletter</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest articles and industry insights delivered to your
            inbox
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2 group">
              Subscribe
              <FaArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
          <p className="text-sm text-blue-200 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </main>
  );
}
