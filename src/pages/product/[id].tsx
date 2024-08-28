// pages/products/[id].tsx
import { useRouter } from "next/router";
import Head from "next/head";
import { useProducts } from "../../hooks/useProducts";
import { Product } from "../../types/product";

const ProductDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { products } = useProducts();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <>
      <Head>
        <title>{product.name} | My E-commerce Site</title>
        <meta name="description" content={product.description} />
        <meta name="keywords" content={`${product.name}, ${product.category}, e-commerce`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={`${product.name} | Product Details`} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.imageUrl || '/images/default-image.png'} />
        <meta property="og:url" content={`https://www.example.com/products/${id}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${product.name} | Product Details`} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={product.imageUrl || '/images/default-image.png'} />
      </Head>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover my-4"
        />
        <p>{product.description}</p>
        <p className="text-xl font-bold">${product.price}</p>
      </div>
    </>
  );
};

export default ProductDetailsPage;
