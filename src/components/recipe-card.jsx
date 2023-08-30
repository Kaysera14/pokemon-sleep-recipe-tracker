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

	const [isChecked, setChecked] = useState(true);

	const storeValue = () => {
		if (localStorage.getItem(recipe.name) == 1) {
			localStorage.removeItem(recipe.name);
		} else {
			localStorage.setItem(recipe.name, 1);
			setSelected(target.checked);
			setChecked(target.checked);
		}
	};

	return (
		<ReactCardFlip isFlipped={isActive} flipDirection="horizontal">
			<article
				style={{
					border: "1px solid black",
					borderRadius: "1rem",
					display: "flex",
					justifyContent: "center",
					padding: "0.5rem",
					width: "14.87rem",
					backgroundColor: "var(--secondary-color)",
					height: "12.5rem",
				}}
				onClick={handleClick}
				onMouseEnter={toggleHover}
				onMouseLeave={toggleHover}
			>
				<section
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
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
				style={{
					border: "1px solid black",
					borderRadius: "1rem",
					display: "flex",
					justifyContent: "center",
					padding: "0.5rem",
					width: "14.87rem",
					backgroundColor: "var(--secondary-color)",
					height: "12.5rem",
				}}
				onClick={handleClick}
				onMouseEnter={toggleHover}
				onMouseLeave={toggleHover}
			>
				<section
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						height: "inherit",
						width: "15rem",
						justifyContent: "space-between",
					}}
				>
					<h2 style={{ color: "var(--quaternary-color)" }}>{recipe.name}</h2>
					<p
						style={{
							width: "10rem",
							textAlign: "right",
							color: "var(--quaternary-color)",
						}}
					>
						<b>Total ingredients</b>: {recipe.totalIngredients}
					</p>
					<p
						style={{
							display: "flex",
							alignItems: "center",
							width: "inherit",
							flexWrap: "wrap",
							justifyContent: "center",
							color: "var(--quaternary-color)",
						}}
					>
						{recipe.name.includes("Mixed") ? (
							<b>No ingredients required</b>
						) : (
							<b>Ingredients required:</b>
						)}
					</p>
					<span
						style={{
							display: "flex",
							flexDirection: "row",
							flexWrap: "wrap",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<IngredientsRequiredToImages recipes={recipe} />
					</span>
					<h3
						style={{
							color: "var(--quaternary-color)",
							display: "flex",
							flexDirection: "row-reverse",
							alignItems: "center",
							height: "4rem",
						}}
					>
						Unlocked?{" "}
						<Checkbox
							sx={{
								color: red[900],
								"&.Mui-checked": {
									color: green[900],
								},
							}}
							onClick={handleClick}
							onChange={storeValue}
							checked={
								localStorage.getItem(recipe.name) == 1 ? isChecked : !isChecked
							}
						/>
					</h3>
				</section>
			</article>
		</ReactCardFlip>
	);
}
