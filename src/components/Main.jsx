import { useState } from 'react';
import Header from './Header.jsx';
import Meals from './Meals.jsx';
import Recipe from './Recipe.jsx';
import MEALS from '../meals.js';

const Main = () => {
	const [selectedMeal, setSelectedMeal] = useState(-1);
	const existingRecipe = MEALS.find(meal => meal.id === selectedMeal);

	const handleResetRecipes = () => {
		setSelectedMeal(-1);
	};

	if (existingRecipe) {
		return <Recipe meal={existingRecipe} resetRecipes={handleResetRecipes} />;
	}

	return (
		<main>
			<Header />
			<Meals selectMeal={setSelectedMeal} />
		</main>
	);
};

export default Main;
