import SingleProductComp from "./SingleProductComp";
import { getAllProducts } from "../api/productApi";
import { useEffect, useState } from "react";
import Product from "../interface/productInterface";

export default function AllProductComp() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.products);
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    };
    getProducts();
  }, []);

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 h-screen">
      {loading && (
        <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto h-40">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {products.map(product => (
        <SingleProductComp key={product.id} product={product} />
      ))}
    </div>
  );
}