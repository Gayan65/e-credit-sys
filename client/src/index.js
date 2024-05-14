import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Login from "./Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import CurrentClientsDashBoard from "./components/dashboard/CurrentClientsDashBoard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/home/:dash_board_view",
    element: <CurrentClientsDashBoard />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
