const Button = ({ children, className, isBlocked, ...props }) => {
	const classes = className === 'dark' ? 'text-white bg-e-gray' : 'text-black bg-white';
	const isDisabled = isBlocked ? 'opacity-75 cursor-wait' : '';
	return (
		<button
			className={`p-2 px-4 rounded-2xl border-2 border-e-gray text-[0.75rem] uppercase font-bold ${classes} ${className} ${isDisabled}`}
			{...props}
			disabled={isBlocked}>
			{children}
		</button>
	);
};

export default Button;
