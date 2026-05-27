
import { useState, useEffect } from "react";

function UserForm({ onSubmit, selectedUser }) {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  useEffect(() => {
    if (selectedUser) {
      setForm(selectedUser);
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="email"
        value={form.email}
        type="email"
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        required
        type="password" />
      <button type="submit">
        {selectedUser ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default UserForm;