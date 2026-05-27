import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser, createUser } from "../../api/userService";

function Login() {

  const [isRegister, setIsRegister] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if (isRegister) {
        // REGISTER
        await createUser(form);
        alert("Registration successful");
        setIsRegister(false);
      } else {
        // LOGIN
        const data = await loginUser({
          email: form.email,
          password: form.password
        });

        localStorage.setItem("id", data.user.id);
        localStorage.setItem("name", data.user.name);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("token", data.token);

        navigate("/users");
      }

    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="login-container">

      <div className="login-box">

        <h2>{isRegister ? "Register" : "Login"}</h2>

        <form onSubmit={handleSubmit}>

          {isRegister && (
            <input
              name="name"
              placeholder="Enter Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit">
            {isRegister ? "Register" : "Login"}
          </button>

        </form>

        <p>
          {isRegister ? "Already have an account?" : "Create an account"}
        </p>

        <a
  href="#"
  className="switch-link"
  onClick={(e) => {
    e.preventDefault();
    setIsRegister(!isRegister);
  }}
>
  {isRegister ? "Login here" : "Register here"}
</a>

      </div>

    </div>
  );
}

export default Login;