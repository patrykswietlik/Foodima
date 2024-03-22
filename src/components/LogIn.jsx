import Modal from './UI/Modal';
import Input from './UI/Input';
import Button from './UI/Button';

import bcrypt from 'bcryptjs-react';

import { useContext, useRef, useState } from 'react';
import { AuthenticationContext } from '../store/AuthenticationContext';

const LogIn = () => {
	const authCtx = useContext(AuthenticationContext);
	const emailRef = useRef();
	const passwordRef = useRef();
	const [onVerification, setOnVerification] = useState(false);
	const [error, setError] = useState();

	const handleValidate = async (email, password) => {
		setOnVerification(true);
		const response = await fetch('https://foodima-5fdef-default-rtdb.firebaseio.com/users.json', {
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
		});
		const resData = await response.json();
		const dataArray = Object.keys(resData).map(key => ({
			id: key,
			...resData[key],
		}));
		const userData = dataArray.find(user => user.email === email && bcrypt.compareSync(password, user.password));
		setOnVerification(false);
		return userData;
	};

	const handleResetForm = () => {
		emailRef.current.value = '';
		passwordRef.current.value = '';
		setError(undefined);
	};

	const handleSubmit = async e => {
		// validation
		e.preventDefault();
		const user = await handleValidate(emailRef.current.value, passwordRef.current.value);
		if (user) {
			handleResetForm();
			authCtx.setAuth(true);
			authCtx.setOnLogin(false);
		} else {
			setError(true);
		}
	};

	return (
		<Modal open={authCtx.onLogin}>
			<form onSubmit={handleSubmit}>
				<h2 className='mb-6 text-4xl font-semibold'>Login</h2>
				<fieldset className='flex gap-4 mb-4 p-4 border-2 border-e-gray rounded-xl'>
					<legend className='px-2'>Your Verification Data</legend>
					<Input ref={emailRef} label='E-mail' id='login_email' type='email' />
					<Input ref={passwordRef} label='Password' id='login_password' type='password' />
				</fieldset>
				{error && (
					<p className='text-e-red mb-8'>Invalid login data. Please check your email and password and try again.</p>
				)}
				<div className='flex gap-4'>
					<Button
						onClick={() => {
							handleResetForm();
							authCtx.setOnLogin(false);
						}}
						type='reset'
						isBlocked={onVerification}>
						Cancel
					</Button>
					<Button className='dark' type='submit' isBlocked={onVerification}>
						Log In
					</Button>
				</div>
			</form>
		</Modal>
	);
};

export default LogIn;
