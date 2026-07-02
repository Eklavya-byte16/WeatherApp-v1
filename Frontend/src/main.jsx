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
            <CheckAuth protected={true}>
              <Home />
            </CheckAuth>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/login"
          element={
            <CheckAuth protected={true}>
              <Login />
            </CheckAuth>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Signup"
          element={
            <CheckAuth protected={true}>
              <Signup />
            </CheckAuth>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Dasktop"
          element={
            <CheckAuth protected={true}>
              <Dasktop />
            </CheckAuth>
          }
        />
      </Routes>

      <Routes>
        <Route
          path="/Changeloc"
          element={
            <CheckAuth protected={true}>
              <Changeloc />
            </CheckAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
