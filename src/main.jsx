import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import './index.css'
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Academic from "./pages/Academic.jsx";
import Industrial from "./pages/Industrial.jsx";
import Students from "./pages/Students.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/academic", element: <Academic /> },
  { path: "/industrial", element: <Industrial /> },
  { path: "/students", element: <Students /> },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
