const Button = ({ children, className, ...props }) => {
	const classes = className === 'dark' ? 'text-white bg-e-gray' : 'text-black bg-white';

	return (
		<button
			className={`p-2 px-4 rounded-2xl border-2 border-e-gray text-[0.75rem] uppercase font-bold ${classes}`}
			{...props}>
			{children}
		</button>
	);
};

export default Button;
