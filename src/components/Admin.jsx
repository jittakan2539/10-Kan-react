import React from "react";
import { useState } from "react";

function Admin() {
	//set state ของ formData ที่เป็น object ที่มีค่า firstName,lastName,position ออกมา
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		position: "",
	});

	//set state สำหรับทำตารางไว้รับค่า

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
		console.log("Form Submitted:", formData);
	};

	//UI ปุ่มและตาราง
	return (
		<div className="mt-9">
			<form onSubmit={handleSubmit} className="flex flex-col items-center">
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

				{/* ตาราง */}
				<table className="mt-8 w-1/2 divide-y divide-gray-200 border border-black">
					<thead className="bg-slate-400">
						<tr>
							<th className="border border-black">Name</th>
							<th className="border border-black">Last Name</th>
							<th className="border border-black">Position</th>
						</tr>
					</thead>
					<tbody className="bg-white ">
						<th className="border border-black font-normal">
							{formData.firstName}
						</th>
						<th className="border border-black font-normal">
							{formData.lastName}
						</th>
						<th className="border border-black font-normal">
							{formData.position}
						</th>
					</tbody>
				</table>
			</form>
		</div>
	);
}

export default Admin;
