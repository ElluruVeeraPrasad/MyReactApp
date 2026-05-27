
function UserList({ users, onEdit, onDelete }) {
  return (
    <div className="user-list">
      {users.map((user) => (
        <div className="user-item" key={user.id}>
          <span>{user.name} - {user.email} - {user.password}</span>

          <div className="user-actions">
            <button
              className="edit-btn"
              onClick={() => onEdit(user)}
            >
              Edit
            </button>

            <button
              className="delete-btn"
              onClick={() => onDelete(user.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;