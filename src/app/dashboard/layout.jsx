"use client";
import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

const DashboardLayout = ({ children }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div className="flex h-screen overflow-hidden">
			<DashboardSidebar
				isOpen={sidebarOpen}
				onClose={() => setSidebarOpen(false)}
			/>
			<div className="flex-1 flex flex-col overflow-hidden">
				<DashboardHeader onMenuToggle={() => setSidebarOpen(true)} />
				<main className="flex-1 overflow-y-auto p-6 bg-gray-50">
					{children}
				</main>
			</div>
		</div>
	);
};

export default DashboardLayout;
