import { RecipeCard } from "../components/recipe-card";
import drinksdesserts from "../data/drinks-desserts-recipes.json";

export function DrinksDessertsRecipes() {
	return (
		<main
			style={{
				overflow: "scroll",
				flexGrow: 1,
				display: "flex",
				flexDirection: "row",
				flexWrap: "wrap",
				gap: "1rem",
				justifyContent: "center",
			}}
		>
			{drinksdesserts.map((drinksdesserts) => {
				return <RecipeCard key={drinksdesserts.name} recipe={drinksdesserts} />;
			})}
		</main>
	);
}
