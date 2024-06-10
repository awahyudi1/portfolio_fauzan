import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact: React.FC = () => {
	return (
		<section id="contact" className="py-12 px-4 bg-gray-100">
			<div className="container mx-auto text-center">
				<h2 className="text-4xl font-bold mb-4">Contact Me</h2>
				<p className="text-xl mb-8">
					Feel free to reach out to me via the following platforms:
				</p>
				<div className="flex justify-center space-x-8 text-3xl">
					<a
						href="https://github.com/awahyudi1"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-800 hover:text-gray-600"
					>
						<FaGithub />
					</a>
					<a
						href="https://www.linkedin.com/in/achmad-fauzan-wahyudianto-281408187/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-700 hover:text-blue-500"
					>
						<FaLinkedin />
					</a>
					<a
						href="mailto: fauzan131@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-red-600 hover:text-red-400"
					>
						<FaEnvelope />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
