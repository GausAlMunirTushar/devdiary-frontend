"use client";
import Title from "@/components/shared/Title";
import StatsCard from "@/components/dashboard/StatsCard";
import DashboardTable from "@/components/dashboard/DashboardTable";
import { FaUsers, FaFileAlt, FaEye, FaHeart } from "react-icons/fa";

const DashboardPage = () => {
	const stats = [
		{ title: "Total Users", icon: FaUsers, value: "43,434" },
		{ title: "Total Posts", icon: FaFileAlt, value: "1,234" },
		{ title: "Total Views", icon: FaEye, value: "89,567" },
		{ title: "Total Likes", icon: FaHeart, value: "12,345" },
	];

	const tableData = [
		{
			id: 1,
			title: "Getting Started with Next.js 14",
			author: "John Doe",
			date: "2024-03-15",
			status: "published",
		},
		{
			id: 2,
			title: "Understanding React Server Components",
			author: "Jane Smith",
			date: "2024-03-14",
			status: "draft",
		},
		{
			id: 3,
			title: "TypeScript Best Practices",
			author: "Mike Johnson",
			date: "2024-03-13",
			status: "pending",
		},
		{
			id: 4,
			title: "Mastering Tailwind CSS",
			author: "Sarah Williams",
			date: "2024-03-12",
			status: "published",
		},
	];

	const handleEdit = (row) => {
		console.log("Edit:", row);
	};

	const handleDelete = (row) => {
		console.log("Delete:", row);
	};

	return (
		<div>
			<Title
				title="Dashboard Overview"
				description="Welcome back! Here's what's happening with DevDiary today."
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
				{stats.map((stat, index) => (
					<StatsCard
						key={index}
						title={stat.title}
						icon={stat.icon}
						value={stat.value}
					/>
				))}
			</div>
			<div className="mt-8">
				<Title
					title="Recent Posts"
					description="Manage your latest content"
				/>
				<DashboardTable
					data={tableData}
					onEdit={handleEdit}
					onDelete={handleDelete}
				/>
			</div>
		</div>
	);
};

export default DashboardPage;
