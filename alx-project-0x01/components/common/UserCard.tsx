// components/common/UserCard.tsx

import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4 w-full max-w-md">
      <h2 className="text-xl font-bold mb-2 text-blue-800">{user.name}</h2>
      <p className="text-gray-700">Username: {user.username}</p>
      <p className="text-gray-700">Email: {user.email}</p>
      <p className="text-gray-700">Phone: {user.phone}</p>
      <p className="text-gray-700">Website: {user.website}</p>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-800">Address</h3>
        <p className="text-sm text-gray-600">
          {user.address.street}, {user.address.suite},<br />
          {user.address.city}, {user.address.zipcode}
        </p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-800">Company</h3>
        <p className="text-sm text-gray-600">{user.company.name}</p>
        <p className="text-sm italic text-gray-500">{user.company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard;
