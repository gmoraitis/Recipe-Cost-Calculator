// components/IngredientRow.js
import React from 'react';

function IngredientRow({ row, index, removeTableRow }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the specific field in the row
    // You can implement the logic to update the row in the parent component's state here
  };

  return (
    <tr>
      <td><input type="text" className="form-control" name="name" value={row.name} onChange={handleChange} /></td>
      <td><input type="number" className="form-control" name="pricePerKilo" value={row.pricePerKilo} onChange={handleChange} /></td>
      <td><input type="number"  className="form-control" name="gramPerPortion" value={row.gramPerPortion} onChange={handleChange} /></td>
      <td><input type="number"  className="form-control" name="pricePerPortion" value={row.pricePerPortion} onChange={handleChange} /></td>
      <td>
        <button type="button" className="btn btn-outline-success" onClick={() => removeTableRow(index)}>Remove</button>
      </td>
    </tr>
  );
}

export default IngredientRow;
