"use client";
import { useState } from "react";

interface StuntingFormData {
  gender: string;
  age_months: number;
  height_cm: number;
  weight_kg: number;
}

interface StuntingResponse {
  prediction: string;
}

export default function StuntingForm() {
  const [formData, setFormData] = useState<StuntingFormData>({
    gender: "Laki-laki",
    age_months: 0,
    height_cm: 0,
    weight_kg: 0,
  });
  const [result, setResult] = useState<
    StuntingResponse | { error: string } | null
  >(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]:
        id === "gender"
          ? value
          : value === ""
          ? 0
          : id === "age_months"
          ? parseInt(value)
          : parseFloat(value),
    });
  };

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(`${API_URL}/predict/stunting`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`API responded with status: ${res.status}`);
      }

      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error("API request failed:", error);

      // More user-friendly error message
      if (
        (error instanceof Error && error.message.includes("Failed to fetch")) ||
        (error instanceof Error && error.message.includes("Connection refused"))
      ) {
        setResult({
          error:
            "Tidak dapat terhubung ke server. Pastikan server berjalan di port 8000.",
        });
      } else {
        setResult({ error: `Terjadi kesalahan: ${String(error)}` });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
          <div className="flex-1 mt-10 md:mt-0">
            {/* <Image
              src="https://images.unsplash.com/photo-1627491507220-56e64a9bfa5c"
              alt="Ilustrasi stunting"
              className="rounded-lg shadow-lg"
              width={500}
              height={500}
            /> */}
          </div>
        </div>
        <div className="max-w-lg w-full bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-900">
            Pemeriksaan Stunting
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Gender */}
            <div>
              <label htmlFor="gender" className="block font-medium mb-1">
                Gender
              </label>
              <select
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-3 focus:border-purple-500 focus:outline-none"
              >
                <option value="Laki-laki">Laki-laki</option>
                <option value="Perempuan">Perempuan</option>
              </select>
            </div>

            {/* Age */}
            <div>
              <label htmlFor="age_months" className="block font-medium mb-1">
                Usia (bulan)
              </label>
              <input
                type="number"
                id="age_months"
                value={formData.age_months.toString()} // Convert to string
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-3 focus:border-purple-500 focus:outline-none"
                required
              />
            </div>

            {/* Height */}
            <div>
              <label htmlFor="height_cm" className="block font-medium mb-1">
                Tinggi Badan (cm)
              </label>
              <input
                type="number"
                step="0.1"
                id="height_cm"
                value={formData.height_cm.toString()} // Convert to string
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-3 focus:border-purple-500 focus:outline-none"
                required
              />
            </div>

            {/* Weight */}
            <div>
              <label htmlFor="weight_kg" className="block font-medium mb-1">
                Berat Badan (kg)
              </label>
              <input
                type="number"
                step="0.1"
                id="weight_kg"
                value={formData.weight_kg.toString()} // Convert to string
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-3 focus:border-purple-500 focus:outline-none"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition"
              disabled={loading}
            >
              {loading ? "Mengirim..." : "Mulai Pemeriksaan"}
            </button>
          </form>

          {/* Result */}
          <div className="text-xl font-bold text-center my-6 text-gray-900">
            {result && (
              <div className="mt-6 p-4 bg-gray-50 rounded-xl overflow-x-auto">
                {result && "prediction" in result ? (
                  <div className="text-center">
                    <span className="text-lg font-medium">
                      Hasil Prediksi:{" "}
                    </span>
                    <span
                      className={`text-xl font-bold ${
                        result.prediction === "Severely Stunted"
                          ? "text-red-600"
                          : result.prediction === "Stunted"
                          ? "text-orange-500"
                          : result.prediction === "Normal"
                          ? "text-blue-600"
                          : result.prediction === "tall"
                          ? "text-green-600"
                          : "text-green-600"
                      }`}
                    >
                      {result.prediction}
                    </span>
                  </div>
                ) : (
                  <div className="text-red-500">
                    {(result as { error: string }).error}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
