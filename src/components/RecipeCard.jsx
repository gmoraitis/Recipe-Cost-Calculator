import React from "react";

function RecipeCard({recipe}) {
  return (
    // We render the recipe details passed as props in a card component.
    // We map through the ingredients array and display each ingredient's details.
    // We display the total cost of the recipe.

    <div class="card text-center">
  <div class="card-header">
    Recipe
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        <hr></hr>
        <h6 className="card-subtitle mb-2 text-muted">Instructions:</h6>
        <p className="card-text">{recipe.instructions}</p>
        <hr></hr>
        <h6 className="card-subtitle mb-2">Ingredients:
        {/* ad a table to present the ingredients  */}
        <table className="table">
            <thead>
                <tr>
                <th>Name</th>
                <th>Price Per Kilo</th>
                <th>Gramms per portion</th>
                {/* <th>Price Per Portion</th> */}
                </tr>
            </thead>
            <tbody>
                {recipe.ingredients.map((ingredient, index) => (
                <tr key={index}>
                    <td>
                    {ingredient.name}
                    </td>
                    <td>
                    {ingredient.pricePerKilo}
                    </td>
                    <td>
                    {ingredient.gramPerPortion}
                    </td>
                    {/* <td>
                    {ingredient.pricePerPortion}
                    </td> */}
                </tr>
                ))}
            </tbody>

        </table>

            {/* <p>Ingredient Name : {ingredient.name}</p>
            <p> Price Per Kilo :{ingredient.pricePerKilo}</p>
            <p> Gramms per portion :{ingredient.gramPerPortion}</p> */}
            {/* <p> Total price per portion{ingredient.pricePerPortion}</p> */}


        </h6>
        <p className="card-text">Total Cost: {recipe.totalCost}</p>
      </div>
    </div>
    </div>
    </div>
  );
}

export default RecipeCard;