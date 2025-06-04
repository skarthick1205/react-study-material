import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Logout = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    user && (
      <div style={boxStyle}>
        <button onClick={() => setUser(null)}>Logout</button>
      </div>
    )
  );
};

const boxStyle = {
  padding: "10px",
  margin: "20px",
};

export default Logout;
