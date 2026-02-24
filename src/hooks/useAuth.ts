"use client";

import { useState, useEffect, useCallback } from "react";

const TOKEN_KEY = "darly_admin_token";

export function useAuth() {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem(TOKEN_KEY);
    setToken(stored);
    setLoading(false);
  }, []);

  const login = useCallback((jwt: string) => {
    sessionStorage.setItem(TOKEN_KEY, jwt);
    setToken(jwt);
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(TOKEN_KEY);
    setToken(null);
  }, []);

  return {
    token,
    isAuthenticated: !!token,
    loading,
    login,
    logout,
  };
}
