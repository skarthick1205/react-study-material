import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div style={boxStyle}>
      <h2>Profile</h2>
      {user ? (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </>
      ) : (
        <p>No user is logged in.</p>
      )}
    </div>
  );
};

const boxStyle = {
  border: "1px solid #ccc",
  padding: "20px",
  margin: "20px",
  borderRadius: "8px"
};

export default Profile;
