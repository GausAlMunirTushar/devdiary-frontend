"use client";
import Title from "@/components/shared/Title";
import DashboardTable from "@/components/dashboard/DashboardTable";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const DashboardPostsPage = () => {
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
			author: "John Doe",
			date: "2024-03-14",
			status: "draft",
		},
		{
			id: 3,
			title: "TypeScript Best Practices",
			author: "John Doe",
			date: "2024-03-13",
			status: "pending",
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
			<div className="flex items-center justify-between mb-6">
				<Title
					title="Manage Posts"
					description="Create, edit, and manage your blog posts"
				/>
				<Link
					href="/dashboard/posts/create"
					className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
				>
					<FaPlus /> Create New Post
				</Link>
			</div>
			<DashboardTable
				data={tableData}
				onEdit={handleEdit}
				onDelete={handleDelete}
			/>
		</div>
	);
};

export default DashboardPostsPage;
