const Button = ({ 
	children, 
	className = '', 
	variant = 'primary',
	size = 'md',
	disabled = false,
	...props 
}) => {
	const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
	
	const variants = {
		primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary',
		secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
	};
	
	const sizes = {
		sm: 'text-sm px-3 py-1.5',
		md: 'text-base px-4 py-2',
		lg: 'text-lg px-6 py-3',
	};

	const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
	
	return (
		<button 
			className={classes} 
			disabled={disabled}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
