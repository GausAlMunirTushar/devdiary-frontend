"use client";
import { FaBell, FaSearch, FaBars } from "react-icons/fa";
import Input from "@/components/ui/input";
import { useState } from "react";

const DashboardHeader = ({ onMenuToggle }) => {
	const [searchFocused, setSearchFocused] = useState(false);

	return (
		<header className="bg-white border-b border-gray-200 px-6 py-4">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-4">
					<button
						onClick={onMenuToggle}
						className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
					>
						<FaBars size={20} />
					</button>
					<div className="relative">
						<Input
							type="text"
							placeholder="Search..."
							icon={FaSearch}
							className="w-80"
							onFocus={() => setSearchFocused(true)}
							onBlur={() => setSearchFocused(false)}
						/>
					</div>
				</div>
				<div className="flex items-center gap-4">
					<button className="relative p-2 rounded-lg hover:bg-gray-100">
						<FaBell size={20} />
						<span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
					</button>
					<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
						U
					</div>
				</div>
			</div>
		</header>
	);
};

export default DashboardHeader;
