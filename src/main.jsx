import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageOwner from "./components/PageOwner.jsx";
import Nav from "./components/Nav.jsx";
import NavButton from "./components/NavButton.jsx";
import User from "./components/User.jsx";
import Admin from "./components/Admin.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Nav />,
		children: [
			{
				path: "",
				element: <App />,
				children: [
					{
						path: "/user",
						element: <User />,
					},
					{
						path: "/admin",
						element: <Admin />,
					},
				],
			},
		],
	},
	{
		path: "/owner",
		element: <Nav />,
		children: [
			{
				path: "",
				element: <PageOwner />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<RouterProvider router={router} />
);
