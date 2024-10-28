import React, { createContext, useState, useContext, useEffect } from 'react';

type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize state with a function to avoid unnecessary rerenders
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Check localStorage during initialization
    if (typeof window !== 'undefined') { // Check for browser environment
      const storedStatus = localStorage.getItem("LoginStatus");
      if (!storedStatus) {
        localStorage.setItem("LoginStatus", "false");
        return false;
      }
      return storedStatus.toLowerCase() === "true";
    }
    return false;
  });

  // Handle synchronization with localStorage
  useEffect(() => {
    localStorage.setItem("LoginStatus", String(isLoggedIn));
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};