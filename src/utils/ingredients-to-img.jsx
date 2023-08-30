export function IngredientsRequiredToImages({ recipes }) {
	const images = Object.entries(recipes.ingredientsRequired).map(
		([ingredient, quantity]) => {
			return (
				<>
					<span
						key={quantity}
						style={{ color: "var(--quaternary-color)" }}
					>{`\n${quantity}x `}</span>
					<img
						key={ingredient}
						src={`/assets/ingredients/${ingredient}.png`}
						alt={`Picture of: ${ingredient}`}
						style={{ width: "2rem" }}
					/>
				</>
			);
		}
	);
	return images;
}
