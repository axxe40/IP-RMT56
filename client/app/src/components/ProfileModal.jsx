import { useEffect } from "react";

export default function ProfileModal({ isOpen, onClose }) {
  useEffect(() => {
    // Menambahkan atau menghapus kelas `overflow-hidden` pada body
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    // Membersihkan efek saat komponen di-unmount
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
  <div className="bg-white w-full max-w-lg px-6 py-4 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
    <h2 className="text-xl font-bold text-gray-800 mb-4">Profile</h2>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        Name
      </label>
      <p className="text-gray-800 bg-slate-100 rounded-md p-2">John Doe</p>
    </div>
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        Email
      </label>
      <p className="text-gray-800 bg-slate-100 rounded-md p-2">
        johndoe@example.com
      </p>
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">Preference</h3>
    <div className="mb-4">
      <label
        htmlFor="brand"
        className="block text-sm font-medium text-gray-700"
      >
        Brand
      </label>
      <select
        id="brand"
        className="w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="">Select Brand</option>
        <option value="ibanez">Ibanez</option>
        <option value="gibson">Gibson</option>
        <option value="squier">Squier</option>
        <option value="fender">Fender</option>
        <option value="rickenbacker">Rickenbacker</option>
        <option value="taylor">Taylor Guitars</option>
        <option value="prs">PRS Guitars</option>
      </select>
    </div>
    <div className="mb-4">
      <label
        htmlFor="type"
        className="block text-sm font-medium text-gray-700"
      >
        Type
      </label>
      <select
        id="type"
        className="w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="">Select Type</option>
        <option value="acoustic">Acoustic</option>
        <option value="electric">Electric</option>
        <option value="bass">Bass</option>
      </select>
    </div>
    <div className="mb-4">
      <label
        htmlFor="min-price"
        className="block text-sm font-medium text-gray-700"
      >
        Min Price
      </label>
      <input
        type="number"
        id="min-price"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div className="mb-4">
      <label
        htmlFor="max-price"
        className="block text-sm font-medium text-gray-700"
      >
        Max Price
      </label>
      <input
        type="number"
        id="max-price"
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
    <div className="flex justify-end gap-4">
      <button
        onClick={onClose}
        className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
      >
        Cancel
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Update
      </button>
    </div>
  </div>
</div>

  );
}
