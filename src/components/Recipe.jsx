import img from '../assets/meal-default.jpg';
import Button from './UI/Button';

const Recipe = ({ recipe, resetRecipes }) => {
	return (
		<section className='py-4 pt-0 mt-12 bg-white flex flex-col border-4 border-e-gray rounded-2xl shadow-xl overflow-hidden'>
			<div className='relative h-24 flex items-center justify-center'>
				<h2 className='text-4xl text-e-yellow font-extrabold uppercase z-10'>{recipe.name}</h2>
				<div className='absolute top-0 left-0 p-2 z-10'>
					<Button onClick={resetRecipes}>Go Back</Button>
				</div>
				<img
					src={recipe.img !== '' ? recipe.img : img}
					alt='Just a random food'
					className='absolute w-full h-full object-cover brightness-50 z-0'
				/>
			</div>
			<div className='flex p-4 mb-4'>
				<div className='px-4'>
					<h3 className='mb-2 text-xl font-bold'>Ingredients</h3>
					{recipe.ingredients.map(ingredient => (
						<li className='mb-2 flex items-center'>
							<i className='fa-solid fa-circle-plus text-[0.75rem] mr-2'></i>
							{ingredient}
						</li>
					))}
				</div>
				<div className='px-4'>
					<h3 className='mb-2 text-xl font-bold'>Steps</h3>
					{recipe.steps.map((step, index) => (
						<p className='mb-2'>
							{+index + 1}. {step}
						</p>
					))}
				</div>
			</div>
		</section>
	);
};

export default Recipe;
