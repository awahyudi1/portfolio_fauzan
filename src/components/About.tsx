import React from "react";
import CircularImage from "./CircularImage";

const About: React.FC = () => {
	return (
		<section id="about" className="py-12 px-4 bg-gray-100">
			<div className="container mx-auto flex flex-col md:flex-row items-center">
				<div className="md:w-1/2 md:pr-8">
					<h2 className="text-4xl font-bold mb-4 text-center md:text-left">
						About Me
					</h2>
					<p className="text-xl mb-4 text-center md:text-left">
						Hello! I'm Fauzan. a striving web developer student with high interest in building web
						applications using modern technologies. I love creating beautiful
						and functional websites.
					</p>
					<p className="text-xl text-center md:text-left">
						I have a strong foundation in React, JavaScript, TypeScript, and Tailwind CSS.
						I'm always eager to learn new skills and take on new challenges.
					</p>
				</div>
				<div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
					<CircularImage />
				</div>
			</div>
		</section>
	);
};

export default About;
