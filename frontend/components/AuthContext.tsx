"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';

type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only access localStorage on the client side
    if (typeof window !== 'undefined') {
      setMounted(true);
      const storedStatus = localStorage.getItem("LoginStatus");
      if (!storedStatus) {
        localStorage.setItem("LoginStatus", "false");
      } else {
        setIsLoggedIn(storedStatus === "true");
      }
    }
  }, []);

  // Don't render children until after client-side hydration
  if (!mounted) {
    return null;
  }

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