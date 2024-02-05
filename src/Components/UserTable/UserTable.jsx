import React from "react";

const UserTable = ({ users, onAdd, onDelete, onChangeStatus }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Added Date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.username}</td>
            <td>{user.addedDate}</td>
            <td>{user.status}</td>
            <td>
              <button onClick={() => onAdd(user.id)}>Add</button>
              <button onClick={() => onDelete(user.id)}>Delete</button>
              <button onClick={() => onChangeStatus(user.id)}>
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
