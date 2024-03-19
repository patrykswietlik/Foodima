const Recipe = ({ meal, resetRecipes }) => {
	return (
		<section>
			<h1>{meal.name}</h1>
			<p>{meal.description}</p>
			<button onClick={resetRecipes}>Reset</button>
		</section>
	);
};

export default Recipe;
