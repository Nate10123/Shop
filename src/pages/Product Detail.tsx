// pages/product/[id].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      fetchProductData(id);
    }
  }, [id]);

  const fetchProductData = async (id) => {
    // Replace with your Printful product API endpoint
    const res = await fetch(`/api/products/${id}`);
    const data = await res.json();
    setProduct(data);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button
        className="snipcart-add-item"
        data-item-id={product.id}
        data-item-name={product.name}
        data-item-price={product.price}
        data-item-url={`/product/${product.id}`}
        data-item-description={product.description}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductDetailPage;
