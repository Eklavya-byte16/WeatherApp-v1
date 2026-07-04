import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckAuth from "./libs/cheakAuth";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dasktop from "./Pages/Dasktop";
import Changeloc from "./Pages/Changeloc";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <CheckAuth requireAuth={false}>
              <Home />
            </CheckAuth>
          }
        />
        <Route
          path="/login"
          element={
            <CheckAuth requireAuth={false}>
              <Login />
            </CheckAuth>
          }
        />
        <Route
          path="/Signup"
          element={
            <CheckAuth requireAuth={false}>
              <Signup />
            </CheckAuth>
          }
        />
        <Route
          path="/Dasktop"
          element={
            <CheckAuth requireAuth={true}>
              <Dasktop />
            </CheckAuth>
          }
        />
        <Route
          path="/Changeloc"
          element={
            <CheckAuth requireAuth={true}>
              <Changeloc />
            </CheckAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);