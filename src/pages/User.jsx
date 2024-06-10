import NavButton from "../components/NavButton";

const User = ({ tableData }) => {
	return (
		<div className="bg-gray-200 min-h-screen">
			<header className="text-center pt-16 text-5xl font-bold">
				<h1>Generation Thailand</h1>
				<h2>Home - User Sector</h2>
			</header>
			<main className="flex flex-col">
				<NavButton />
				{/* Admin หรือ User */}

				{/* ใช้ Ternary Operator ว่าถ้า array ว่าง ให้แสดง text, แต่ถ้าไม่ให้แสดงตาราง */}
				{tableData.length <= 0 ? (
					<>
						<h2 className="mt-5 font-bold text-4xl mb-6 text-center text-slate-800">
							Oops! It's empty🙄.
						</h2>
					</>
				) : (
					<section className="flex justify-center">
						<table className=" mt-8 w-1/2 divide-y divide-gray-200 border border-black ">
							<thead className="bg-slate-400">
								<tr>
									<th className="p-2 border border-black">Name</th>
									<th className="p-2 border border-black">Last Name</th>
									<th className="p-2 border border-black">Position</th>
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
										</tr>
									);
								})}
							</tbody>
						</table>
					</section>
				)}
			</main>
		</div>
	);
};

export default User;
