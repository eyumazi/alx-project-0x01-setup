import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const defaultUser: UserData = {
  id: 0,
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: "",
    },
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: "",
  },
};

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>(defaultUser);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name.startsWith("address.")) {
      const key = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: { ...prev.address, [key]: value },
      }));
    } else if (name.startsWith("geo.")) {
      const key = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          geo: { ...prev.address.geo, [key]: value },
        },
      }));
    } else if (name.startsWith("company.")) {
      const key = name.split(".")[1];
      setUser((prev) => ({
        ...prev,
        company: { ...prev.company, [key]: value },
      }));
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Name"
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              placeholder="Username"
              className="border p-2 rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="border p-2 rounded"
              required
            />
            <input
              type="text"
              name="website"
              value={user.website}
              onChange={handleChange}
              placeholder="Website"
              className="border p-2 rounded"
            />
            <input
              type="number"
              name="id"
              value={user.id}
              onChange={handleChange}
              placeholder="ID"
              className="border p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Address</h3>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                name="address.street"
                value={user.address.street}
                onChange={handleChange}
                placeholder="Street"
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="address.suite"
                value={user.address.suite}
                onChange={handleChange}
                placeholder="Suite"
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="address.city"
                value={user.address.city}
                onChange={handleChange}
                placeholder="City"
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="address.zipcode"
                value={user.address.zipcode}
                onChange={handleChange}
                placeholder="Zipcode"
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="geo.lat"
                value={user.address.geo.lat}
                onChange={handleChange}
                placeholder="Geo Lat"
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="geo.lng"
                value={user.address.geo.lng}
                onChange={handleChange}
                placeholder="Geo Lng"
                className="border p-2 rounded"
              />
            </div>
          </div>
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Company</h3>
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                name="company.name"
                value={user.company.name}
                onChange={handleChange}
                placeholder="Company Name"
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="company.catchPhrase"
                value={user.company.catchPhrase}
                onChange={handleChange}
                placeholder="Catch Phrase"
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="company.bs"
                value={user.company.bs}
                onChange={handleChange}
                placeholder="BS"
                className="border p-2 rounded"
              />
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
