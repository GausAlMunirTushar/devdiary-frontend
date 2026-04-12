"use client";
import {
	useReactTable,
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	flexRender,
} from "@tanstack/react-table";
import { FaEdit, FaTrash, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "@/components/ui/button";

const getStatusStyles = (status) => {
	const styles = {
		published: "bg-green-100 text-green-700",
		draft: "bg-yellow-100 text-yellow-700",
		pending: "bg-blue-100 text-blue-700",
		rejected: "bg-red-100 text-red-700",
	};
	return styles[status?.toLowerCase()] || "bg-gray-100 text-gray-700";
};

const DashboardTable = ({ data, columns, onEdit, onDelete }) => {
	const tableColumns = [
		{
			accessorKey: "title",
			header: "Title",
		},
		{
			accessorKey: "author",
			header: "Author",
		},
		{
			accessorKey: "date",
			header: "Date",
		},
		{
			accessorKey: "status",
			header: "Status",
			cell: ({ getValue }) => {
				const status = getValue();
				return (
					<span
						className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyles(
							status,
						)}`}
					>
						{status}
					</span>
				);
			},
		},
		{
			id: "actions",
			header: "Actions",
			cell: ({ row }) => (
				<div className="flex gap-2">
					<Button
						variant="secondary"
						size="sm"
						onClick={() => onEdit?.(row.original)}
						className="flex items-center gap-1"
					>
						<FaEdit size={14} /> Edit
					</Button>
					<Button
						variant="danger"
						size="sm"
						onClick={() => onDelete?.(row.original)}
						className="flex items-center gap-1"
					>
						<FaTrash size={14} /> Delete
					</Button>
				</div>
			),
		},
	];

	const table = useReactTable({
		data,
		columns: tableColumns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
	});

	return (
		<div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
			<div className="overflow-x-auto">
				<table className="w-full">
					<thead className="bg-gray-50 border-b border-gray-200">
						{table.getHeaderGroups().map((headerGroup) => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<th
										key={header.id}
										className="px-6 py-4 text-left text-sm font-semibold text-gray-700"
									>
										{flexRender(
											header.column.columnDef.header,
											header.getContext(),
										)}
									</th>
								))}
							</tr>
						))}
					</thead>
					<tbody className="divide-y divide-gray-200">
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<tr
									key={row.id}
									className="hover:bg-gray-50 transition-colors"
								>
									{row.getVisibleCells().map((cell) => (
										<td
											key={cell.id}
											className="px-6 py-4 text-sm text-gray-700"
										>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</td>
									))}
								</tr>
							))
						) : (
							<tr>
								<td
									colSpan={tableColumns.length}
									className="px-6 py-8 text-center text-gray-500"
								>
									No data available
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>

			{table.getPageCount() > 1 && (
				<div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
					<p className="text-sm text-gray-600">
						Page {table.getState().pagination.pageIndex + 1} of{" "}
						{table.getPageCount()}
					</p>
					<div className="flex gap-2">
						<Button
							variant="secondary"
							size="sm"
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}
							className="flex items-center gap-1"
						>
							<FaChevronLeft size={12} /> Previous
						</Button>
						<Button
							variant="secondary"
							size="sm"
							onClick={() => table.nextPage()}
							disabled={!table.getCanNextPage()}
							className="flex items-center gap-1"
						>
							Next <FaChevronRight size={12} />
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

export default DashboardTable;
