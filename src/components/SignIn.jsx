import Modal from './UI/Modal';
import Input from './UI/Input';
import Button from './UI/Button';

import bcrypt from 'bcryptjs-react';

import { useContext, useRef, useState } from 'react';
import { AuthenticationContext } from '../store/AuthenticationContext';

const SignIn = () => {
	const authCtx = useContext(AuthenticationContext);
	const emailRef = useRef();
	const passwordRef = useRef();
	const userNameRef = useRef();
	const userSurnameRef = useRef();
	const [onVerification, setOnVerification] = useState(false);
	const [error, setError] = useState();

	const handleValidateForm = () => {
		const email = emailRef.current.value.trim();
		const password = passwordRef.current.value.trim();
		const name = userNameRef.current.value.trim();
		const surname = userSurnameRef.current.value.trim();

		if (email.length == 0 || password.length == 0 || name.length == 0 || surname.length == 0) {
			setError("All fields are required. You can't leave them empty");
			return false;
		}

		setError(undefined);
		return true;
	};

	const handleResetForm = () => {
		emailRef.current.value = '';
		passwordRef.current.value = '';
		userNameRef.current.value = '';
		userSurnameRef.current.value = '';
		setError(undefined);
	};

	const handlePostUser = async userData => {
		const response = await fetch('https://foodima-5fdef-default-rtdb.firebaseio.com/users.json', {
			method: 'POST',
			body: JSON.stringify(userData),
			headers: {
				'Content-Type': 'application/json',
			},
		});

		return response;
	};

	const handleIfEmailAlreadyExist = async email => {
		const response = await fetch('https://foodima-5fdef-default-rtdb.firebaseio.com/users.json');
		const resData = await response.json();
		if (!resData) {
			return false;
		}
		const dataArray = Object.keys(resData).map(key => ({
			id: key,
			...resData[key],
		}));
		const userData = dataArray.find(user => user.email === email);
		if (userData) {
			setError('Account with this email aready exist.');
			return true;
		}
		return false;
	};

	const handleSubmit = async e => {
		// validation
		e.preventDefault();
		const validation = handleValidateForm();
		const duplicate = await handleIfEmailAlreadyExist(emailRef.current.value);
		const currentDate = new Date();
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(passwordRef.current.value, salt);
		if (validation && !duplicate) {
			const userData = {
				createdAt: currentDate,
				email: emailRef.current.value,
				fullName: `${userNameRef.current.value} ${userSurnameRef.current.value}`,
				password: hash,
			};

			const response = await handlePostUser(userData);

			if (response.ok) {
				authCtx.setAuth(true);
				authCtx.setOnSignin(false);
				handleResetForm();
			} else {
				setError('Something went wrong!');
			}
		}
	};

	return (
		<Modal open={authCtx.onSignin}>
			<form onSubmit={handleSubmit}>
				<h2 className='mb-6 text-4xl font-semibold'>Sign In</h2>
				<fieldset className='flex gap-4 mb-4 p-4 border-2 border-e-gray rounded-xl'>
					<legend className='px-2'>Get to Know Each Other</legend>
					<Input ref={userNameRef} label='Name' id='signup_username' type='text' />
					<Input ref={userSurnameRef} label='Surname' id='signup_surname' type='text' />
				</fieldset>
				<fieldset className='flex gap-4 mb-4 p-4 border-2 border-e-gray rounded-xl'>
					<legend className='px-2'>Your Verification Data</legend>
					<Input ref={emailRef} label='E-mail' id='signup_email' type='email' />
					<Input ref={passwordRef} label='Password' id='signup_password' type='password' />
				</fieldset>
				{error && <p className='text-e-red mb-8'>{error}</p>}
				<div className='flex gap-4'>
					<Button
						onClick={() => {
							handleResetForm();
							authCtx.setOnSignin(false);
						}}
						type='reset'
						isBlocked={onVerification}>
						Cancel
					</Button>
					<Button className='dark' type='submit' isBlocked={onVerification}>
						Sign In
					</Button>
				</div>
			</form>
		</Modal>
	);
};

export default SignIn;
