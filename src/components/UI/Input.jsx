import { forwardRef } from 'react';

const InputRef = ({ label, id, ...props }, ref) => {
	return (
		<div className='flex flex-col'>
			<label htmlFor={id} className='px-1 mb-1 text-lg'>
				{label}
			</label>
			<input
				ref={ref}
				{...props}
				id={id}
				name={id}
				className='px-2 py-1 bg-stone-800 text-stone-100 text-base rounded-xl'
			/>
		</div>
	);
};

const Input = forwardRef(InputRef);

export default Input;
