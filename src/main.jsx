import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageOwner from "./components/PageOwner.jsx";
import PageHome from "./components/PageHome.jsx";
import Nav from "./components/Nav.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},

	{
		path: "/owner",
		element: <PageOwner />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
