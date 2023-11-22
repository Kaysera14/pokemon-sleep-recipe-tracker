import { useEffect, useState } from "react";
import { Main } from "../components/main";
import { RecipeCard } from "../components/recipe-card";
import { dessertsURL } from "../utils/constants";
import axios from "axios";

export function DrinksDessertsRecipes() {
	const [desserts, setDesserts] = useState([]);

	useEffect(() => {
		axios.get(dessertsURL).then(({ data }) => setDesserts(data.data));
	}, []);

	return (
		<Main>
			{desserts.map(({ id, attributes }) => {
				return <RecipeCard key={id} recipe={attributes} />;
			})}
		</Main>
	);
}
