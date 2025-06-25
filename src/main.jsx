import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Nosotros from "./components/Nosotros";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <App />,
  },
  {
    path: "/nosotros",
    element: <Nosotros />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
