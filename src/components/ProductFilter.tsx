const ProductFilter = ({ categories, setFilter }: { categories: string[]; setFilter: (filter: string) => void }) => {
    return (
      <div className="mb-4">
        <label className="block mb-2 text-lg font-bold">Filter by Category:</label>
        <select
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default ProductFilter;
  