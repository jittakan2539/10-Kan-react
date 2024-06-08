import "./App.css";
import User from "./components/User";
import React, { useState } from "react";
import NavButton from "./components/NavButton";

const App = () => {
	//แสดงผล
	return (
		<div className="bg-gray-200 min-h-screen">
			<header className="text-center pt-16 text-5xl font-bold">
				<h1>Generation Thailand</h1>
				<h2>React - Assessment</h2>
			</header>
			<main className="flex flex-col">
				<NavButton />
				{/* Admin หรือ User */}
			</main>
		</div>
	);
};

export default App;
