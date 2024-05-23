import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { Login, loginAction } from "./Login";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./components/pages/ErrorPage";
import Nav from "./components/layouts/Nav";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import { CurrentClients } from "./components/pages/CurrentClients";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Login />} action={loginAction} />
            <Route path="/home" element={<Nav />}>
                <Route index path="/home" element={<CurrentClients />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Route>
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
