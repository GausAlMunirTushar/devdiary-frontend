const Input = ({ 
	type = 'text', 
	className = '', 
	label, 
	placeholder, 
	name,
	value,
	onChange,
	error,
	disabled = false,
	required = false,
	icon: Icon,
	...props 
}) => {
	const baseInputStyles = 'w-full px-4 py-2 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed';
	const normalState = 'border-gray-300 bg-white';
	const errorState = 'border-red-500 bg-red-50';
	
	const inputClasses = `${baseInputStyles} ${error ? errorState : normalState} ${className}`;

	return (
		<div className="flex flex-col space-y-1.5">
			{label && (
				<label 
					htmlFor={name || label} 
					className="text-sm font-medium text-gray-700 uppercase"
				>
					{label}
					{required && <span className="text-red-500 ml-1">*</span>}
				</label>
			)}
			<div className="relative">
				{Icon && (
					<div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
						<Icon size={18} />
					</div>
				)}
				<input
					id={name || label}
					name={name}
					type={type}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					disabled={disabled}
					required={required}
					className={`${inputClasses} ${Icon ? 'pl-10' : ''}`}
					{...props}
				/>
			</div>
			{error && (
				<p className="text-sm text-red-500">{error}</p>
			)}
		</div>
	);
};

export default Input;
