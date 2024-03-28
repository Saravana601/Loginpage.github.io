import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const initialState = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  useEffect(() => {
    // Inject Transifex Live settings and script into the document
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      window.liveSettings = { api_key: "fa8519822dee435bbb48a5d0bd75760a" };
    `;
    document.head.appendChild(script);

    const transifexScript = document.createElement("script");
    transifexScript.type = "text/javascript";
    transifexScript.src = "//cdn.transifex.com/live.js";
    document.head.appendChild(transifexScript);

    // Cleanup function
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(transifexScript);
    };
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.email === "abc@gmail.com" && formData.password === "abc123") {
      localStorage.setItem("token", "dummyToken");
      navigate("/");
    } else {
      alert("Email or password is incorrect");
    }
  };

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <div>
        <h1>Wellcome to Example.com</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto,
          explicabo!
        </p>
      </div>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required={true}
          />
          <label>Password</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            required={true}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
