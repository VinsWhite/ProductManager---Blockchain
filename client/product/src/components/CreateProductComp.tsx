import { useState, ChangeEvent, FormEvent } from "react";
import ErrorDialog from "./other/ErrorDialog";

export default function CreateProductComp() {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [productFile, setProductFile] = useState<File | null>(null);
  const [fillDialog, setFillDialog] = useState<boolean>(false);
  const [missingFields, setMissingFields] = useState<string[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newMissingFields: string[] = [];

    if (!name) newMissingFields.push("Name");
    if (!description) newMissingFields.push("Description");
    if (!price) newMissingFields.push("Price");
    if (!productFile) newMissingFields.push("Product File");

    if (newMissingFields.length > 0) {
      setMissingFields(newMissingFields);
      setFillDialog(true);
    } else {
      console.log("Name:", name);
      console.log("Description:", description);
      console.log("Price:", price);
      console.log("Product File:", productFile);

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
    <div className="max-w-md mx-auto my-10 p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">Create a New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-gray-700">Product File</label>
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
  );
}
