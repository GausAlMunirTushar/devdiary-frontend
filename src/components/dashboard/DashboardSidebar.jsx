import Link from "next/link";
import { FaHome, FaFileAlt, FaUser, FaCog, FaSignOutAlt } from "react-icons/fa";
import { IoMdAnalytics } from "react-icons/io";
import Logo from "../shared/Logo";

const menuItems = [
	{ icon: FaHome, label: "Overview", href: "/dashboard" },
	{ icon: FaFileAlt, label: "My Posts", href: "/dashboard/posts" },
	{ icon: IoMdAnalytics, label: "Analytics", href: "/dashboard/analytics" },
	{ icon: FaUser, label: "Profile", href: "/dashboard/profile" },
	{ icon: FaCog, label: "Settings", href: "/dashboard/settings" },
];

const DashboardSidebar = ({ className = "", isOpen = true, onClose }) => {
	return (
		<>
			{isOpen && (
				<div
					className="fixed inset-0 bg-black/50 z-40 lg:hidden"
					onClick={onClose}
				/>
			)}
			<aside
				className={`fixed lg:sticky top-0 left-0 w-64 bg-white border-r border-gray-200 h-screen flex flex-col z-50 lg:z-0 transition-transform duration-300 ${
					isOpen
						? "translate-x-0"
						: "-translate-x-full lg:translate-x-0"
				} ${className}`}
			>
				<div className="py-5 px-6 border-b border-gray-200">
					<Logo />
				</div>
				<nav className="flex-1 p-4 space-y-2">
					{menuItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
						>
							<item.icon size={20} />
							<span>{item.label}</span>
						</Link>
					))}
				</nav>
				<div className="p-4 border-t border-gray-200">
					<button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg hover:bg-gray-100 transition-colors text-red-500 hover:text-red-600">
						<FaSignOutAlt size={20} />
						<span>Logout</span>
					</button>
				</div>
			</aside>
		</>
	);
};

export default DashboardSidebar;
