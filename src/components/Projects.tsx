import React from "react";

const projects = [
	{
		title: "Todo List App",
		description: "An aplication to made a Todo list to make your daily task easier to remember. Just add new, Tick it when it's done, Delete and start over the next day.",
		link: "https://to-do-list-final-omega.vercel.app/",
	},
	{
		title: "Project 2",
		description: "Description of project 2.",
		link: "https://project2.vercel.app",
	},
];

const Projects: React.FC = () => {
	return (
		<section id="projects" className="py-12 px-4">
			<div className="container mx-auto text-center">
				<h2 className="text-4xl font-bold mb-4">My Work</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{projects.map((project, index) => (
						<a
							key={index}
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
						>
							<h3 className="text-2xl font-bold mb-2">{project.title}</h3>
							<p className="text-lg">{project.description}</p>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
