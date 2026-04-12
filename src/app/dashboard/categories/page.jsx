"use client";
import Title from "@/components/shared/Title";
import DashboardTable from "@/components/dashboard/DashboardTable";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const CategoriesPage = () => {
	const tableData = [
		{ id: 1, title: "JavaScript", author: "-", date: "2024-01-10", status: "active" },
		{ id: 2, title: "React", author: "-", date: "2024-01-15", status: "active" },
		{ id: 3, title: "Next.js", author: "-", date: "2024-02-01", status: "active" },
		{ id: 4, title: "CSS", author: "-", date: "2024-02-10", status: "inactive" },
	];

	const handleEdit = (row) => console.log("Edit:", row);
	const handleDelete = (row) => console.log("Delete:", row);

	return (
		<div>
			<div className="flex items-center justify-between mb-6">
				<Title
					title="Manage Categories"
					description="Organize your content with categories"
				/>
				<Link
					href="/dashboard/categories/create"
					className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
				>
					<FaPlus /> Add Category
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

export default CategoriesPage;
