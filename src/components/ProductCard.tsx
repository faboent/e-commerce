import Link from "next/link";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
  onDelete: () => void;
}

const ProductCard = ({ product, onDelete }: ProductCardProps) => {
  return (
    <div className="border p-4 rounded shadow-sm">
      {product.imageUrl && (
        <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4" />
      )}
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-600">{product.description}</p>
      <p className="text-lg font-semibold">N{product.price}</p>
      <div className="flex justify-between mt-4">
        <Link href={`/edit/${product.id}`} className="bg-blue-500 text-white px-4 py-2 rounded">
          Edit
        </Link>
        <Link href={`/product/${product.id}`} className="bg-green-500 text-white px-4 py-2 rounded">
          View
        </Link>
        <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
