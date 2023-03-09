import { useState } from "react";

export const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
    userOwner: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(recipe);
    setRecipe({ ...recipe, [name]: value });
  };

  return (
    <div className="create-recipe">
      <h2>Create Recipe</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          onChange={handleChange}
        />

        <label htmlFor="ingredients">Ingredients</label>
        <button onClick={addIngredient}>Add Ingredient</button>
        <label htmlFor="instructions">Instructions</label>
        <input
          type="text"
          id="instructions"
          name="instructions"
          onChange={handleChange}
        />
        <label htmlFor="imageUrl">imageUrl</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          onChange={handleChange}
        />
        <label htmlFor="cookingTime">cookingTime</label>
        <input
          type="number"
          id="cookingTime"
          name="cookingTime"
          onChange={handleChange}
        />

        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};
