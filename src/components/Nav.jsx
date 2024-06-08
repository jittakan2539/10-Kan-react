import React from "react";
import { Outlet, Link } from "react-router-dom";

function Nav() {
	return (
		<div>
			<nav>
				<ul className="flex flex-row justify-end m-5 mx-6 gap-11 text-2xl font-semibold">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/owner">Owner</Link>
					</li>
				</ul>
				<hr className="border-slate-600" />
			</nav>
			<Outlet />
		</div>
	);
}

export default Nav;
