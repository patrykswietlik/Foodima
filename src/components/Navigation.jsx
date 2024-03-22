import { useContext } from 'react';
import Button from './UI/Button';
import { AuthenticationContext } from '../store/AuthenticationContext';

const Navigation = () => {
	const authCtx = useContext(AuthenticationContext);

	return (
		<nav className='py-4 flex items-center justify-between bg-white text-black'>
			<div className='w-full max-w-7xl mx-auto px-4 flex items-center justify-between'>
				<div className='flex items-center gap-32'>
					<h1 className='font-extrabold text-2xl'>Foodima</h1>
					<div className='flex gap-8'>
						<a href='#'>Recipes</a>
						<a href='#'>Events</a>
						<a href='#'>Shop</a>
						<a href='#'>Blog</a>
					</div>
				</div>
				{!authCtx.isAuth && (
					<div className='flex gap-4'>
						<Button
							className='dark'
							onClick={() => {
								authCtx.setOnLogin(true);
							}}>
							Log In
						</Button>
						<Button
							onClick={() => {
								authCtx.setOnSignin(true);
							}}>
							Sign In
						</Button>
					</div>
				)}
				{authCtx.isAuth && (
					<div className='flex gap-4'>
						<Button
							className='dark'
							onClick={() => {
								authCtx.setAuth(false);
							}}>
							Log Out
						</Button>
						<Button>Account</Button>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navigation;
