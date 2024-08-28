import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductForm from "../../components/ProductForm";
import { useProducts } from "../../hooks/useProducts";
import { Product } from "../../types/product";

const EditProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { products, editProduct } = useProducts();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const foundProduct = products.find((p) => p.id === Number(id));
      if (foundProduct) setProduct(foundProduct);
    }
  }, [id, products]);

  if (!product) return <p>Product not found</p>;

  const handleSave = (updatedProduct: Product) => {
    editProduct(updatedProduct);
    router.push("/");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Product</h1>
      <ProductForm product={product} onSave={handleSave} />
    </div>
  );
};

export default EditProductPage;
