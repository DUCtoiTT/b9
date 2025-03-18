import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    console.log("Nhập vào:", email, password); // Kiểm tra giá trị nhập vào
    if (email === "admin" && password === "123456") {
        setUser({ email });
        return true;
    }
    return false;
};

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
