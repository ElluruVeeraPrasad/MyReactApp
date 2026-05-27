const API_URL = "http://127.0.0.1:5000";

export const getUsers = async () => {
  
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Unauthorized");

  const response = await fetch(`${API_URL}/getAllUsers`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  
  if (!response.ok) throw new Error("Failed to fetch users");
  return response.json();
};

export const getUserById = async (id) => {
  const response = await fetch(`${API_URL}/getByUserId/${id}`);
  if (!response.ok) throw new Error("User not found");
  return response.json();
};

export const createUser = async (data) => {
  const response = await fetch(`${API_URL}/createUser`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to create user");
  return response.json();
};

export const updateUser = async (id, data) => {
  const response = await fetch(`${API_URL}/updateByUserId/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Failed to update user");
  return response.json();
};

export const deleteUser = async (id) => {
  const response = await fetch(`${API_URL}/deleteUser/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete user");
  return response.json();
};

export const loginUser = async (data) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Login failed");
  }

  return response.json();
};
