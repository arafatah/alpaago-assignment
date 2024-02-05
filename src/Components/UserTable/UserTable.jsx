import React, { useState } from "react";

const UserTable = ({ users, onAdd, onDelete, onChangeStatus }) => {
  const [localUsers, setLocalUsers] = useState(users);

  const handleAdd = (userId) => {
    // Logic to add user to inactive list
    setLocalUsers((prevUsers) => {
      const updatedUsers = prevUsers.map((user) =>
        user.id === userId ? { ...user, status: "Inactive" } : user
      );
      onAdd(userId); // Trigger the parent component's onAdd function
      return updatedUsers;
    });
  };

  const handleDelete = (userId) => {
    // Logic to delete user
    setLocalUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((user) => user.id !== userId);
      onDelete(userId); // Trigger the parent component's onDelete function
      return updatedUsers;
    });
  };

  const handleChangeStatus = (userId) => {
    // Logic to change user status
    setLocalUsers((prevUsers) => {
      const updatedUsers = prevUsers.map((user) =>
        user.id === userId
          ? {
              ...user,
              status: user.status === "Active" ? "Inactive" : "Active",
            }
          : user
      );
      onChangeStatus(userId); // Trigger the parent component's onChangeStatus function
      return updatedUsers;
    });
  };

  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4 border-b">Username</th>
          <th className="py-2 px-4 border-b">Added Date</th>
          <th className="py-2 px-4 border-b">Status</th>
          <th className="py-2 px-4 border-b">Actions</th>
        </tr>
      </thead>
      <tbody>
        {localUsers.map((user) => (
          <tr
            key={user.id}
            className="hover:bg-gray-50 transition duration-300 ease-in-out"
          >
            <td className="py-2 px-4 pl-44 border-b">{user.username}</td>
            <td className="py-2 px-4 pl-44 border-b">{user.addedDate}</td>
            <td
              className={`py-2 pl-44 px-4 border-b ${
                user.status === "Active" ? "text-green-500" : "text-red-500"
              }`}
            >
              {user.status}
            </td>
            <td className="py-2 pl-44 px-4 border-b">
              <button
                className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 focus:outline-none mr-1"
                onClick={() => handleAdd(user.id)}
              >
                Add
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 focus:outline-none mr-1"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
              <button
                className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 focus:outline-none"
                onClick={() => handleChangeStatus(user.id)}
              >
                Change Status
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
