// components/Table.js
import React from 'react';


function Table({ rows, removeTableRow, handleInputChange, totalCost }) {
  //This function calculates the price per portion based 
  //on the price per kilo and grams per portion.
  const calculatePricePerPortion = (pricePerKilo, gramPerPortion) => {
    const kilo = 1000;
    // Ensure that both pricePerKilo and gramPerPortion are valid numbers before performing the calculation
    if (isNaN(pricePerKilo) || isNaN(gramPerPortion) || gramPerPortion === 0) {
      return ''; // Return an empty string if either value is invalid or if gramPerPortion is zero
    }
    const pricePerPortion = (gramPerPortion / kilo) * pricePerKilo;
    return pricePerPortion.toFixed(2);
  };
  
 

  return (
    <div className='container'>
    <div className='table-responsive'>
      <table className='table table-dark'  style={{ display: rows.length ? 'table' : 'none' }}>
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Price per Kilos</th>
            <th>Grams per Portion</th>
            <th>Price per Portion</th>
            <th>Action</th>
          </tr> 
        </thead>
        <tbody>
        {/* We map through the rows array passed as a prop and render each row dynamically
        using input fields for each data attribute 
        (name, pricePerKilo, gramPerPortion, pricePerPortion). 
        These fields are bound to the handleInputChange function to update the state when edited. */}
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
              {/* We render a "Remove" button in each row, which triggers the 
              removeTableRow function passed as a prop when clicked. */}
                <button type="button" className="btn btn-outline-danger" onClick={() => removeTableRow(index)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* We display the total cost calculated by the calculateTotalCost function below the table. */}

  </div>
  <div className='mt-3'>
      {rows.length > 0 && <p className='text-white'>Total Cost: ${totalCost}</p>}
    </div>
    </div>
  );
}

export default Table;
