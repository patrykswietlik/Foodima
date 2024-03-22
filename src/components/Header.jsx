import img from '../assets/header-img.png';

const Header = () => {
	return (
		<header className='mt-12 w-full h-48 bg-stone-700 rounded-3xl overflow-hidden shadow-xl border-2 border-e-gray'>
			<img src={img} alt='Italian food' className='w-full h-full object-cover' />
		</header>
	);
};

export default Header;
