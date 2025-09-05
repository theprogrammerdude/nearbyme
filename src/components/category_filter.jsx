const CategoryFilter = ({ categories, selectedCategories, onToggle }) => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-white shadow-lg rounded-lg p-4 z-[9999]">
      <h3 className="text-sm font-semibold mb-2">Select Categories</h3>
      <div className="grid grid-cols-2 gap-2">
        {categories.map((cat) => (
          <label
            key={cat.key}
            className="flex items-center gap-2 text-sm cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat.key)}
              onChange={() => onToggle(cat.key)}
              className="w-4 h-4 accent-blue-600"
            />
            <span>{cat.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
