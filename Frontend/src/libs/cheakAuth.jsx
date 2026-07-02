import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CheckAuth({ children, requireAuth = true }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (requireAuth) {
      if (!token) {
        navigate("/login", { replace: true }); 
      } else {
        setIsLoading(false);
      }
    } else {
      if (token) {
        navigate("/desktop", { replace: true }); 
      } else {
        setIsLoading(false);
      }
    }
  }, [navigate, requireAuth]);

  if (isLoading) {
    return <h1>Loading...</h1>; 
  }

  return <>{children}</>;
}

export default CheckAuth;