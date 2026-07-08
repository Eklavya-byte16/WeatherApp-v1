import React from "react";
import { Navigate } from "react-router-dom";

function getUser() {
  const raw = localStorage.getItem("user");
  if (!raw || raw === "undefined" || raw === "null" || raw.trim() === "") {
    return null;
  }
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function CheckAuth({ children, requireAuth = true }) {
  const user = getUser();

  if (requireAuth && !user) {
    return <Navigate to="/login" replace />;
  }

  if (!requireAuth && user) {
    return <Navigate to="/dashboard" replace />; 
  }

  return <>{children}</>;
}

export default CheckAuth;