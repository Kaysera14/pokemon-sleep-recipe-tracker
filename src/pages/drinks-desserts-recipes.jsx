import { Main } from "../components/main";
import { RecipeCard } from "../components/recipe-card";
import drinksdesserts from "../data/drinks-desserts-recipes.json";

export function DrinksDessertsRecipes() {
	return (
		<Main>
			{drinksdesserts.map((drinksdesserts) => {
				return <RecipeCard key={drinksdesserts.name} recipe={drinksdesserts} />;
			})}
		</Main>
	);
}
