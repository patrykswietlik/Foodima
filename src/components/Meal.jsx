import img from '../assets/meal-default.jpg';

const Meal = ({ meal, selectMeal }) => {
	return (
		<li
			className='w-72 h-64 overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer bg-white text-black'
			onClick={() => {
				selectMeal(meal.id);
			}}>
			<img src={meal.img !== '' ? meal.img : img} alt='Meal' className='w-full h-1/2 mb-2 object-cover' />
			<div className='h-1/2 max-h-1/2 p-4 pt-2 flex flex-col justify-between'>
				<div>
					<h3 className='mb-2 font-bold'>{meal.name}</h3>
					<p className='font-light text-sm'>{meal.description}</p>
				</div>
				<div>
					<p className='flex justify-between items-center'>
						<span className='font-bold text-e-yellow text-sm'>
							{meal.rating}/5 <i className='fa-solid fa-star'></i>
						</span>
						<span className='text-e-grey text-sm'>{meal.author}</span>
					</p>
				</div>
			</div>
		</li>
	);
};

export default Meal;
