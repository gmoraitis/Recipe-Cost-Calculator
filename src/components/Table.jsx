// components/Table.js
import React from 'react';


function Table({ rows, removeTableRow, handleInputChange }) {
  const calculatePricePerPortion = (pricePerKilo, gramPerPortion) => {
    const kilo = 1000;
    // Ensure that both pricePerKilo and gramPerPortion are valid numbers before performing the calculation
    if (isNaN(pricePerKilo) || isNaN(gramPerPortion) || gramPerPortion === 0) {
      return ''; // Return an empty string if either value is invalid or if gramPerPortion is zero
    }
    const pricePerPortion = (gramPerPortion / kilo) * pricePerKilo;
    return pricePerPortion.toFixed(2);
  };
  

  const calculateTotalCost = () => {
    let totalCost = 0;
  
    rows.forEach(row => {
      const pricePerKilo = parseFloat(row.pricePerKilo);
      const gramPerPortion = parseFloat(row.gramPerPortion);
  
      // Check if either pricePerKilo or gramPerPortion is NaN
      if (isNaN(pricePerKilo) || isNaN(gramPerPortion)) {
        return; // Skip this row if either value is NaN
      }
  
      // Check if gramPerPortion is zero
      if (gramPerPortion === 0) {
        return; // Skip this row if gramPerPortion is zero
      }
  
      totalCost += (gramPerPortion / 1000) * pricePerKilo;
    });
  
    // Check if totalCost is NaN
    if (isNaN(totalCost)) {
      return '0.00'; // Return '0.00' if totalCost is NaN
    }
  
    return totalCost.toFixed(2);
  };
  

  return (
    <div className='container'>
      <div className='table-responsive-sm'>
      <table className="table-dark" id="ingredientTable" style={{ display: rows.length ? 'table' : 'none' }}>
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Price per Kilos</th>
            <th>Grams per Portion</th>
            <th>Price per Portion</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="ingredientBody">
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  name="name"
                  value={row.name}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="pricePerKilo"
                  value={row.pricePerKilo}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="gramPerPortion"
                  value={row.gramPerPortion}
                  onChange={(e) => handleInputChange(index, e)}
                />
              </td>
              <td>
                <input
                  type="number"
                  name="pricePerPortion"
                  value={calculatePricePerPortion(parseFloat(row.pricePerKilo), parseFloat(row.gramPerPortion))}
                  readOnly // Make it read-only so users cannot modify it directly
                />
              </td>
              <td>
                <button type="button" className="btn btn-outline-danger" onClick={() => removeTableRow(index)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      {rows.length > 0 && <p className='text-white'>Total Cost: ${calculateTotalCost()}</p>}
    </div>
  );
}

export default Table;
