import { useRouter } from "next/router";
import ProductForm from "../components/ProductForm";
import { Product } from "../types/product";

const AddProductPage = () => {
  const router = useRouter();

  const handleSave = (newProduct: Product) => {
    router.push("/");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add Product</h1>
      <ProductForm onSave={handleSave} />
    </div>
  );
};

export default AddProductPage;
