import React from "react";
import { useState } from "react";
import NavButton from "../components/NavButton";

function Admin({ tableData, setTableData }) {
	//set state ของ formData ที่เป็น object ที่มีค่า firstName,lastName,position ออกมา
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		position: "",
	});

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
		setTableData((prevData) => [...prevData, formData]);
		console.log(tableData);
	};

	//สร้าง function สำหรับลบ
	const handleDelete = (index) => {
		//(_, i) เพื่อดึงค่า index จาก tableData --> เช็คว่า index ของ formData แต่ละอันตรงกับ index ที่เลือกไหม
		setTableData((prevData) => prevData.filter((_, i) => i !== index));
	};

	//UI ปุ่มและตาราง
	return (
		<div className=" bg-gray-200 min-h-screen">
			<header className="text-center pt-16 text-5xl font-bold">
				<h1>Generation Thailand</h1>
				<h2>Home - Admin Sector</h2>
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
			<section className="flex justify-center">
				<table className=" mt-8 w-1/2 divide-y divide-gray-200 border border-black ">
					<thead className="bg-slate-400">
						<tr>
							<th className="p-2 border border-black">Name</th>
							<th className="p-2 border border-black">Last Name</th>
							<th className="p-2 border border-black">Position</th>
							<th className="p-2 border border-black">Delete</th>
						</tr>
					</thead>
					<tbody className="bg-white ">
						{tableData.map((formData, index) => {
							return (
								<tr key={index}>
									<td className="p-2 border border-black font-normal">
										{formData.firstName}
									</td>
									<td className="p-2 border border-black font-normal">
										{formData.lastName}
									</td>
									<td className="p-2 border border-black font-normal">
										{formData.position}
									</td>
									<td className="p-2 border border-black font-normal">
										<button
											onClick={() => handleDelete(index)}
											className="border-2 border-red-500 bg-red-500 text-white rounded-md p-2 px-3 hover:border-red-950"
										>
											Delete
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</section>
		</div>
	);
}

export default Admin;
