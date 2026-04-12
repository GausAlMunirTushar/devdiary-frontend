"use client";
import Title from "@/components/shared/Title";
import DashboardTable from "@/components/dashboard/DashboardTable";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const UsersPage = () => {
	const tableData = [
		{ id: 1, title: "John Doe", author: "john@example.com", date: "2024-01-05", status: "active" },
		{ id: 2, title: "Jane Smith", author: "jane@example.com", date: "2024-01-10", status: "active" },
		{ id: 3, title: "Mike Johnson", author: "mike@example.com", date: "2024-02-01", status: "banned" },
		{ id: 4, title: "Sarah Williams", author: "sarah@example.com", date: "2024-02-15", status: "active" },
	];

	const handleEdit = (row) => console.log("Edit:", row);
	const handleDelete = (row) => console.log("Delete:", row);

	return (
		<div>
			<div className="flex items-center justify-between mb-6">
				<Title
					title="Manage Users"
					description="View and manage registered users"
				/>
				<Link
					href="/dashboard/users/create"
					className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
				>
					<FaPlus /> Add User
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

export default UsersPage;
