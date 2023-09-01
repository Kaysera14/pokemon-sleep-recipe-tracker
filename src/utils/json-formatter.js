//ready for a JSON
const recipes = [];

for (const recipe of recipes) {
	if (recipe.ingredientsRequired.includes("Mixed")) {
		recipe.ingredientsRequired = {};
		continue;
	}

	const ingredientsArray = recipe.ingredientsRequired.split(",");

	const ingredientObj = {};

	for (const ingredient of ingredientsArray) {
		const [ammount, ...ingredientName] = ingredient.trim().split(" ");

		const ingredientFormatted = ingredientName.join("").toLocaleLowerCase();

		ingredientObj[ingredientFormatted] = ammount;

		recipe.ingredientsRequired = ingredientObj;
	}
}

console.log(JSON.stringify(recetas));
