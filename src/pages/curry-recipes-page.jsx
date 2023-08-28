import { RecipeCard } from "../components/recipe-card";
import curry from "../data/curry-recipes.json";

export function CurryRecipes() {
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
			{curry.map((curry) => {
				return <RecipeCard key={curry.name} recipe={curry} />;
			})}
		</main>
	);
}
