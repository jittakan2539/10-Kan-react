import React from "react";
import { useState } from "react";

function Admin() {
	//set state ของ name, last name, position
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [position, setPosition] = useState("");

	//UI ปุ่มและตาราง
	return (
		<div className="mt-9">
			<form className="flex flex-col items-center">
				<h2 className="font-bold text-2xl mb-6">Create User Here</h2>
				<section className="flex gap-8">
					<input
						className="bg-white p-3 rounded-md w-[300px]"
						type="text"
						name="firstName"
						placeholder="Name"
					/>
					<input
						className="bg-white p-3 rounded-md w-[300px]"
						type="text"
						name="lastName"
						placeholder="Last Name"
					/>
					<input
						className="bg-white p-3 rounded-md w-[300px]"
						type="text"
						name="position"
						placeholder="Position"
					/>
					<button className="bg-indigo-500 p-3 px- font-semibold text-white rounded-md border-4 border-indigo-500  hover:border-4 hover:border-blue-400">
						Save
					</button>
				</section>

				{/* ตาราง */}
				<table>
					<thead></thead>
					<tbody></tbody>
				</table>
			</form>
		</div>
	);
}

export default Admin;
