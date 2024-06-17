import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App: React.FC = () => {
	return (
		<div className="font-sans antialiased text-gray-900">
			<Navbar />
			<div className="pt-16">
				<Jumbotron />
				<About />
				<Projects />
				<Contact />
				<Footer />
			</div>
		</div>
	);
};

export default App;
