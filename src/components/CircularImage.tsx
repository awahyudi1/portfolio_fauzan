import React from "react";

const CircularImage: React.FC = () => {
	return (
		<img
			src="/src/assets/images/profile.png"
			alt="Profile"
			className="w-3/6 h-3/6  rounded-full object-cover"
		/>
	);
};

export default CircularImage;
