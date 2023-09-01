import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { IngredientsRequiredToImages } from "../utils/ingredients-to-img.jsx";
import { Checkbox } from "@mui/material";
import { green, red } from "@mui/material/colors";

export function RecipeCard({ recipe }) {
	const [isActive, setIsActive] = useState(false);

	const [isHovered, setHovered] = useState(false);
	const toggleHover = () => setHovered(!isHovered);

	const handleClick = () => {
		setIsActive((current) => !current);
	};

	let [isChecked, setChecked] = useState(false);

	const handleCheck = () => {
		if (localStorage.getItem(recipe.name) == 1) {
			localStorage.removeItem(recipe.name);
			setChecked(false);
		} else {
			localStorage.setItem(recipe.name, 1);
			setChecked(true);
		}
	};

	return (
		<ReactCardFlip isFlipped={isActive} flipDirection="horizontal">
			<article
				className="flex justify-center border border-black rounded-2xl bg-[var(--secondary-color)] py-2 w-[10.75rem] h-52"
				onClick={handleClick}
				onMouseEnter={toggleHover}
			>
				<section className="flex flex-col items-center justify-between">
					<h2 style={{ color: "var(--quaternary-color)" }}>{recipe.name}</h2>
					<img
						src={recipe.image}
						alt={"Picture of " + recipe.name}
						style={{ width: "10rem" }}
						className={
							!isActive && isHovered ? "animate__animated animate__pulse" : ""
						}
					/>
				</section>
			</article>
			<article
				className="flex justify-center border border-black rounded-2xl bg-[var(--secondary-color)] py-2 w-[10.75rem] h-52"
				onClick={handleClick}
				onMouseEnter={toggleHover}
			>
				<section className="flex flex-col items-center justify-between">
					<p className="text-[var(--quaternary-color)]">
						<b>{recipe.totalIngredients} ingredients</b>
					</p>
					<p className="text-[var(--quaternary-color)]">
						{recipe.name.includes("Mixed") ? (
							<b>No ingredients required</b>
						) : (
							<span className="flex flex-row flex-wrap justify-center items-center max-w-[8.2rem]">
								<IngredientsRequiredToImages recipes={recipe} />
							</span>
						)}
					</p>

					<h3 className="text-[var(--quaternary-color)]">
						<Checkbox
							sx={{
								color: red[900],
								"&.Mui-checked": {
									color: green[900],
								},
							}}
							onClick={handleClick}
							onChange={handleCheck}
							checked={
								localStorage.getItem(recipe.name) == 1
									? (isChecked = true)
									: (isChecked = false)
							}
						/>
						Unlocked?
					</h3>
				</section>
			</article>
		</ReactCardFlip>
	);
}
