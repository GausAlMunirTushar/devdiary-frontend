const Input = ({ type, className, label, placeholder }) => {
	return (
		<div className="flex flex-col space-y-2">
			<label htmlFor={type} className="uppercase text-gray-400">
				{label}
			</label>
			<input
				type={type}
				className={className}
				placeholder={placeholder}
			></input>
		</div>
	);
};

export default Input;
