const Button = ({ children, className, ...props }) => {
	const classes = className === 'dark' ? 'bg-stone-800 text-stone-100' : '';
	return (
		<button className={`px-6 py-2 rounded-xl border-2 border-stone-800 ${classes}`} {...props}>
			{children}
		</button>
	);
};

export default Button;
