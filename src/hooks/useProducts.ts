import { useEffect, useState } from "react";
import { Product } from "../types/product";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  const saveToLocalStorage = (updatedProducts: Product[]) => {
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const addProduct = (product: Product) => {
    const updatedProducts = [...products, product];
    saveToLocalStorage(updatedProducts);
  };

  const editProduct = (updatedProduct: Product) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    saveToLocalStorage(updatedProducts);
  };

  const deleteProduct = (productId: number) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    saveToLocalStorage(updatedProducts);
  };

  return { products, addProduct, editProduct, deleteProduct };
};
