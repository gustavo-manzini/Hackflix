import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Nosotros from "./components/Nosotros";
import Peliculasnuestras from "./components/Peliculasnuestras.jsx";
import Content from "./components/Content.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "content",
        element: <Content />,
      },
      {
        path: "nosotros",
        element: <Nosotros />,
      },
      {
        path: "peliculasnuestras",
        element: <Peliculasnuestras />,
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
