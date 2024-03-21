// components/Form.js
import React, { useEffect, useState } from 'react';
// We import the Table component, which we'll use to display the table in our form. (?its coming in?)
import Table from './Table';
import RecipeCard from './RecipeCard';

function Form() {
  // We use the useState hook to create a state variable rows, 
  // which will hold the data for each row in our table. Initially, it's set to an empty array.
  const [rows, setRows] = useState([]);
  const [title, setTitle] = useState(''); // State for recipe title
  const [instructions, setInstructions] = useState('') // State for the instructions
  const [totalCost, setTotalCost] = useState(0)
  const [recipe, setRecipe] = useState([]) // State for the recipe [title, ingredients, instructions, totalCost]
  const [showRecipeCard, setShowRecipeCard] = useState(false); // State to show recipe card

  // ! Explain this !
  useEffect(() => {
    calculateTotalCost();
  }, [rows]);

 //This function calculates the total cost of all ingredients entered in the table.
 const calculateTotalCost = () => {
  let total = 0;
  rows.forEach(row => {
    const pricePerKilo = parseFloat(row.pricePerKilo);
    const gramPerPortion = parseFloat(row.gramPerPortion);
    if (!isNaN(pricePerKilo) && !isNaN(gramPerPortion) && gramPerPortion !== 0) {
      total += (gramPerPortion / 1000) * pricePerKilo;
    }
  });
  setTotalCost(total.toFixed(2));
};



  // This function is responsible for adding a new row to the table 
  // when the "Add Row" button is clicked. It updates the rows state by 
  // adding a new object with empty values for each field.
  const addTableRow = () => {
    setRows(prevRows => [...prevRows, {
      name: '',
      pricePerKilo: '',
      gramPerPortion: '',
      pricePerPortion: ''
    }]);
  };

  // This function removes a row from the table when the "Remove" button is clicked. 
  // It filters out the row to be removed based on its index in the rows array.
  const removeTableRow = (indexToRemove) => {
    setRows(prevRows => prevRows.filter((row, index) => index !== indexToRemove));
  };

  const removeAllRows = () => {
    setRows([]),setInstructions([]),setTitle([])
    console.log('the rows are : ', rows)
    console.log('the instructions are : ', instructions)
    console.log('the title is : ', title)
  }

  // This function handles input changes in the table rows. 
  // It updates the corresponding field in the rows state based on the input's name and value.
  const handleInputChange = (index, event) => {
    console.log('the index:', index, 'the event', event)
    const { name, value } = event.target;
    console.log('the name: ', name, 'the value: ', value)
    const updatedRows = [...rows];
    console.log('const updateRows with ... ', updatedRows)
    updatedRows[index][name] = value;
    console.log('updatedRows[index][name] = value;', updatedRows[index][name])
    setRows(updatedRows);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleInstructionsChange = (event) => {
    setInstructions(event.target.value);
  };

  const saveRecipe = () => {  
    // Save recipe with title and ingredient details to the recipe state
    setRecipe({
      title: title,
      ingredients: rows,
      instructions: instructions,
      totalCost: totalCost
    });
      // Add instructions and other details as needed

    // After saving the recipe, set showRecipeCard to true to display the card
    setShowRecipeCard(true);
    console.log(recipe); // Example: Log recipe data for testing
  };


  // We render a form element containing a button 
  // to add rows and the Table component to display the table.
  return (
    <div className='container'>


      <div className='mb-4'>
        <button type="button" className="btn btn-outline-success" onClick={addTableRow}>Add Recipe</button>
      </div>

      <div className='mb-4'>
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          style={{ width: '50%', margin: 'auto', display: rows.length  ? '' : 'none' }} // Adjusting width and centering
          value={title} 
          onChange={handleTitleChange}
        />
      </div>

      <div className='row'>
        {rows.length > 0 && <Table rows={rows} removeTableRow={removeTableRow} handleInputChange={handleInputChange} totalCost={totalCost} />}
      </div>

      <div className="mb-4 text-center"> {/* Centering text area */}
        <textarea
          className="form-control"
          placeholder="Instructions"
          rows={5}
          style={{ width: '50%', margin: 'auto', display: rows.length ? '' : 'none' }} // Adjusting width and centering
          onChange={handleInstructionsChange}
        />
      </div>
      <div className='mb-4'>
        <button type="button" className="btn btn-outline-primary" onClick={saveRecipe} style={{ display: rows.length >= 1 ? '' : 'none' }}>Save Recipe</button>
      </div>
      <div className='mb-4'>
        <button type="button" className="btn btn-outline-danger" onClick={removeAllRows} style={{ display: rows.length >= 2 ? '' : 'none' }}>Remove all Rows </button>
      </div>

          {/* Conditionally render the recipe card if showRecipeCard is true */}
          {showRecipeCard && (
        <RecipeCard
          recipe={recipe}
        />
      )}

    </div>
  );
}

export default Form;
