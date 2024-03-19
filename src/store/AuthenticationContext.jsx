import { createContext, useState } from 'react';

export const AuthenticationContext = createContext({
	username: '',
	isAuth: false,
	onLogin: false,
	setAuth: () => {},
	setOnLogin: () => {},
});

const AuthContextProvider = ({ children }) => {
	const [username, setUsername] = useState('');
	const [isAuth, setIsAuth] = useState(false);
	const [onLogin, setOnLogin] = useState(false);

	const setAuthentication = value => {
		setIsAuth(value);
	};

	const handleSetOnLogin = value => {
		setOnLogin(value);
	};

	const authCtx = {
		username,
		isAuth,
		onLogin,
		setAuth: setAuthentication,
		setOnLogin: handleSetOnLogin,
	};

	return <AuthenticationContext.Provider value={authCtx}>{children}</AuthenticationContext.Provider>;
};

export default AuthContextProvider;
