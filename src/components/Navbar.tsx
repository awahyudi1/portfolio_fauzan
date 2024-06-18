import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScrollToSection = (id: string) => {
		const section = document.getElementById(id);
		if (section) {
			window.scrollTo({
				top: section.offsetTop - 50,
				behavior: "smooth",
			});
		}
	};

	return (
		<nav
			className={`fixed w-full top-0 z-50 transition-opacity duration-300 bg-indigo-900 bg-frosted text-grey ${
				isScrolled ? "bg-opacity-90" : "bg-opacity-100"
			}`}
		>
			<div className="container mx-auto flex justify-between items-center p-4">
				<div className="text-2xl font-bold">My Portfolio</div>
				<div className="space-x-4">
					<button
						onClick={() => handleScrollToSection("Jumbotron")}
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
};

export default Navbar;
