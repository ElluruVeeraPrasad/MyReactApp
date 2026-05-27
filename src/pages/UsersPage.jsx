import "./UsersPage.css";
import { useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";  
import Logout from "../components/Logout/Logout";   
import Sidebar from "../components/Sidebar/Sidebar";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../api/userService";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  }; 

  // Load users when component mounts
  useEffect(() => {
    loadUsers();
  }, []);// Runs only on the first render 

  const handleSubmit = async (form) => {
    if (selectedUser) {
      await updateUser(selectedUser.id, form);
      setSelectedUser(null);
    } else {
      await createUser(form);
    }
    loadUsers();
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    loadUsers();
  };

  return (
  <div className="users-page">

    <Sidebar />

    <div className="users-container">
      <h2 className="users-title">User Management</h2>

      <UserForm onSubmit={handleSubmit} selectedUser={selectedUser} />

      <UserList
        users={users}
        onEdit={setSelectedUser}
        onDelete={handleDelete}
      />
    </div>

  </div>
);
}

export default UsersPage;