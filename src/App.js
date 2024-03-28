import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <p>
          <NavLink to="/">Home</NavLink>
        </p>
        <p>
          <NavLink to="/about">About</NavLink>
        </p>
        <p>
          <NavLink to="/services">Services</NavLink>
        </p>
      </nav>
      <AllRoutes />;
    </div>
  );
}

export default App;
