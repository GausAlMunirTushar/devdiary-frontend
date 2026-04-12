"use client";
import { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

const DashboardLayout = ({ children }) => {
	const [sidebarOpen, setSidebarOpen] = useState(false);

	return (
		<div className="flex min-h-screen">
			<DashboardSidebar
				isOpen={sidebarOpen}
				onClose={() => setSidebarOpen(false)}
			/>
			<div className="flex-1 flex flex-col">
				<DashboardHeader onMenuToggle={() => setSidebarOpen(true)} />
				<main className="flex-1 p-6 bg-gray-50">{children}</main>
			</div>
		</div>
	);
};

export default DashboardLayout;
