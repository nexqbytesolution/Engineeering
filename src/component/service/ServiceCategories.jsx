// components/services/ServiceCategories.jsx
export default function ServiceCategories({
  selectedCategory,
  setSelectedCategory,
}) {
  const categories = [
    { id: "all", name: "All Services", color: "blue" },
    { id: "residential", name: "Residential", color: "green" },
    { id: "commercial", name: "Commercial", color: "blue" },
    { id: "infrastructure", name: "Infrastructure", color: "green" },
    { id: "industrial", name: "Industrial", color: "blue" },
    { id: "specialized", name: "Specialized", color: "green" },
  ];

  return (
    <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? category.color === "blue"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-green-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
