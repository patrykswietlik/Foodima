import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children, open }) => {
	const dialog = useRef();

	useEffect(() => {
		const modal = dialog.current;
		if (open) {
			modal.showModal();
		}

		return () => {
			modal.close();
		};
	}, [open]);

	return createPortal(
		<dialog
			ref={dialog}
			className='fixed top-32 left-1/2 -translate-x-1/2 w-1/4 min-w-[500px] p-4 rounded-xl backdrop:opacity-75 backdrop:bg-black'>
			{children}
		</dialog>,
		document.getElementById('root')
	);
};

export default Modal;
