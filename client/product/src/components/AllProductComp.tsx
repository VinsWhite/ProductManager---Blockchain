import SingleProductComp from "./SingleProductComp";
import { getAllProducts } from "../api/productApi";
import { useEffect, useState } from "react";
import Product from "../interface/productInterface";
import ScrollToTop from "../functions/scrollToTop";

export default function AllProductComp() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // set initial loading to true

  useEffect(() => {
    ScrollToTop();
    
    const getProducts = async () => {
      try {
        const response = await getAllProducts();
        setProducts(response.products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); 
      }
    };
    getProducts();
  }, []);

  return (
    <div className="p-4 h-screen select-none">
      <h2 className="text-3xl my-3">All products:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
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

        {!loading && products.length > 0 && (
          products.map((product) => (
            <SingleProductComp key={product.id} product={product} />
          ))
        )}

        {!loading && products.length === 0 && (
          <div>
            <p className="bg-gray-700 rounded-md text-white text-center p-1">
              There's no product! Create your first product
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
