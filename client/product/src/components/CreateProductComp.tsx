import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import ErrorDialog from "./other/ErrorDialog";
import { createAProduct } from "../api/productApi";
import ScrollToTop from "../functions/scrollToTop";

export default function CreateProductComp() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [productFile, setProductFile] = useState<File | null>(null);
  const [fillDialog, setFillDialog] = useState<boolean>(false);
  const [missingFields, setMissingFields] = useState<string[]>([]);

  useEffect(() => {
    ScrollToTop();
  }, [])


  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newMissingFields: string[] = [];

    if (name.length <= 2) newMissingFields.push("name");
    if (!description) newMissingFields.push("description");
    if (!price) newMissingFields.push("price");
    if (!productFile) newMissingFields.push("product file");

    if (newMissingFields.length > 0) {
      setMissingFields(newMissingFields);
      setFillDialog(true);
    } else {
      const create = async () => {
        try {
          const formData = new FormData();
          formData.append("name", name);
          formData.append("description", description);
          formData.append("price", price);
          if (productFile) {
            formData.append("specifications", productFile);
          }

          const response = await createAProduct(formData); 
          console.log("Product created:", response);

        } catch (error) {
          console.error("Error creating product:", error);
        }
      };

      create();

      setName("");
      setDescription("");
      setPrice("");
      setProductFile(null);
      setFillDialog(false);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProductFile(e.target.files[0]);
    }
  };

  return (
    <div className="h-screen flex justify-center select-none">
      <div className="max-w-md my-10 p-4 bg-white rounded shadow-md mx-3 w-full sm:w-3/4 md:w-2/4">
        <h2 className="text-2xl font-bold mb-6">Create a New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name <span className="text-red-600">*</span></label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Description <span className="text-red-600">*</span></label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border rounded resize-none"
            />
          </div>
          <div>
            <label className="block text-gray-700">Price <span className="text-red-600">*</span></label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Product File <span className="text-red-600">*</span></label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          {fillDialog && (
            <ErrorDialog missingFields={missingFields} />
          )}
          <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">
            Create Product
          </button>
        </form>
      </div>
    </div>
  );
}
