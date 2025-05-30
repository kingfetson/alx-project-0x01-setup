// components/common/UserCard.tsx

import React from "react";
import { UserData } from "@/interfaces";

interface UserProps {
  user: UserData;
}

const UserCard: React.FC<UserProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 m-2 w-80">
      <h2 className="text-xl font-bold">{user.name}</h2>
      <p className="text-sm text-gray-600">@{user.username}</p>
      <p className="text-sm text-gray-800 mt-2">{user.email}</p>
      <div className="mt-2 text-sm">
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong> {user.website}
        </p>
        <p>
          <strong>Company:</strong> {user.company.name}
        </p>
        <p>
          <strong>City:</strong> {user.address.city}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
