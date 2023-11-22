import { useEffect, useState } from "react";
import { Main } from "../components/main";
import { RecipeCard } from "../components/recipe-card";
import { saladURL } from "../utils/constants";
import axios from "axios";

export function SaladRecipes() {
	const [salad, setSalad] = useState([]);

	useEffect(() => {
		axios.get(saladURL).then(({ data }) => setSalad(data.data));
	}, []);

	return (
		<Main>
			{salad.map(({ id, attributes }) => {
				return <RecipeCard key={id} recipe={attributes} />;
			})}
		</Main>
	);
}
