import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Login from "./Login";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Nav from "./components/Nav";
import ErrorPage from "./components/ErrorPage";
import CurrentClientsDashBoard from "./components/dashboard/CurrentClientsDashBoard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Nav />}></Route>
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
