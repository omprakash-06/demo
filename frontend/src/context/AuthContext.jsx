import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null); // admin object
  const [loading, setLoading] = useState(true); // loading while checking cookie

  // Check if admin is already logged in via cookie
  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/admin/me`, {
          credentials: "include", // important for cookie
        });
        const data = await res.json();
        if (res.ok) {
          setAdmin(data.user); // NOTE: controller returns { user: admin }
        } else {
          setAdmin(null);
        }
      } catch (err) {
        console.log(err);
        setAdmin(null);
      }
      setLoading(false);
    };

    fetchAdmin();
  }, []);

  const logout = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/admin/logout`, {
        method: "POST",
        credentials: "include",
      });
      if (res.ok) setAdmin(null);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider value={{ admin, setAdmin, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
