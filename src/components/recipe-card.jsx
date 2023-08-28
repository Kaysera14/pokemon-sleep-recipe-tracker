import { useState } from "react";
import { IngredientsRequiredToImages } from "../utils/ingredients-to-img.jsx";

export function RecipeCard({ recipe }) {
	const [isActive, setIsActive] = useState(false);

	const [hovered, setHovered] = useState(false);
	const toggleHover = () => setHovered(!hovered);

	const handleClick = (event) => {
		setIsActive((current) => !current);
		setTimeout(() => {
			setIsActive((current) => !current);
		}, 800);
	};

	return (
		<article
			className={isActive ? "animate_animated animate__flipOutY" : ""}
			style={{
				border: "1px solid black",
				borderRadius: "1rem",
				display: "flex",
				justifyContent: "center",
				padding: "0.5rem",
				width: "14.87rem",
				backgroundColor: "var(--secondary-color)",
			}}
			onClick={handleClick}
			onMouseEnter={toggleHover}
			onMouseLeave={toggleHover}
		>
			<section
				className={hovered ? "animate__animated animate__pulse" : ""}
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<h2>{recipe.name}</h2>
				<img
					src={recipe.image}
					alt={"Picture of " + recipe.name}
					style={{ width: "10rem" }}
				/>

				{/* <p style={{ width: "10rem", textAlign: "right" }}>
					<b>Total ingredients</b>: {recipe.totalIngredients}
				</p>
				<p
					style={{
						display: "flex",
						alignItems: "center",
						width: "inherit",
						justifyContent: "flex-start",
					}}
				>
					<b>Ingredients required:</b>{" "}
					<IngredientsRequiredToImages recipes={recipe} />
				</p> */}
			</section>
		</article>
	);
}
