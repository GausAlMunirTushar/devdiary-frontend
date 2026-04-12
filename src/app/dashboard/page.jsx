import Title from "@/components/shared/Title";
import StatsCard from "@/components/dashboard/StatsCard";
import { FaUsers, FaFileAlt, FaEye, FaHeart } from "react-icons/fa";

const DashboardPage = () => {
	const stats = [
		{ title: "Total Users", icon: FaUsers, value: "43,434" },
		{ title: "Total Posts", icon: FaFileAlt, value: "1,234" },
		{ title: "Total Views", icon: FaEye, value: "89,567" },
		{ title: "Total Likes", icon: FaHeart, value: "12,345" },
	];

	return (
		<div>
			<Title
				title="Dashboard Overview"
				description="Welcome back! Here's what's happening with DevDiary today."
			/>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{stats.map((stat, index) => (
					<StatsCard
						key={index}
						title={stat.title}
						icon={stat.icon}
						value={stat.value}
					/>
				))}
			</div>
		</div>
	);
};

export default DashboardPage;
