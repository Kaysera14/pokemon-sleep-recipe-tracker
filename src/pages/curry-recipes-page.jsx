import { useEffect, useState } from "react";
import { Main } from "../components/main";
import { RecipeCard } from "../components/recipe-card";
import { curryURL } from "../utils/constants";
import axios from "axios";

export function CurryRecipes() {
	const [curry, setCurry] = useState([]);

	useEffect(() => {
		axios.get(curryURL).then(({ data }) => setCurry(data.data));
	}, []);

	return (
		<Main>
			{curry.map(({ id, attributes }) => {
				return <RecipeCard key={id} recipe={attributes} />;
			})}
		</Main>
	);
}
