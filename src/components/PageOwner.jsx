import React from "react";
import Nav from "./Nav.jsx";
import Image from "../images/Kan_image.png";

const PageOwner = () => {
	return (
		<>
			<header className="text-center flex flex-col items-center">
				<h1 className="font-bold text-4xl mb-11">10_Kan - Genmate C</h1>
				<picture>
					<img src={Image} alt="Kan's image" />
				</picture>
			</header>
			<main className="text-center mt-8">
				<article className="flex flex-col items-center">
					<h2 className="font-bold text-2xl mb-6">Brief Biography:</h2>
					<p className="text-xl w-2/5">
						Hi, I'm Kan. I am an aspiring UX/UI Designer and developer. Having
						always dreamt to make positive impacts to people's life, I'm
						currently shifting my career from animation industry to tech
						industry, acquiring knowledge in user experience design, coding and
						Agile Methodology.
					</p>
				</article>
			</main>
		</>
	);
};

export default PageOwner;
