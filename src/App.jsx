import React, { useState } from "react";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Nav from "./components/Nav.jsx";

import Home from "./pages/Home.jsx";
import PageOwner from "./pages/PageOwner.jsx";
import User from "./pages/User.jsx";
import Admin from "./pages/Admin.jsx";

//สร้าง App*****หลัก
const App = () => {
	//สร้าง array ว่างไว้เก็บ object
	const [tableData, setTableData] = useState([]);

	//สร้าง router
	const router = createBrowserRouter([
		{
			path: "/",
			element: (
				<>
					<Nav />
					<Outlet />
				</>
			),
			children: [
				{
					path: "",
					element: <Home />,
				},
				{
					path: "/user",
					element: <User tableData={tableData} />,
				},
				{
					path: "/admin",
					element: <Admin tableData={tableData} setTableData={setTableData} />,
				},
				{
					path: "/owner",
					element: <PageOwner />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;

	// ReactDOM.createRoot(document.getElementById("root")).render(
	// 	<RouterProvider router={router} />
	// );
};

export default App;
