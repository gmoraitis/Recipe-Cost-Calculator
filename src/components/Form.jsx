import React, { useState } from 'react';

function Form() {
  const [recipes, setRecipes] = useState([
    {
      id: Date.now(),
      title: 'Recipe Title',
      rows: [
        { id: Date.now(), ingredient: '', pricePerKilo: '', gramsPerPortion: '', pricePerPortion: 0 },
      ],
      total: 0,
    },
  ]);

  // Add a new recipe
  const addRecipe = () => {
    setRecipes([
      ...recipes,
      {
        id: Date.now(),
        title: 'New Recipe',
        rows: [
          { id: Date.now(), ingredient: '', pricePerKilo: '', gramsPerPortion: '', pricePerPortion: 0 },
        ],
        total: 0,
      },
    ]);
  };

  // Remove a recipe
  const removeRecipe = (recipeId) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== recipeId));
  };

  // Add a new row to a recipe
  const addRow = (recipeId) => {
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === recipeId
          ? {
              ...recipe,
              rows: [
                ...recipe.rows,
                { id: Date.now(), ingredient: '', pricePerKilo: '', gramsPerPortion: '', pricePerPortion: 0 },
              ],
            }
          : recipe
      )
    );
  };

  // Remove a row from a recipe
  const removeRow = (recipeId, rowId) => {
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === recipeId
          ? {
              ...recipe,
              rows: recipe.rows.filter((row) => row.id !== rowId),
              total: calculateTotal(recipe.rows.filter((row) => row.id !== rowId)),
            }
          :  recipe 
      )
    );
  };

  // Handle input changes
  const handleInputChange = (recipeId, rowId, field, value) => {
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === recipeId
          ? {
              ...recipe,
              rows: recipe.rows.map((row) =>
                row.id === rowId
                  ? { ...row, [field]: value, pricePerPortion: calculatePricePerPortion(row, field, value) }
                  : row
              ),
              total: calculateTotal(
                recipe.rows.map((row) =>
                  row.id === rowId
                    ? { ...row, [field]: value, pricePerPortion: calculatePricePerPortion(row, field, value) }
                    : row
                )
              ),
            }
          : recipe
      )
    );
  };

  // Calculate price per portion for a row
  const calculatePricePerPortion = (row, field, value) => {
    const updatedRow = { ...row, [field]: value };
    const pricePerKilo = parseFloat(updatedRow.pricePerKilo || 0);
    const gramsPerPortion = parseFloat(updatedRow.gramsPerPortion || 0);
    return ((pricePerKilo * gramsPerPortion) / 1000).toFixed(2);
  };

  // Calculate total for a recipe
  const calculateTotal = (rows) => {
    return rows.reduce((acc, row) => acc + parseFloat(row.pricePerPortion || 0), 0).toFixed(2);
  };

  return (
    <div>

      {/* Add Recipe Button */}
      <button onClick={addRecipe} className="btn btn-outline-success  mb-3">
        Add Recipe
      </button>

      {/* Recipe List */}
      {recipes.map((recipe) => (
        <div key={recipe.id} className="mb-3">
          <input
            type="text"
            className="form-control mb-3"
            value={recipe.title}
            onChange={(e) =>
              setRecipes(
                recipes.map((r) => (r.id === recipe.id ? { ...r, title: e.target.value } : r))
              )
            }
            placeholder="Recipe Title"
          />

          {/* Table */}
          <div className="table-responsive">
            <table className="table table-dark table-bordered">
              <thead>
                <tr>
                  <th>Ingredient</th>
                  <th>Price Per Kilo</th>
                  <th>Grams Per Portion</th>
                  <th>Price Per Portion</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {recipe.rows.map((row) => (
                  <tr key={row.id}>
                    <td>
                      <input
                        type="text"
                        placeholder="Ingredient"
                        value={row.ingredient}
                        onChange={(e) => handleInputChange(recipe.id, row.id, 'ingredient', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        placeholder="0.00"
                        value={row.pricePerKilo}
                        onChange={(e) => handleInputChange(recipe.id, row.id, 'pricePerKilo', e.target.value)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        placeholder="0"
                        value={row.gramsPerPortion}
                        onChange={(e) => handleInputChange(recipe.id, row.id, 'gramsPerPortion', e.target.value)}
                      />
                    </td>
                    <td>
                      <input type="text" readOnly value={row.pricePerPortion} />
                    </td>
                    <td>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeRow(recipe.id, row.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add Row and Remove Recipe */}
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-outline-info" onClick={() => addRow(recipe.id)}>
              Add Row
            </button>
            <button className="btn btn-outline-danger" onClick={() => removeRecipe(recipe.id)}>
              Remove Recipe
            </button>
          </div>

          {/* Total */}
          <div className="mt-3 text-right">
            <strong>Total: ${recipe.total}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Form;
