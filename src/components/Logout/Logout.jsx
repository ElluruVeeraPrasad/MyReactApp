import { useNavigate } from "react-router-dom";

function Logout() {
  // Clear user data from localStorage
   
  const navigate=useNavigate();

  const handleLogout=(e)=>{
    e.preventDefault();
    // Clear user data from localStorage
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("token"); 
    // Redirect to login page
    navigate("/login");
  }
  return (
    
    <div>
        <button className="user-form" onClick={handleLogout} >Logout</button>
    </div>
  )
    // Redirect to login page

}

export default Logout;