import { useState, useEffect } from "react";
import LoadingButton from "./LoadingButton";
function ProductCard() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setTimeout(() => {
          setProducts(data);
          setIsLoading(false);
        }, 2000);
      } catch (error) {
        console.error("Error:", error);
        isLoading(true);
      }
    };

    fetchProducts();
  }, []);

  console.log(products);

  return (
    <div>
      {isLoading ? (
        <LoadingButton />
      ) : (
        <div className="grid grid-cols-4 gap-6 p-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="p-4 border rounded-lg shadow-md hover:scale-105 duration-300"
            >
              <h1 className="text-xl font-bold mb-2 text-center">
                {product.title}
              </h1>
              <img
                className="w-full h-44 object-cover m-auto"
                src={product.image}
                alt={product.title}
              />
              <p className="text-lg text-gray-700 text-center">
                ${product.price}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductCard;
