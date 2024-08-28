import { useState } from "react";
import Head from "next/head";
import ProductCard from "../components/ProductCard";
import ProductFilter from "../components/ProductFilter";
import { useProducts } from "../hooks/useProducts";
import Link from "next/link";

const IndexPage = () => {
  const { products, deleteProduct } = useProducts();
  const [filter, setFilter] = useState("");

  const filteredProducts = filter
    ? products.filter((product) => product.category === filter)
    : products;

  return (
    <>
      <Head>
        <title>Product Listing | My E-commerce Site</title>
        <meta
          name="description"
          content="Browse our wide selection of products."
        />
        <meta
          name="keywords"
          content="ecommerce, products, buy online, shopping"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Product Listing | My E-commerce Site"
        />
        <meta
          property="og:description"
          content="Browse our wide selection of products."
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:url" content="https://www.example.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between mb-4">
          <ProductFilter
            categories={[...new Set(products.map((p) => p.category))]}
            setFilter={setFilter}
          />

          <Link
            href="/add"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Add Product
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onDelete={() => deleteProduct(product.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default IndexPage;
