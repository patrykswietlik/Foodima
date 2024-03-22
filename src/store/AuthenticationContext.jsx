import { createContext, useState } from 'react';

export const AuthenticationContext = createContext({
	username: '',
	isAuth: false,
	onLogin: false,
	onSignin: false,
	setAuth: () => {},
	setOnLogin: () => {},
	setOnSignin: () => {},
});

const AuthContextProvider = ({ children }) => {
	const [username, setUsername] = useState('');
	const [isAuth, setIsAuth] = useState(false);
	const [onLogin, setOnLogin] = useState(false);
	const [onSignin, setOnSignin] = useState(false);

	const setAuthentication = value => {
		setIsAuth(value);
	};

	const handleSetOnLogin = value => {
		setOnLogin(value);
	};

	const handleSetOnSignin = value => {
		setOnSignin(value);
	};

	const authCtx = {
		username,
		isAuth,
		onLogin,
		onSignin,
		setAuth: setAuthentication,
		setOnLogin: handleSetOnLogin,
		setOnSignin: handleSetOnSignin,
	};

	return <AuthenticationContext.Provider value={authCtx}>{children}</AuthenticationContext.Provider>;
};

export default AuthContextProvider;
