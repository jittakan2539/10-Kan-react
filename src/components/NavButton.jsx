import React from "react";
import { Outlet, Link } from "react-router-dom";

function NavButton() {
	return (
		<div>
			<section className="flex justify-center mt-8">
				<Link to="/user">
					<button className="mr-[120px] border border-slate-300 border-4 bg-slate-300 text-2xl font-bold p-4 rounded-md  hover:border-4 hover:border-blue-400">
						User Home Sector
					</button>
				</Link>
				<Link to="/admin">
					<button className="white border border-black border-4 text-2xl font-bold p-4 rounded-md  hover:border-4 hover:border-blue-400">
						Admin Home Sector
					</button>
				</Link>
			</section>
			<Outlet />
		</div>
	);
}

export default NavButton;
