import React from "react";
import Logo from "../shared/Logo";

const WebFooter = () => {
	return (
		<footer className="border-t border-gray-200 py-4 ">
			<div className="max-w-5xl mx-auto flex justify-between">
				<Logo />
				<p>© 2026 DevDiary. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default WebFooter;
