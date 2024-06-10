import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div>
			<nav className="bg-gray-200">
				<ul className="flex flex-row justify-end p-5 mx-6 gap-11 text-2xl font-semibold">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/owner">Owner</Link>
					</li>
				</ul>
				<hr className="border-slate-600" />
			</nav>
		</div>
	);
};

export default Nav;
