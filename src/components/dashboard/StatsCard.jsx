const StatsCard = ({ title, icon: Icon, value, className = "" }) => {
	return (
		<div className={`bg-white border border-gray-200 rounded-lg p-6 ${className}`}>
			<div className="flex items-center justify-between">
				<div>
					<p className="text-sm text-gray-600 mb-1">{title}</p>
					<h3 className="text-3xl font-bold text-gray-900">{value}</h3>
				</div>
				{Icon && (
					<div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary">
						<Icon size={28} />
					</div>
				)}
			</div>
		</div>
	);
};

export default StatsCard;
