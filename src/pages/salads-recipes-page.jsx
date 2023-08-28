import { RecipeCard } from "../components/recipe-card";
import salad from "../data/salad-recipes.json";

export function SaladRecipes() {
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
			{salad.map((salad) => {
				return <RecipeCard key={salad.name} recipe={salad} />;
			})}
		</main>
	);
}
