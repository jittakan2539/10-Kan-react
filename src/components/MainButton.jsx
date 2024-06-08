import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavButton from "./NavButton.jsx";
import User from "./User.jsx";
import Admin from "./Admin.jsx";

const router = createBrowserRouter([
	{
		path: "/user",
		element: <NavButton />,
		children: [
			{
				path: "",
				element: <User />,
			},
		],
	},
	{
		path: "/admin",
		element: <NavButton />,
		children: [
			{
				path: "",
				element: <Admin />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
