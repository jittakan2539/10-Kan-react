import { Link } from "react-router-dom";

function NavButton() {
	return (
		<div>
			<section className="flex justify-center mt-8">
				<Link to="/user">
					<button className="mr-[120px] border border-blue-500 border-4 bg-blue-500 text-2xl font-bold p-4 rounded-md hover:text-white  hover:border-4 hover:border-blue-200 shadow-md">
						User Home Sector
					</button>
				</Link>
				<Link to="/admin">
					<button className="white border border-black border-4 text-2xl font-bold p-4 rounded-md  hover:border-4 hover:border-blue-400 shadow-md">
						Admin Home Sector
					</button>
				</Link>
			</section>
		</div>
	);
}

export default NavButton;
