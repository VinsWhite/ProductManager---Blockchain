interface ProductProps {
  product: {
    name: string;
    description: string;
    price: number;
    ipfsHash: string;
  };
}

export default function SingleProductComp({ product }: ProductProps) {
  return (
    <div className="relative p-2 border border-1 border-gray-600 rounded-lg shadow-md h-40">
      <h2 className="text-xl font-semibold uppercase">{product.name}</h2>
      <p>{product.description}</p>
      <p className="shadow-md absolute -top-2 -right-2 p-[0.2em] rounded-md inline-block text-white bg-blue-800">
        ${product.price.toFixed(2)}
      </p>
      <p className="border-t-2 mt-3 break-words text-sm pt-3"><span className="font-semibold">IPFS Hash:</span> {product.ipfsHash}</p>
    </div>
  );
}
