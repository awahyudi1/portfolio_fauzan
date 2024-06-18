import React from "react";
import ProfileImage from "../assets/images/profile.png";

const CircularImage: React.FC = () => {
	return (
		<img
			src={ProfileImage}
			alt="Profile"
			className="w-3/6 h-3/6  rounded-full object-cover"
		/>
	);
};

export default CircularImage;
