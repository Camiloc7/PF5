"use client";
import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };
  

  const handleUpload = async () => {
    if (!file) {
      setError("Por favor, selecciona una imagen");
      return;
    }
    
    const formData = new FormData();
    formData.append("file", file);
    
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`${API_URL}/upload/productos`, {
        method: "POST",
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error("Error al subir la imagen");
      }
      
      const data = await response.json();
      setImageUrl(data.secure_url);
    } catch (err) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96 text-center">
        <h2 className="text-xl font-bold mb-4">Subir Imagen</h2>
        <input type="file" accept="image/*" onChange={handleFileChange} className="mb-4" />
        <button
          onClick={handleUpload}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
          disabled={loading}
        >
          {loading ? "Subiendo..." : "Subir Imagen"}
        </button>
        {error && <p className="text-red-500 mt-2">{error}</p>}
        {imageUrl && (
          <div className="mt-4">
            <p className="text-green-500">Imagen subida con éxito:</p>
            <img src={imageUrl} alt="Imagen subida" className="mt-2 w-full h-auto rounded-lg" />
          </div>
        )}
      </div>
    </div>
  );
}
