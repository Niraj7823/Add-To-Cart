import { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    const savedEmail = localStorage.getItem("signupEmail");
    const savedPassword = localStorage.getItem("signupPassword");

    if (email === savedEmail && password === savedPassword) {
      alert("Login successful");
      navigate("/Home");
    } else {
      alert("Invalid email or password. Please sign up first.");
    }
  };

  return (
    <div
      className="w-100%"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <div className="position-absolute top-50 start-50 translate-middle bg-white shadow-lg rounded">
        <div className="text-dark p-5" style={{ minWidth: 300, maxWidth: 400 }}>
          <form onSubmit={handleClick}>
            <h1 className="text-center mb-4">Login</h1>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control shadow-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control shadow-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={!email || !password}
            >
              Login
            </button>

            <p className="text-center mt-3">
              Don’t have an account?{" "}
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
