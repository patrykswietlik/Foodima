import Modal from './UI/Modal';
import Input from './UI/Input';
import Button from './UI/Button';
import { useContext, useRef } from 'react';
import { AuthenticationContext } from '../store/AuthenticationContext';

const LogIn = () => {
	const authCtx = useContext(AuthenticationContext);
	const emailRef = useRef();
	const passwordRef = useRef();

	const handleSubmit = e => {
		// validation
		e.preventDefault();
		emailRef.current.value = '';
		passwordRef.current.value = '';
		authCtx.setAuth(true);
		authCtx.setOnLogin(false);
	};

	return (
		<Modal open={authCtx.onLogin}>
			<form onSubmit={handleSubmit}>
				<h2 className='mb-6 text-4xl font-semibold'>Login</h2>
				<div className='flex flex-col gap-4 mb-12'>
					<Input ref={emailRef} label='E-mail' id='email' type='email' />
					<Input ref={passwordRef} label='Password' id='password' type='password' />
				</div>

				<div className='flex gap-4'>
					<Button
						onClick={() => {
							emailRef.current.value = '';
							passwordRef.current.value = '';
							authCtx.setOnLogin(false);
						}}
						type='reset'>
						Cancel
					</Button>
					<Button className='dark' type='submit'>
						Log In
					</Button>
				</div>
			</form>
		</Modal>
	);
};

export default LogIn;
