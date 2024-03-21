import Navigation from './components/Navigation';
import LogIn from './components/LogIn.jsx';
import Wrapper from './components/UI/Wrapper';
import AuthContextProvider from './store/AuthenticationContext.jsx';
import Main from './components/Main.jsx';

function App() {
	return (
		<AuthContextProvider>
			<Navigation />
			<Wrapper>
				<LogIn />
				<Main />
			</Wrapper>
		</AuthContextProvider>
	);
}

export default App;
