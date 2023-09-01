import { Main } from "../components/main";
import { RecipeCard } from "../components/recipe-card";
import salad from "../data/salad-recipes.json";

export function SaladRecipes() {
	return (
		<Main>
			{salad.map((salad) => {
				return <RecipeCard key={salad.name} recipe={salad} />;
			})}
		</Main>
	);
}
