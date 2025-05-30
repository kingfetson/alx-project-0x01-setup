// components/common/UserModal.tsx

import React, { useState } from "react";
import { UserModalProps, UserData } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onAddUser }) => {
  const [formData, setFormData] = useState<UserData>({
    id: Date.now(),
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Update nested address and company
    if (name.startsWith("address.")) {
      const field = name.split(".")[1];
      setFormData({
        ...formData,
        address: { ...formData.address, [field]: value },
      });
    } else if (name.startsWith("company.")) {
      const field = name.split(".")[1];
      setFormData({
        ...formData,
        company: { ...formData.company, [field]: value },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = () => {
    onAddUser(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-lg space-y-4">
        <h2 className="text-xl font-bold">Add New User</h2>
        <input name="name" placeholder="Name" onChange={handleChange} className="w-full border p-2" />
        <input name="username" placeholder="Username" onChange={handleChange} className="w-full border p-2" />
        <input name="email" placeholder="Email" onChange={handleChange} className="w-full border p-2" />
        <input name="phone" placeholder="Phone" onChange={handleChange} className="w-full border p-2" />
        <input name="website" placeholder="Website" onChange={handleChange} className="w-full border p-2" />
        <input name="address.street" placeholder="Street" onChange={handleChange} className="w-full border p-2" />
        <input name="address.city" placeholder="City" onChange={handleChange} className="w-full border p-2" />
        <input name="company.name" placeholder="Company Name" onChange={handleChange} className="w-full border p-2" />

        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-700 text-white rounded">Add</button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
