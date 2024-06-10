import React from "react";
import { useState } from "react";
import NavButton from "../components/NavButton";

function Admin() {
	//set state ของ formData ที่เป็น object ที่มีค่า firstName,lastName,position ออกมา
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		position: "",
	});

	//set state สำหรับทำ array ไว้รับค่า
	const [tableData, setTableData] = useState([
		{ firstName: "", lastName: "", position: "" },
	]);

	//สร้าง function เพื่อ update ค่าใน input ทั้ง 3 อัน
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	//สร้าง function เมื่อกด save
	const handleSubmit = (event) => {
		event.preventDefault(); //ไม่ให้ refresh หน้า
		console.log("Form Submitted:", formData); //ไว้ดู check
	};

	//UI ปุ่มและตาราง
	return (
		<div className=" bg-gray-200 min-h-screen">
			<header className="text-center pt-16 text-5xl font-bold">
				<h1>Generation Thailand</h1>
				<h2>React - Assessment</h2>
			</header>

			<NavButton />
			{/* Admin หรือ User */}

			<form onSubmit={handleSubmit} className="mt-5 flex flex-col items-center">
				<h2 className="font-bold text-2xl mb-6">Create User Here</h2>
				<section className="flex gap-8">
					<input
						className="bg-white p-3 rounded-md w-[300px]"
						type="text"
						name="firstName"
						placeholder="Name"
						value={FormData.firstName}
						onChange={handleChange}
					/>
					<input
						className="bg-white p-3 rounded-md w-[300px]"
						type="text"
						name="lastName"
						placeholder="Last Name"
						value={FormData.lastName}
						onChange={handleChange}
					/>
					<input
						className="bg-white p-3 rounded-md w-[300px]"
						type="text"
						name="position"
						placeholder="Position"
						value={FormData.position}
						onChange={handleChange}
					/>
					<button
						type="submit"
						className="bg-indigo-500 p-3 px- font-semibold text-white rounded-md border-4 border-indigo-500  hover:border-4 hover:border-blue-400"
					>
						Save
					</button>
				</section>
			</form>

			{/* ตาราง */}
			<table className=" mt-8 w-1/2 divide-y divide-gray-200 border border-black">
				<thead className="bg-slate-400">
					<tr>
						<th className="p-2 border border-black">Name</th>
						<th className="p-2 border border-black">Last Name</th>
						<th className="p-2 border border-black">Position</th>
					</tr>
				</thead>
				<tbody className="bg-white ">
					<th className="p-2 border border-black font-normal">
						{tableData.firstName}
					</th>
					<th className="p-2 border border-black font-normal">
						{tableData.lastName}
					</th>
					<th className="p-2 border border-black font-normal">
						{tableData.position}
					</th>
				</tbody>
			</table>
		</div>
	);
}

export default Admin;
