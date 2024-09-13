import { FaRegCopy } from "react-icons/fa";
import { useState } from "react";

interface ProductProps {
  product: {
    name: string;
    description: string;
    price: number;
    ipfsHash: string;
  };
}

export default function SingleProductComp({ product }: ProductProps) {
  const [copySuccess, setCopySuccess] = useState<string>("");

  const handleCopy = () => {
    navigator.clipboard.writeText(product.ipfsHash)
      .then(() => {
        setCopySuccess("Copied!");
        setTimeout(() => setCopySuccess(""), 2000); // clear message after 2 seconds
      })
      .catch(err => {
        setCopySuccess("Failed to copy!");
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="relative p-2 border border-1 border-gray-600 rounded-lg shadow-md h-40">
      <h2 className="text-xl font-semibold uppercase">{product.name}</h2>
      <p>{product.description}</p>
      <p className="shadow-md absolute -top-2 -right-2 p-[0.2em] rounded-md inline-block text-white bg-blue-800">
        ${product.price.toFixed(2)}
      </p>
      <p className="border-t-2 mt-3 break-words text-sm pt-3 relative">
        <span className="font-semibold flex justify-start items-center gap-1">
          <FaRegCopy 
            className="cursor-pointer hover:text-gray-600" 
            onClick={handleCopy} 
          />
          IPFS Hash:
        </span>
        {product.ipfsHash}
        {copySuccess && (
          <span className="ml-2 text-green-500 bg-white rounded-sm p-1 border border-1 border-gray-300 absolute -bottom-5 left-0">{copySuccess}</span>
        )}
      </p>
    </div>
  );
}
