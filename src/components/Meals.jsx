import MEALS from '../meals.js';
import Meal from './Meal.jsx';

const Meals = ({ selectMeal }) => {
	return (
		<section className='w-full py-4 mt-12 flex flex-wrap justify-between gap-8'>
			{MEALS.map(meal => (
				<Meal key={meal.id} meal={meal} selectMeal={selectMeal} />
			))}
		</section>
	);
};

export default Meals;
