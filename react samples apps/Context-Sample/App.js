import React from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Logout from "./components/Logout";

const App = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Dashboard</h1>
      <Login />
      <Profile />
      <Logout />
    </div>
  );
};

export default App;
