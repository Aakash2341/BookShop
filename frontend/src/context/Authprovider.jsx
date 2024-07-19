import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const initialAuthUser = localStorage.getItem("user");
  let parsedUser;

  try {
    parsedUser = initialAuthUser ? JSON.parse(initialAuthUser) : undefined;
  } catch (error) {
    console.error("Failed to parse user from localStorage:", error);
    parsedUser = undefined;
  }

  const [authUser, setAuthUser] = useState(parsedUser);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
