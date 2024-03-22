import Navigation from './components/Navigation';
import LogIn from './components/LogIn.jsx';
import Wrapper from './components/UI/Wrapper';
import AuthContextProvider from './store/AuthenticationContext.jsx';
import Main from './components/Main.jsx';
import SignIn from './components/SignIn.jsx';

function App() {
	return (
		<AuthContextProvider>
			<Navigation />
			<Wrapper>
				<LogIn />
				<SignIn />
				<Main />
			</Wrapper>
		</AuthContextProvider>
	);
}

export default App;
