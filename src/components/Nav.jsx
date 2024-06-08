import React from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (
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
	);
}

export default Nav;
