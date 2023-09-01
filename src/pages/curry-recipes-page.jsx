import { Main } from "../components/main";
import { RecipeCard } from "../components/recipe-card";
import curry from "../data/curry-recipes.json";

export function CurryRecipes() {
	return (
		<Main>
			{curry.map((curry) => {
				return <RecipeCard key={curry.name} recipe={curry} />;
			})}
		</Main>
	);
}
