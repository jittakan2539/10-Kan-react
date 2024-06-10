import React from "react";
import NavButton from "../components/NavButton";

const User = () => {
	return (
		<div className="bg-gray-200 min-h-screen">
			<header className="text-center pt-16 text-5xl font-bold">
				<h1>Generation Thailand</h1>
				<h2>Home - User Sector</h2>
			</header>
			<main className="flex flex-col">
				<NavButton />
				{/* Admin หรือ User */}
			</main>
		</div>
	);
};

export default User;
