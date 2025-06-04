import React, { createContext, useState } from "react";

// Step 1: Create Context
export const UserContext = createContext();

// Step 2: Create Provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Global user state

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
