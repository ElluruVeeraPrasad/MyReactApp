import { Link } from "react-router-dom";
import { FaUsers, FaTicketAlt, FaUser, FaSignOutAlt } from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Dashboard</h2>

      <ul className="sidebar-menu">
        <li>
          <Link to="/users"><FaUsers className="icon" />Users</Link>
        </li>

        <li>
          <Link to="/tickets"><FaTicketAlt className="icon" />Tickets</Link>
        </li>

        <li>
          <Link to="/profile"><FaUser className="icon" />Profile</Link>
        </li>

        <li>
          <Link to="/logout"><FaSignOutAlt className="icon" />Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;