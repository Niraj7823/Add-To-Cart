import { useState } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background.jpg";

const Signup = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    localStorage.setItem("signupName", name);
    localStorage.setItem("signupNumber", number);
    localStorage.setItem("signupEmail", email);
    localStorage.setItem("signupPassword", password);

    alert("Signup successful! Please login.");
    navigate("/");
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
          <form onSubmit={handleSignup}>
            <h1 className="text-center mb-4">Sign Up</h1>

            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control shadow-sm"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control shadow-sm"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                pattern="[0-9]{10}"
                title="Enter a 10-digit phone number"
                required
              />
            </div>

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

            <button type="submit" className="btn btn-success w-100">
              Sign Up
            </button>

            <p className="text-center mt-3">
              Already have an account?{" "}
              <span
                style={{ color: "blue", cursor: "pointer" }}
                onClick={() => navigate("/")}
              >
                Login
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
