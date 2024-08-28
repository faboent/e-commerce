import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { Product } from "../types/product";

const ProductForm = ({ product, onSave }: { product?: Product; onSave?: (product: Product) => void }) => {
  const { addProduct, editProduct } = useProducts();
  const [formState, setFormState] = useState<Product>({
    id: product?.id || Date.now(),
    name: product?.name || "",
    description: product?.description || "",
    price: product?.price || 0,
    category: product?.category || "",
    imageUrl: product?.imageUrl || "", // This will now store the base64 image data
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormState({ ...formState, imageUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (product) {
      editProduct(formState);
    } else {
      addProduct(formState);
    }
    if (onSave) onSave(formState);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        value={formState.name}
        onChange={handleChange}
        placeholder="Name"
        className="border p-2 w-full"
      />
      <textarea
        name="description"
        value={formState.description}
        onChange={handleChange}
        placeholder="Description"
        className="border p-2 w-full"
      />
      <input
        name="price"
        value={formState.price}
        onChange={handleChange}
        placeholder="Price"
        className="border p-2 w-full"
      />
      <input
        name="category"
        value={formState.category}
        onChange={handleChange}
        placeholder="Category"
        className="border p-2 w-full"
      />
      <input
        type="file"
        onChange={handleFileChange}
        className="border p-2 w-full"
        accept="image/*"
      />
      {formState.imageUrl && (
        <img src={formState.imageUrl} alt="Product Image" className="w-32 h-32 object-cover mt-4" />
      )}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add product
      </button>
    </form>
  );
};

export default ProductForm;
