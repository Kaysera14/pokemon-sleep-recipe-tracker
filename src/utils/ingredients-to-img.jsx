export function IngredientsRequiredToImages({ recipes }) {
	const images = Object.entries(recipes.ingredientsRequired).map(
		([ingredient, quantity]) => {
			return (
				<>
					<span key={quantity}>{`${quantity}x `}</span>
					<img
						key={ingredient}
						src={`/assets/ingredients/${ingredient}.png`}
						alt={`Picture of: ${ingredient}`}
						style={{ width: "3rem" }}
					/>
				</>
			);
		}
	);
	return images;
}
