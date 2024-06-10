import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
	const [scroll, setScroll] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`fixed w-full top-0 z-50 transition-opacity duration-300 bg-indigo-900 bg-frosted text-grey`}
		>
			<div className="container mx-auto flex justify-between items-center p-4">
				<div className="text-2xl font-bold">My Portfolio</div>
				<div className="space-x-4">
					<button
						onClick={() => handleScrollToSection("jumbotron")}
						className="hover:text-gray-300 focus:outline-none"
					>
						Home
					</button>
					<button
						onClick={() => handleScrollToSection("about")}
						className="hover:text-gray-300 focus:outline-none"
					>
						About Me
					</button>
					<button
						onClick={() => handleScrollToSection("projects")}
						className="hover:text-gray-300 focus:outline-none"
					>
						Projects
					</button>
					<button
						onClick={() => handleScrollToSection("contact")}
						className="hover:text-gray-300 focus:outline-none"
					>
						Contact
					</button>
				</div>
			</div>
		</nav>
	);

	function handleScrollToSection(id: string) {
		const section = document.getElementById(id);
		if (section) {
			window.scrollTo({
				top: section.offsetTop - 50, // Adjust the offset as needed
				behavior: "smooth",
			});
		}
	}
};

export default Navbar;
