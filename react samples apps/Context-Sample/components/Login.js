import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { setUser } = useContext(UserContext);

  const handleLogin = () => {
    setUser({
      name: "Karthick",
      email: "karthick@example.com"
    });
  };

  return (
    <div style={boxStyle}>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login as Karthick</button>
    </div>
  );
};

const boxStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  margin: "20px",
  borderRadius: "8px"
};

export default Login;
