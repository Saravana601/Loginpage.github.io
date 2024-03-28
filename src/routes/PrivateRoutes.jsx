import { Navigate } from "react-router-dom";

function PrivateRoutes({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    console.log("Called");
    return <Navigate to={"/login"} />;
  }

  return children;
}

export default PrivateRoutes;
