const Title = ({ title, description, className = "" }) => {
	return (
		<div className={`mb-6 ${className}`}>
			<h1 className="text-3xl font-bold text-gray-900">{title}</h1>
			{description && (
				<p className="text-gray-600 mt-1">{description}</p>
			)}
		</div>
	);
};

export default Title;
