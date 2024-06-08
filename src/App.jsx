import "./App.css";
import Nav from "./components/Nav";

const App = () => {
	return (
		<div className>
			<header className="text-center mt-16 text-5xl font-bold">
				<h1>Generation Thailand</h1>
				<h2>React - Assessment</h2>
			</header>
			<main className="flex justify-center mt-8">
				<button className="mr-[120px] border border-slate-300 border-4 bg-slate-300 text-2xl font-bold p-4 rounded-md  hover:border-4 hover:border-blue-400">
					User Home Sector
				</button>
				<button className="white border border-black border-4 text-2xl font-bold p-4 rounded-md  hover:border-4 hover:border-blue-400">
					Admin Home Sector
				</button>
			</main>
		</div>
	);
};

export default App;
